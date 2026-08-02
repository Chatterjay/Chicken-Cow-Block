let MAGIC_CHICKEN;

MIMachineEvents.registerRecipeTypes(event => {
    MAGIC_CHICKEN = event.register("magic_chicken")
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks(event => {
    const hatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
    const shape = event.layeredShape("magic_casing", [
        ["           ", "           ", "           ", "           ", " bbbbbbbbb ", " bbbbbbbbb ", " bbbbbbbbb ", " bbbbbbbbb ", " bbbbbbbbb ", " cccdddeee ", " cacdddeae ", " cacfafeae ", " cacdadeae ", " cacdadeae ", " cacdadeae ", " cacfafeae ", " cacdddeae ", " ccc   eee ", "           "],
        ["           ", "           ", "           ", "           ", " bbbbbbbbb ", "ab       ba", "ab       ba", "ab       ba", "abbbbbbbbba", " cccdddeee ", " gagdddeae ", " cacfafhah ", " babdadeae ", " cacdadhah ", " babdadeae ", " cacfafhah ", " gagdddeae ", " ccc   eee ", "           "],
        [" iii   iii ", "  i     i  ", "  i     i  ", "  i     i  ", " bbbbbbbbb ", "ab       ba", "ab       ba", "ab       ba", "abbbbbbbbba", " cccdddeee ", " cacdddhah ", " cacfafeae ", " babdadeae ", " babdadhah ", " babdadeae ", " cacfafeae ", " cacdddhah ", " ccc   eee ", "           "],
        [" iii   iii ", "           ", "           ", "           ", " bbbbbbbbb ", "ab       ba", "ab       ba", "ab       ba", "abbbbbbbbba", " cccdddeee ", " babdddhah ", " babfafeae ", " babdadeae ", " babdadhah ", " babdadeae ", " babfafeae ", " babdddhah ", " ccc   eee ", "           "],
        [" iii   iii ", "           ", "           ", "           ", " bbbbbbbbb ", "ab       ba", "ab       ba", "ab       ba", "abbbbbbbbba", " cccdddeee ", " babdddhae ", " babfafhah ", " babdadhah ", " babdadhah ", " babdadhah ", " babfafhah ", " babdddeae ", " ccc   eee ", "           "],
        ["           ", "           ", "           ", "           ", " bbbbbbbbb ", "ab       ba", "ab       ba", "ab       ba", "abbbbbbbbba", " cccdddeee ", " bbbdddeee ", " bbbfffeee ", " bbbdddeee ", " bbbdddeee ", " bbbdddeee ", " bbbfffeee ", " bbbdddeee ", " ccc   eee ", "           "],
        ["           ", "           ", "           ", "           ", " bbbbbbbbb ", " b       b ", " b       b ", " b       b ", " bbbbbbbbb ", "           ", "           ", "           ", "           ", "  bbbbbbb  ", "           ", "           ", "           ", "           ", "           "],
        ["           ", "           ", "           ", "           ", " bbbb#bbbb ", " bbcbbbbbb ", " bbbcbbbbb ", " bbbbccbbb ", " bbbbccbbb ", "   aaaaa   ", "   aaaaa   ", "   aaaaa   ", "   aaaaa   ", "  baaaaab  ", "   ccccc   ", "           ", "           ", "           ", "           "],
        ["           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "   aaaaa   ", "   aaaaa   ", "   aaaaa   ", "   aaaaa   ", "  baaaaab  ", "   c   c   ", "    bcb    ", "    bb     ", "    b      ", "   b       "],
        ["           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "   aaaaa   ", "   aaaaa   ", "   aaaaa   ", "   aaaaa   ", "  baaaaab  ", "   c   c   ", "    bcb    ", "    bb     ", "    b      ", "   b       "],
        ["           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "   aaaaa   ", "   aaaaa   ", "   aaaaa   ", "   haaah   ", "  baaaaab  ", "   ccccc   ", "           ", "           ", "           ", "           "],
        ["           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "    ddd    ", "    ddd    ", "   iiiii   ", "   iiiii   ", "           ", "  bbbbbbb  ", "           ", "           ", "           ", "           ", "           "],
        ["           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "   iiiii   ", "   iiiii   ", "           ", "           ", "           ", "           ", "           ", "           ", "           "],
    ])
        .key("a", event.memberOfBlock("minecraft:white_concrete"), event.noHatch())
        .key("b", event.memberOfBlock("ars_nouveau:magebloom_block"), hatch)
        .key("c", event.memberOfBlock("minecraft:gold_block"), event.noHatch())
        .key("d", event.memberOfBlock("minecraft:red_wool"), event.noHatch())
        .key("e", event.memberOfBlock("minecraft:red_concrete"), event.noHatch())
        .key("f", event.memberOfBlock("minecraft:diamond_block"), event.noHatch())
        .key("g", event.memberOfBlock("ars_nouveau:source_gem_block"), event.noHatch())
        .key("h", event.memberOfBlock("minecraft:black_concrete"), event.noHatch())
        .key("i", event.memberOfBlock("minecraft:yellow_concrete"), event.noHatch())
        .build();
    event.electricStandalone(
        "MAGIC_CHICKEN", "magic_chicken",
        MAGIC_CHICKEN, shape,
        event.progressBar(77, 33, "arrow"),
        itemInputs => itemInputs.addSlots(36, 35, 2, 2),
        itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(16, 35),
        fluidOutputs => fluidOutputs.addSlot(122, 35),
        "magic_casing", "magic_chicken", true, false, true,
        // Batch size, EU cost multiplier
        1, 1,
        false
    );
});
