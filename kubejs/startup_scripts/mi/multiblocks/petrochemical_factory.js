let PETROCHEMICAL_FACTORY;

MIMachineEvents.registerRecipeTypes(event => {
    PETROCHEMICAL_FACTORY = event.register("petrochemical_factory")
        .withFluidInputs()
        .withFluidOutputs();
});

MITweaksMachineEvents.registerBatchMultiblocks(event => {
    const hatch = event.hatchOf("fluid_input", "fluid_output", "energy_input");
    const shape = event.layeredShape("clean_stainless_steel_machine_casing", [
        ["aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "abbbaaaaaa", "aaaaaaaaaa", "          ", "          ", "          ", "          ", "          ", "          ", "          ", "          "],
        ["aaaaaaaaaa", "a      bbb", "bbbb   bbb", "a      bbb", "aa      aa", "  aaaaaa  ", "          ", "          ", "          ", "          ", "          ", "          ", "          "],
        ["aaaaaaaaaa", "a        a", "bbbb     a", "a        a", "aa      aa", "  a    a  ", "   aaaa   ", "          ", "          ", "          ", "          ", "          ", "          "],
        ["aaaaaaaaaa", "a      bbb", "bbbb   bbb", "a      bbb", "aa      aa", "  a    a  ", "   acca   ", "          ", "          ", "          ", "          ", "          ", "          "],
        ["aaaaaaaaaa", "a        a", "bbbb     a", "a        a", "aa      aa", "  a    a  ", "   acca   ", "          ", "          ", "          ", "          ", "          ", "          "],
        ["aaaaaaaaaa", "a      bbb", "bbbb   bbb", "a      bbb", "aa      aa", "  a    a  ", "   aaaa   ", "          ", "          ", "          ", "          ", "          ", "          "],
        ["aaaaaaaaaa", "a   a    a", "a   a    a", "a   a    a", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaa     ", "aaaaa     ", "aaaaa     "],
        ["aaaaaaaaaa", "a        a", "a        a", "a        a", "a   aaaaaa", "a   a    a", "a   a    a", "a   a    a", "a   a    a", "a   aaaaaa", "a   a     ", "a   a     ", "aaaaa     "],
        ["aaaaaaaaaa", "a        a", "a        a", "a        a", "a   aaaaaa", "a   a    a", "a   a    a", "a   a    a", "a   a    a", "a   aaacaa", "a   a     ", "a   a     ", "aacaa     "],
        ["aaaaaaaaaa", "a        a", "a        a", "a        a", "a   aaaaaa", "a   a    a", "a   a    a", "a   a    a", "a   a    a", "a   aaaaaa", "a   a     ", "a   a     ", "aaaaa     "],
        ["aaaaaaaaaa", "aaaaaaa#aa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaa", "aaaaa     ", "aaaaa     ", "aaaaa     "],
    ])
        .key("a", event.memberOfBlock("modern_industrialization:clean_stainless_steel_machine_casing"), hatch)
        .key("b", event.memberOfBlock("modern_industrialization:steel_machine_casing_pipe"), event.noHatch())
        .key("c", event.memberOfBlock("minecraft:dispenser"), event.noHatch())
        .build();
    event.electricStandalone(
        "PETROCHEMICAL_FACTORY", "petrochemical_factory",
        PETROCHEMICAL_FACTORY, shape,
        event.progressBar(47, 38, "arrow"),
        itemInputs => {
        },
        itemOutputs => {
        },
        fluidInputs => fluidInputs.addSlots(26, 35, 1, 2),
        fluidOutputs => fluidOutputs.addSlots(72, 35, 4, 2),
        "clean_stainless_steel_machine_casing", "petrochemical_factory", true, false, true,
        1, 1,
        false,
    );
});
