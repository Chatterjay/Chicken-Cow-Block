const pickFromWeighted = function (entries) {
  // entries: [{ id: "ns:fluid", weight: 10 }, ...]
  var total = 0;
  for (var i = 0; i < entries.length; i++) {
    var w = entries[i].weight || 0;
    if (w > 0) total += w;
  }
  if (total <= 0) return null;
  var r = Math.random() * total;
  for (var j = 0; j < entries.length; j++) {
    var wj = entries[j].weight || 0;
    if (wj <= 0) continue;
    if (r < wj) return entries[j].id;
    r -= wj;
  }
  return entries[entries.length - 1].id;
};

const pickFluidFromRule = function (rule) {
  // Supports: {fluid}, {fluids:[...]}, {weighted:[{id,weight},...]}
  if (rule.fluid) return rule.fluid;

  if (rule.weighted && rule.weighted.length > 0) {
    var chosen = pickFromWeighted(rule.weighted);
    if (chosen) return chosen;
  }

  if (rule.fluids && rule.fluids.length > 0) {
    var idx = Math.floor(Math.random() * rule.fluids.length);
    return rule.fluids[idx];
  }

  return null;
};

// --- Shared helper: wiggle → explode → discard → spawn target fluid cow ---
const transmuteCow = function (
  event,
  cow,
  targetFluidId,
  startMsgKey,
  completeMsgKey
) {
  const SoundEvents = Java.loadClass("net.minecraft.sounds.SoundEvents");
  const SoundSource = Java.loadClass("net.minecraft.sounds.SoundSource");

  // Start SFX + message
  event.player.level.playSound(
    null,
    event.player.x,
    event.player.y,
    event.player.z,
    SoundEvents.ZOMBIE_VILLAGER_CURE,
    SoundSource.PLAYERS,
    1.0,
    1.0
  );
  event.player.tell(Text.translate(startMsgKey));

  // Capture start pos
  const x = cow.x;
  const y = cow.y;
  const z = cow.z;

  // Wiggle
  const wiggleTicks = 160;
  for (let i = 0; i < wiggleTicks; i++) {
    event.level.server.scheduleInTicks(i, (_) => {
      const offsetX = (Math.random() - 0.5) * 0.4;
      const offsetZ = (Math.random() - 0.5) * 0.4;
      const offsetY = Math.sin((i / wiggleTicks) * Math.PI) * 0.4;
      cow.setPos(x + offsetX, y + offsetY, z + offsetZ);

      event.level.spawnParticles(
        "minecraft:sculk_charge",
        true,
        x,
        y + 1,
        z,
        0.3,
        0.3,
        0.3,
        3,
        0.05
      );
    });
  }

  // Transform
  event.level.server.scheduleInTicks(wiggleTicks, (_) => {
    if (cow.isRemoved()) {
      event.player.tell(Text.translate("ccb.clapple.transmutation.failed"));
      return;
    }

    const ex = cow.x;
    const ey = cow.y + 0.1;
    const ez = cow.z;

    // Explosion without terrain damage. Fallback to instant TNT if needed.
    try {
      event.level.explode(cow, ex, ey, ez, 1.0, false, "none");
    } catch (e) {
      event.server.runCommandSilent(
        "summon tnt " +
          ex.toFixed(2) +
          " " +
          ey.toFixed(2) +
          " " +
          ez.toFixed(2) +
          " {Fuse:0b}"
      );
    }

    cow.discard();

    // Spawn baby cow after the boom resolves
    event.level.server.scheduleInTicks(2, (_) => {
      let fluidCow = event.level.createEntity("moofluids:fluid_cow");
      fluidCow.setPos(ex, ey, ez);
      fluidCow.mergeNbt({ FluidRegistryName: targetFluidId, Age: -6000 });
      fluidCow.spawn();

      // Particles + SFX
      event.level.spawnParticles(
        "minecraft:heart",
        true,
        ex,
        ey + 1,
        ez,
        0.5,
        0.5,
        0.5,
        10,
        0.5
      );
      event.level.spawnParticles(
        "minecraft:glow",
        true,
        ex,
        ey + 0.5,
        ez,
        0.5,
        0.5,
        0.5,
        20,
        0.05
      );
      event.level.spawnParticles(
        "minecraft:item_slime",
        true,
        ex,
        ey + 0.5,
        ez,
        0.5,
        0.5,
        0.5,
        10,
        0.1
      );
      let fluidName = targetFluidId;
      try {
        fluidName = Fluid.of(targetFluidId).getDisplayName();
      } catch (e) {}

      event.player.tell(Text.translate(completeMsgKey, fluidName).gold());
      console.log("不错的转化: " + targetFluidId);
    });
  });
};


ItemEvents.entityInteracted(function (event) {
  
  if (event.level.isClientSide()) return;
  if (String(event.hand || "") !== "MAIN_HAND") return;

  if (event.target.type !== "minecraft:cow") return;
  if (!event.item || event.item.empty) return;

  
  var cow = event.target;
  var lockKey = "ccb_transmute_locked";
  if (cow.persistentData.getBoolean(lockKey)) {
    event.player.tell(Text.translate("ccb.clapple.transmutation.in_progress"));
    return;
  }

  var id = String(event.item.id);
  var matched = null;
  for (var i = 0; i < global.COW_TRANSMUTE_RULES.length; i++) {
    if (global.COW_TRANSMUTE_RULES[i].item === id) {
      matched = global.COW_TRANSMUTE_RULES[i];
      break;
    }
  }
  if (!matched) return;

  var fluidOut = pickFluidFromRule(matched);
  if (!fluidOut) return;

 
  cow.persistentData.putBoolean(lockKey, true);


  if (!event.player.isCreative()) {
    event.item.count--;
  }

  transmuteCow(
    event,
    cow,
    fluidOut,
    "ccb.clapple.transmutation.start",
    "ccb.clapple.transmutation.complete"
  );
});

ItemEvents.entityInteracted("chicken_roost:chicken_stick", (event) => {
  if (event.level.isClientSide()) return;
  if (String(event.hand || "") !== "MAIN_HAND") return;

  const cow = event.target;
  if (String(cow.type) !== "moofluids:fluid_cow") return;
  if (cow.isBaby && cow.isBaby()) return;

  let fluidId = "";
  try {
    fluidId = cow.nbt && cow.nbt.getString
      ? cow.nbt.getString("FluidRegistryName")
      : String(cow.nbt.FluidRegistryName || "");
  } catch (e) {}
  if (!fluidId) {
    try {
      const fluid = cow.getFluid();
      if (fluid) fluidId = String(fluid.id || fluid);
    } catch (e) {}
  }
  if (!fluidId || fluidId === "minecraft:empty") return;

  event.player.give(
    Item.of(`fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="${fluidId}"]`)
  );
  cow.discard();
  event.cancel();
});
