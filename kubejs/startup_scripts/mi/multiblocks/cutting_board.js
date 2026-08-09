MITweaksMachineEvents.registerBatchMultiblocks(event => {
    const shape = event.layeredShape("wood_casing", [
        ["aaaaaaaaaaaaaaa", "               "],
        ["accccccccccccca", "               "],
        ["acdddddddddddca", "               "],
        ["acdbebcbceeedca", "               "],
        ["acdbebeeeeecdca", "               "],
        ["acdeeebcecbbdca", "               "],
        ["acdcebcebbcedca", "               "],
        ["acdeeccecebcdca", "               "],
        ["acdbccecebcedca", "               "],
        ["acdccecebecedca", "               "],
        ["acdbecbcecccdca", "               "],
        ["acdbbceecceedca", "               "],
        ["acdedddddddedca", "               "],
        ["acddd     dddca", "               "],
        ["accccccccccccca", "               "],
        ["aaaaaaa#aaaaaaa", "       f       "],
    ])
        .key("a", event.memberOfBlock("minecraft:oak_wood"), event.hatchOf("item_input", "item_output", "energy_input"))
        .key("b", event.memberOfBlock("minecraft:oak_planks"), event.noHatch())
        .key("c", event.memberOfBlock("minecraft:stripped_oak_wood"), event.noHatch())
        .key("d", event.memberOfBlock("minecraft:oak_log"), event.noHatch())
        .key("e", event.memberOfBlock("minecraft:stripped_oak_log"), event.noHatch())
        .key("f", event.memberOfBlock("farmersdelight:cutting_board"), event.noHatch())
        .build();

    event.electricStandalone(
        "CUTTING_BOARD", "cutting_board",
        event.getRecipeType("ccb_core:cutting_board"), shape,
        event.progressBar(70, 33, "compress"),
        itemInputs => itemInputs.addSlots(36, 35, 1, 2),
        itemOutputs => itemOutputs.addSlots(102, 35, 2, 2),
        fluidInputs => {
        },
        fluidOutputs => {
        },
        "wood_casing", "cutting_board", true, false, true,
        // Batch size, EU cost multiplier
        1, 1,
        false
    );
});