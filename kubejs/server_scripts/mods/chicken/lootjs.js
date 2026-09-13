//鹦鹉螺壳鸡
// 需要 LootJS 模组
LootJS.modifiers(event => {
    event.addEntityModifier('occultism:possessed_elder_guardian')
        .addLoot('chicken_roost:c_nautilusshell','chicken_roost:c_sponge');
})
LootJS.modifiers(event => {
    event.addEntityModifier('occultism:possessed_shulker')
        .addLoot('chicken_roost:c_chorusfruit');
})
LootJS.modifiers(event => {
    event.addEntityModifier('occultism:possessed_enderman')
        .addLoot('chicken_roost:c_enderpearl');
})
LootJS.modifiers(event => {
    event.addEntityModifier('occultism:possessed_endermite')
        .addLoot('chicken_roost:c_endstone');
})
LootJS.modifiers(event => {
    event.addEntityModifier('occultism:possessed_ghast')
        .addLoot('chicken_roost:c_ghasttear');
})
LootJS.modifiers(event => {
    event.addEntityModifier('occultism:possessed_witch')
        .addLoot('chicken_roost:c_xp');
})
LootJS.modifiers(event => {
    event.addEntityModifier('occultism:possessed_hoglin')
        .addLoot('chicken_roost:c_netherite');
})
LootJS.modifiers(event => {
    event.addEntityModifier("occultism:possessed_guardian")
        .addLoot('chicken_roost:c_prismarinecrystal','chicken_roost:c_prismarineshard');
    event.addEntityModifier("mecrh:ender_chicken")
        .addLoot('2x ccb:dragon_wings');
})
//沙砾鸡
LootJS.modifiers(event => {
    event.addEntityModifier('chicken_roost:c_cobble')
        .matchMainHand("mahoutsukai:hammer")
        .addLoot('chicken_roost:c_gravel');
})
//沙子鸡
LootJS.modifiers(event => {
    event.addEntityModifier('chicken_roost:c_gravel')
        .matchMainHand("mahoutsukai:hammer")
        .addLoot('chicken_roost:c_sand');
});
//羽毛鸡
EntityEvents.death(event => {
  const { entity, level } = event;

  // 只处理鸡的死亡
  if (entity.type !== 'minecraft:chicken') return;

  // 设定触发概率，0.2 即 20%
  const chance = 0.5;

  if (Math.random() < chance) {
    // 要生成的生物类型，可以换成任何实体 ID，如 'minecraft:zombie'、'minecraft:skeleton' 等
    const mobType = 'chicken_roost:c_feather';

    // 在死亡位置生成生物
    let spawned = level.createEntity(mobType);
    spawned.setPosition(entity.x, entity.y, entity.z);
    spawned.spawn();
  }
})
LootJS.modifiers((event) => {
    event.addBlockModifier('minecraft:oak_leaves')
       .addLoot(
            LootEntry.of('chicken_roost:c_apple')
                .matchMainHand('#c:seeds/tiered')
                .randomChance(0.1)
       )
        
})
LootJS.modifiers(event => {
    event.addEntityModifier('chicken_roost:c_flint')
        .matchMainHand("mahoutsukai:hammer")
        .addLoot('chicken_roost:c_tnt');
})

LootJS.modifiers(event => {
    event.addBlockModifier('ccb:nether_roost')
        .matchMainHand('modern_industrialization:steam_mining_drill')
        .removeLoot(ItemFilter.item(Item.of('ccb:nether_roost'), false))
        .addLoot('chicken_roost:c_carnallite');

    event.addBlockModifier('ccb:nether_roost')
        .matchMainHand('modern_industrialization:diesel_mining_drill')
        .removeLoot(ItemFilter.item(Item.of('ccb:nether_roost'), false))
        .addLoot('chicken_roost:c_cobald');

    event.addBlockModifier('ccb:nether_roost')
        .matchMainHand('extended_industrialization:electric_mining_drill')
        .removeLoot(ItemFilter.item(Item.of('ccb:nether_roost'), false))
        .addLoot('chicken_roost:c_adamantine');
});
