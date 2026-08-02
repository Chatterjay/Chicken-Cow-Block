let TIME_CHICKEN;

MIMachineEvents.registerRecipeTypes(event => {
    TIME_CHICKEN = event.register("time_chicken")
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks(event => {
    const hatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
    const shape = event.layeredShape("dire_casing", [
        [" aaaaaaaaa ", " aaaaaaaaa ", " aaaaaaaaa ", " aaaaaaaaa ", " aaaaaaaaa ", "           ", "           ", "           ", "           ", "           "],
        [" aaaaaaaaa ", "ba       ab", "ba       ab", "ba       ab", "baaaaaaaaab", "           ", "           ", "           ", "           ", "           "],
        [" aaaaaaaaa ", "ba       ab", "ba       ab", "ba       ab", "baaaaaaaaab", "           ", "           ", "           ", "           ", "           "],
        [" aaaaaaaaa ", "ba       ab", "ba       ab", "ba       ab", "baaaaaaaaab", "           ", "           ", "           ", "           ", "           "],
        [" aaaaaaaaa ", "ba       ab", "ba       ab", "ba       ab", "baaaaaaaaab", "           ", "           ", "           ", "           ", "           "],
        [" aaaaaaaaa ", "ba       ab", "ba       ab", "ba       ab", "baaaaaaaaab", "           ", "           ", "           ", "           ", "           "],
        [" aaaaaaaaa ", " a       a ", " a       a ", " a       a ", " aaaaaaaaa ", "           ", "           ", "           ", "           ", "           "],
        [" aaaa#aaaa ", " aaaaaaaaa ", " aaaaaaaaa ", " aaaaaaaaa ", " aaaaaaaaa ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   ccccc   "],
        ["           ", "           ", "           ", "           ", "           ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   ccccc   "],
        ["           ", "           ", "           ", "           ", "           ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   ccccc   "],
        ["           ", "           ", "           ", "           ", "           ", "   ccccc   ", "   ccccc   ", "   ccccc   ", "   dcccd   ", "   ccccc   "],
        ["           ", "           ", "           ", "           ", "    eee    ", "    eee    ", "   fffff   ", "   fffff   ", "           ", "           "],
        ["           ", "           ", "           ", "           ", "           ", "           ", "   fffff   ", "   fffff   ", "           ", "           "],
    ])
        .key("a", event.memberOfBlock("justdynathings:phase_box"), hatch)
        .key("b", event.memberOfBlock("justdirethings:time_crystal_block"), event.noHatch())
        .key("c", event.memberOfBlock("occultism:otherstone"), event.noHatch())
        .key("d", event.memberOfBlock("justdirethings:gooblock_tier4"), event.noHatch())
        .key("e", event.memberOfBlock("justdynathings:energized_goo"), event.noHatch())
        .key("f", event.memberOfBlock("justdirethings:gooblock_tier2"), event.noHatch())
        .build();
    event.electricStandalone(
        "TIME_CHICKEN", "time_chicken",
        TIME_CHICKEN, shape,
        event.progressBar(77, 33, "arrow"),
        itemInputs => itemInputs.addSlots(36, 35, 2, 2),
        itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(16, 35),
        fluidOutputs => fluidOutputs.addSlot(122, 35),
        "dire_casing", "time_chicken", true, false, true,
        // Batch size, EU cost multiplier
        1, 1,
        false
    );
});
