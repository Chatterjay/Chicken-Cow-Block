let CREATE_CHICKEN;

MIMachineEvents.registerRecipeTypes((event) => {
    CREATE_CHICKEN = event.register("create_chicken")
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks(event => {
    const hatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
    const shape = event.layeredShape("create_casing", [
        ["           ", "           ", "           ", "           ", " bbbbbbbbb ", " bbbbbbbbb ", " bbbbbbbbb ", " bbbbbbbbb ", " bbbbbbbbb ", "           ", "           ", "           ", "           ", "           ", "           ", "           "],
        ["           ", "           ", "           ", "           ", " bbbbbbbbb ", "cb       bc", "cb       bc", "cb       bc", "cbbbbbbbbbc", "           ", "           ", "           ", "           ", "           ", "           ", "           "],
        [" ddd   ddd ", "  d     d  ", "  d     d  ", "  d     d  ", " bbbbbbbbb ", "cb       bc", "cb       bc", "cb       bc", "cbbbbbbbbbc", " eeeeeeeee ", " eeeeeeeee ", " eeeeeeeee ", "           ", "           ", "           ", "           "],
        [" ddd   ddd ", "           ", "           ", "           ", " bbbbbbbbb ", "cb       bc", "cb       bc", "cb       bc", "cbbbbbbbbbc", " eeeeeeeee ", " eeeeeeeee ", " eeeeeeeee ", "           ", "           ", "           ", "           "],
        [" ddd   ddd ", "           ", "           ", "           ", " bbbbbbbbb ", "cb       bc", "cb       bc", "cb       bc", "cbbbbbbbbbc", " eeeeeeeee ", " eeeeeeeee ", " eeeeeeeee ", "           ", "           ", "           ", "           "],
        ["           ", "           ", "           ", "           ", " bbbbbbbbb ", "cb       bc", "cb       bc", "cb       bc", "cbbbbbbbbbc", "           ", "           ", "           ", "           ", "           ", "           ", "           "],
        ["           ", "           ", "           ", "           ", " bbbbbbbbb ", " b       b ", " b       b ", " b       b ", " bbbbbbbbb ", "           ", "           ", "           ", "           ", "           ", "           ", "           "],
        ["           ", "           ", "           ", "           ", " bbbb#bbbb ", " bbbbbbbbb ", " bbbbbbbbb ", " bbbbbbbbb ", " bbbbbbbbb ", "  fffffff  ", "  fffffff  ", "  fffffff  ", "  bbbbbbb  ", "  fffffff  ", "  fffffff  ", "           "],
        ["           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "  fffffff  ", "  fffffff  ", "  fffffff  ", "  fffffff  ", "  bfffffb  ", "  fffffff  ", "           "],
        ["           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "  fffffff  ", "  fffffff  ", "  fffffff  ", "  fffffff  ", "  fffffff  ", "  bfffffb  ", "           "],
        ["           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "  fffffff  ", "  fffffff  ", "  fffffff  ", "  fgfffgf  ", "  aaafaaa  ", "  ahabaha  ", "  aaa aaa  "],
        ["           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "    iii    ", "    iii    ", "   ddddd   ", "   ddddd   ", "           ", "           ", "           ", "           "],
        ["           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "   ddddd   ", "   ddddd   ", "           ", "           ", "           ", "           "],
        ["           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "           "],
    ])
        .key("a", event.memberOfBlock("minecraft:gold_block"), event.noHatch())
        .key("b", event.memberOfBlock("create:brass_casing"), hatch)
        .key("c", event.memberOfBlock("occultengineering:sterling_silver_block"), event.noHatch())
        .key("d", event.memberOfBlock("minecraft:yellow_concrete"), event.noHatch())
        .key("e", event.memberOfBlock("create:item_vault"), event.noHatch())
        .key("f", event.memberOfBlock("minecraft:white_concrete"), event.noHatch())
        .key("g", event.memberOfBlock("minecraft:black_concrete"), event.noHatch())
        .key("h", event.memberOfBlock("minecraft:light_blue_concrete"), event.noHatch())
        .key("i", event.memberOfBlock("minecraft:red_wool"), event.noHatch())
        .build();
    event.electricStandalone(
        "CREATE_CHICKEN", "create_chicken",
        CREATE_CHICKEN, shape,
        event.progressBar(77, 33, "arrow"),
        itemInputs => itemInputs.addSlots(36, 35, 2, 2),
        itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(16, 35).addSlot(16, 53),
        fluidOutputs => fluidOutputs.addSlot(122, 35),
        "create_casing", "create_chicken", true, false, true,
        1, 1,
        false
    );
});
