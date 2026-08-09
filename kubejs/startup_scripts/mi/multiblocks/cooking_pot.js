// TODO: 修改多方块结构
MITweaksMachineEvents.registerBatchMultiblocks(event => {
    const shape = event.layeredShape("bricks", [
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
        "COOKING_POT", "cooking_pot",
        event.getRecipeType("ccb_core:cooking_pot"), shape,
        event.progressBar(77, 33, "arrow"),
        itemInputs => itemInputs.addSlot(72, 53).addSlots(18, 35, 3, 2),
        itemOutputs => itemOutputs.addSlots(102, 35, 2, 2),
        fluidInputs => {
        },
        fluidOutputs => {
        },
        "bricks", "cooking_pot", true, false, true,
        // Batch size, EU cost multiplier
        1, 1,
        false
    );
});