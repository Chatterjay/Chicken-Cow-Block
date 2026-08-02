let ALIEN_CHICKEN;

MIMachineEvents.registerRecipeTypes(event => {
    ALIEN_CHICKEN = event.register("alien_chicken")
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks(event => {
    const hatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
    const shape = event.layeredShape("ae2_casing", [
        ["           ", "           ", "           ", "           ", " bbbbbbbbb ", " bbbbbbbbb ", " bbbbbbbbb ", " bbbbbbbbb ", " bbbbbbbbb ", "           ", "           ", "           ", "           ", "           "],
        ["           ", "           ", "           ", "           ", " bbbbbbbbb ", "cb      bbc", "cb      bbc", "cb      bbc", "cbbbbbbbbbc", "           ", "           ", "           ", "           ", "           "],
        [" aaa   aaa ", "  a     a  ", "  a     a  ", "  a     a  ", " bbbbbbbbb ", "cb      bbc", "db      bbd", "db      bbd", "cbbbbbbbbbc", "           ", "           ", "           ", "           ", "           "],
        [" aaa   aaa ", "           ", "           ", "           ", " bbbbbbbbb ", "cb      bbc", "db      bbd", "db      bbd", "cbbbbbbbbbc", "           ", "           ", "           ", "           ", "           "],
        [" aaa   aaa ", "           ", "           ", "           ", " bbbbbbbbb ", "cb      bbc", "db      bbd", "db      bbd", "cbbbbbbbbbc", "           ", "           ", "           ", "           ", "           "],
        ["           ", "           ", "           ", "           ", " bbbbbbbbb ", "cb      bbc", "cb      bbc", "cb      bbc", "cbbbbbbbbbc", "           ", "           ", "           ", "           ", "           "],
        ["           ", "           ", "           ", "           ", " bbbbbbbbb ", " b      bb ", " b      bb ", " b      bb ", " bbbbbbbbb ", "           ", "           ", "           ", "           ", "           "],
        ["           ", "           ", "           ", "           ", " bbbb#bbbb ", " bbbbbbbbb ", " bbbbbbbbb ", " bbbbbbbbb ", " bbbbbbbbb ", "   bbbbb   ", "   bbbbb   ", "   bbbbb   ", "   bbbbb   ", "   bbbbb   "],
        ["           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "   bbbbb   ", "   bbbbb   ", "   bbbbb   ", "   bbbbb   ", "   bbbbb   "],
        ["           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "   bbbbb   ", "   bbbbb   ", "   bbbbb   ", "   bbbbb   ", "   bbbbb   "],
        ["           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "   bbbbb   ", "   bbbbb   ", "   bbbbb   ", "   dbbbd   ", "   bbbbb   "],
        ["           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "    eee    ", "    eee    ", "   fgfgf   ", "   ghghg   ", "           ", "           "],
        ["           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "   gfgfg   ", "   hghgh   ", "           ", "           "],
    ])
        .key("a", event.memberOfBlock("minecraft:yellow_concrete"), event.noHatch())
        .key("b", event.memberOfBlock("ae2:smooth_quartz_block"), hatch)
        .key("c", event.memberOfBlock("ae2cs:ender_quartz_block"), event.noHatch())
        .key("d", event.memberOfBlock("ae2cs:meteor_crystal_block"), event.noHatch())
        .key("e", event.memberOfBlock("ae2cs:redstone_crystal_block"), event.noHatch())
        .key("f", event.memberOfBlock("ae2cs:quantum_crystal_block"), event.noHatch())
        .key("g", event.memberOfBlock("extendedae:entro_block"), event.noHatch())
        .key("h", event.memberOfBlock("ae2:fluix_block"), event.noHatch())
        .build();
    event.electricStandalone(
        "ALIEN_CHICKEN", "alien_chicken",
        ALIEN_CHICKEN, shape,
        event.progressBar(77, 33, "arrow"),
        itemInputs => itemInputs.addSlots(36, 35, 2, 2),
        itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(16, 35),
        fluidOutputs => fluidOutputs.addSlot(122, 35),
        "ae2_casing", "alien_chicken", true, false, true,
        // Batch size, EU cost multiplier
        1, 1,
        false
    );
});
