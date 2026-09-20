let MASS_GENERATOR;

ModernMekMachineEvents.registerChemicalRecipeTypes(event => {
    MASS_GENERATOR = event.register('mass_generator')
        .withItemInputs()
        .withChemicalInputs()
        .withFluidOutputs();
})

ModernMekMachineEvents.registerChemicalMachines(event => {
    const hatch = event.hatchOf("item_input", "fluid_output", "chemical_input", "item_fluid_chemical_input", "item_fluid_chemical_output", "energy_input");
    const shape = event.layeredShape("data_casing", [
        ["aaaaaaa", "aaaaaaa", "aaaaaaa", "aaaaaaa", "aaaaaaa"],
        ["abbbbba", "accccca", "addddda", "accccca", "abbbbba"],
        ["abbbbba", "accccca", "addddda", "accccca", "abbbbba"],
        ["abbbbba", "accccca", "addddda", "accccca", "abbbbba"],
        ["aaaaaaa", "aaaaaaa", "aaa#aaa", "aaaaaaa", "aaaaaaa"],
    ])
        .key("a", event.memberOfBlock("data_energistics:data_framework"), hatch)
        .key("b", event.memberOfBlock("ae2lt:overload_machine_frame"), event.noHatch())
        .key("c", event.memberOfBlock("ifeu:ultimate_machine_frame"), event.noHatch())
        .key("d", event.memberOfBlock("oritech:machine_core_7"), event.noHatch())
        .build();
    event.multiBlock("mass_generator", "mass_generator", MASS_GENERATOR)
        .shape(shape)
        .progressBar(event.progressBar(77, 33, "circuit"))
        .itemInputs(itemInputs => itemInputs.addSlot(56, 35))
        .fluidOutputs(fluidOutputs => fluidOutputs.addSlot(102, 35))
        .chemicalInputs(chemicalInputs => chemicalInputs.addSlot(36, 35))
        .controllerCasing("data_casing")
        .overlay("mass_generator", true, false, false)
        .batch(1, 1)
        .electric()
        .register();
});
