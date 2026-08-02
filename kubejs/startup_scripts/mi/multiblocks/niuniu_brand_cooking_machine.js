let NIUNIU_BRAND_COOKING_MACHINE;

ModernMekMachineEvents.registerChemicalRecipeTypes(event => {
    NIUNIU_BRAND_COOKING_MACHINE = event.register('niuniu_brand_cooking_machine')
        .withItemInputs()
        .withChemicalInputs()
        .withItemOutputs();
})

ModernMekMachineEvents.registerChemicalMachines(event => {
    const hatch = event.hatchOf("item_input", "item_output", "chemical_input", "energy_input");
    const shape = event.layeredShape("white_casing", [
        ["aaaaaaaaaaaaaaaa", "abbbbbbbbbbbbbba", "aaaaaaaaaaaaaaaa", "cddddddddddddddc", "cddddddddddddddc", "cddddddddddddddc", "aaaaaaaaaaaaaaaa", "aeeeeeeeeeeeeeea", "aaaaaaaaaaaaaaaa", "cddddddddddddddc", "cddddddddddddddc", "cddddddddddddddc", "bbbbbbbbbbbbbbbb", "bffffffffffffffb", "bggggggggggggggb", "hhhhhhhhhhhhhhhh"],
        ["aiiiiiiiiiiiiiia", "b              b", "a              a", "d              d", "d              d", "d              d", "a              a", "ejjjjjjjjjjjjjje", "a              a", "d              d", "d              d", "d              d", "b              b", "f              f", "g              g", "hggggggggggggggh"],
        ["aibiiiiiiiiiibia", "b              b", "a              a", "d              d", "d              d", "d              d", "a              a", "ejjjjjjjjjjjjjje", "a              a", "d              d", "d              d", "d              d", "b              b", "f              f", "g              g", "hghhhhhhhhhhhhgh"],
        ["aiiiiiiiiiiiiiia", "b              b", "a              a", "d              d", "d              d", "d              d", "a              a", "ejjjjjjjjjjjjjje", "a              a", "d              d", "d              d", "d              d", "b              b", "f              f", "g              g", "hghbbbbbbbbbbhgh"],
        ["aiiiiiiiiiiiiiia", "bkkkkkkkkkkkkkkb", "a              a", "d              d", "d              d", "d              d", "a              a", "ejjjjjjjjjjjjjje", "a              a", "d              d", "d              d", "d              d", "b              b", "f              f", "gkkkkkkkkkkkkkkg", "hghbbbbblbbbbhgh"],
        ["aiiiiiiiiiiiiiia", "bmmmmmmmmmmmmmmb", "a              a", "d              d", "d              d", "d              d", "a              a", "ejjjjjjjjjjjjjje", "a              a", "d              d", "d              d", "d              d", "b              b", "f              f", "gmmmmmmmmmmmmmmg", "hghbbblblbbbbhgh"],
        ["aiiiiiiiiiiiiiia", "bmmmmmmmmmmmmmmb", "a              a", "d              d", "d              d", "d              d", "a              a", "ejjjjjjjjjjjjjje", "a              a", "d              d", "d              d", "d              d", "b              b", "f              f", "gmmmmmmmmmmmmmmg", "hghbbblblbbbbhgh"],
        ["aiiiiiiiiiiiiiia", "bmmmmmmmmmmmmmmb", "a              a", "d              d", "d              d", "d              d", "a              a", "ejjjjjjjjjjjjjje", "a              a", "d              d", "d              d", "d              d", "b              b", "f              f", "gmmmmmmmmmmmmmmg", "hghbbllllllbbhgh"],
        ["aiiiiiiiiiiiiiia", "bmmmmmmmmmmmmmmb", "a              a", "d              d", "d              d", "d              d", "a              a", "ejjjjjjjjjjjjjje", "a              a", "d              d", "d              d", "d              d", "b              b", "f              f", "gmmmmmmmmmmmmmmg", "hghblbbblbbbbhgh"],
        ["aiiiiiiiiiiiiiia", "bmmmmmmmmmmmmmmb", "a              a", "a              a", "a              a", "a              a", "a              a", "ejjjjjjjjjjjjjje", "a              a", "b              b", "b              b", "b              b", "b              b", "f              f", "gmmmmmmmmmmmmmmg", "hghbbbbblbbbbhgh"],
        ["aiiiiiiiiiiiiiia", "bkkkkkkkkkkkkkkb", "a              a", "e              e", "e              e", "e              e", "e              e", "ejjjjjjjjjjjjjje", "a              a", "f              f", "f              f", "f              f", "f              f", "f              f", "gkkkkkkkkkkkkkkg", "hghbblllllllbhgh"],
        ["aiiiiiiiiiiiiiia", "b              b", "a              a", "n              n", "a              a", "n              n", "a              a", "njjjjjjjjjjjjjjn", "a              a", "n              n", "a              a", "n              n", "a              a", "f              f", "g              g", "hghbbbbblbbbbhgh"],
        ["aiiiiiiiiiiiiiia", "b              b", "o              a", "p              p", "o              o", "p              p", "o              o", "pjjjjjjjjjjjjjjp", "o              o", "p              p", "o              o", "p              p", "o              o", "f              f", "g              g", "hghbbbbblbbbbhgh"],
        ["aibiiiiiiiiiibia", "b              b", "a              a", "n              n", "a              a", "n              n", "a              a", "njjjjjjjjjjjjjjn", "a              a", "n              n", "a              a", "n              n", "a              a", "f              f", "g              g", "hghhhhhhhhhhhhgh"],
        ["aiiiiiiiiiiiiiia", "b              b", "b              b", "e              e", "e              e", "e              e", "e              e", "ejjjjjjjjjjjjjje", "a              a", "f              f", "f              f", "f              f", "f              f", "f              f", "g              g", "hggggggggggggggh"],
        ["aabbbbbbbbbbbbaa", "abhiiii#iiiiihba", "abhiiiiiiiiiihba", "abhiiibibbbcihba", "abhiiiiiiiiiihba", "abhiiibibbbcihba", "abhiiiiiiiiiihba", "abhhhhhhhhhhhhba", "cahcccccccccchac", "hhhcccccccccchhh", "bchcccccccccchcb", "achcccccccccchca", "bchcccccccccchcb", "hhhhhhhhhhhhhhhh", "ibbbbbbbbbbbbbbi", "hhhhhhhhhhhhhhhh"],
    ])
        .key("a", event.memberOfBlock("minecraft:gray_concrete"), event.noHatch())
        .key("b", event.memberOfBlock("minecraft:light_gray_concrete"), event.noHatch())
        .key("c", event.memberOfBlock("minecraft:black_concrete"), event.noHatch())
        .key("d", event.memberOfBlock("glassential:glass_ethereal_reverse"), event.noHatch())
        .key("e", event.memberOfBlock("pneumaticcraft:plastic_brick_gray"), event.noHatch())
        .key("f", event.memberOfBlock("pneumaticcraft:plastic_brick_light_gray"), event.noHatch())
        .key("g", event.memberOfBlock("create:polished_cut_calcite"), event.noHatch())
        .key("h", event.memberOfBlock("immersiveengineering:concrete"), event.noHatch())
        .key("i", event.memberOfBlock("minecraft:white_concrete"), hatch)
        .key("j", event.memberOfBlock("glassential:glass_ethereal"), event.noHatch())
        .key("k", event.memberOfBlock("enderio_evolution:construction_alloy_block"), event.noHatch())
        .key("l", event.memberOfBlock("mekanism:block_osmium"), event.noHatch())
        .key("m", event.memberOfBlock("glassential:glass_lava_lamp"), event.noHatch())
        .key("n", event.memberOfBlock("actuallyadditions:empowered_diamatine_crystal_block"), event.noHatch())
        .key("o", event.memberOfBlock("create:cut_scorchia"), event.noHatch())
        .key("p", event.memberOfBlock("data_energistics:data_crystal_block"), event.noHatch())
        .build();
    event.multiBlock("niuniu_brand_cooking_machine", "niuniu_brand_cooking_machine", NIUNIU_BRAND_COOKING_MACHINE)
        .shape(shape)
        .progressBar(event.progressBar(97, 33, "slice"))
        .itemInputs(itemInputs => itemInputs.addSlots(56, 35, 2, 2))
        .itemOutputs(itemOutputs => itemOutputs.addSlot(122, 35))
        .chemicalInputs(chemicalInputs => chemicalInputs.addSlots(16, 35, 2, 2))
        .controllerCasing("white_casing")
        .overlay("niuniu_brand_cooking_machine", true, false, false)
        .batch(1, 1)
        .electric()
        .register();
});
