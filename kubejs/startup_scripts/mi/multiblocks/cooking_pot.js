// TODO: 修改多方块结构
MITweaksMachineEvents.registerBatchMultiblocks(event => {
  const hatch = event.hatchOf("item_input", "item_output", "energy_input")
  const shape = event.layeredShape("bricks", [
    ["             ", "             ", "             ", "             ", "             ", "             ", "             ", "   abbbbba   "],
    ["             ", "             ", "             ", "             ", "             ", "             ", "             ", "   cdbbbdc   "],
    ["aaaaaaaaaaaaa", "aaeeeeeeeeeaa", "aeaaaaaaaaaea", "eeaaaaaaaaaee", "eaaaaaaaaaaae", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa"],
    ["aaaaaaaaaaaaa", "a           a", "e           e", "e           e", "a           a", "a           a", "a           a", "afaeeeeeeeafa"],
    ["aaaaaaaaaaaaa", "e           e", "a           a", "a           a", "a           a", "a           a", "a           a", "aa         aa"],
    ["aaaaaaaaaaaaa", "e           e", "a           a", "a           a", "a           a", "a           a", "a           a", "ae         ea"],
    ["aaaaaaaaaaaaa", "e           e", "a           a", "a           a", "a           a", "a           a", "a           a", "ae         ea"],
    ["aaaaaaaaaaaaa", "e           e", "a           a", "a           a", "a           a", "a           a", "a           a", "ae         ea"],
    ["aaaaaaaaaaaaa", "e           e", "a           a", "a           a", "a           a", "a           a", "a           a", "ae         ea"],
    ["aaaaaaaaaaaaa", "e           e", "a           a", "a           a", "a           a", "a           a", "a           a", "ae         ea"],
    ["aaaaaaaaaaaaa", "e           e", "a           a", "a           a", "a           a", "a           a", "a           a", "ae         ea"],
    ["aaaaaaaaaaaaa", "e           e", "a           a", "a           a", "a           a", "a           a", "a           a", "ae         ea"],
    ["aaaaaaaaaaaaa", "e           e", "a           a", "a           a", "a           a", "a           a", "a           a", "aa         aa"],
    ["aaaaaaaaaaaaa", "a           a", "e           e", "e           e", "a           a", "a           a", "a           a", "afaeeeeeeeafa"],
    ["aaaaaaaaaaaaa", "aaeeeeeeeeeaa", "aeaaaaaaaaaea", "eeaaaaaaaaaee", "eaaaaaaaaaaae", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaaaa"],
    ["             ", "             ", "             ", "             ", "             ", "             ", "             ", "   cdbbbdc   "],
    ["             ", "             ", "             ", "             ", "             ", "             ", "             ", "   abb#bba   "],
  ])
  .key("a", event.memberOfBlock("minecraft:gray_concrete"), event.noHatch())
  .key("b", event.memberOfBlock("minecraft:bricks"), hatch)
  .key("c", event.memberOfBlock("immersiveengineering:sheetmetal_steel"), event.noHatch())
  .key("d", event.memberOfBlock("minecraft:waxed_copper_block"), event.noHatch())
  .key("e", event.memberOfBlock("minecraft:light_gray_concrete"), event.noHatch())
  .key("f", event.memberOfBlock("minecraft:iron_block"), event.noHatch())
  .build();
    event.electricStandalone(
        "COOKING_POT", "cooking_pot",
        event.getRecipeType("ccb_core:cooking_pot"), shape,
        event.progressBar(77, 33, "arrow"),
        itemInputs => itemInputs.addSlots(18, 35, 3, 2),
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