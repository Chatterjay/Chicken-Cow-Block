let BIGEER_AMBIENT_GAS_COLLECTOR;

ModernMekMachineEvents.registerChemicalRecipeTypes(event => {
     BIGEER_AMBIENT_GAS_COLLECTOR = event.register('bigger_ambient_gas_collector')
        .withItemInputs()
        .withChemicalOutputs()
})
ModernMekMachineEvents.registerChemicalMachines(event => {
  const hatch = event.hatchOf("item_input", "chemical_output", "item_fluid_chemical_input", "item_fluid_chemical_output", "energy_input");
  const shape = event.layeredShape("plastic_casing", [
    [" aaa ", " cdc ", " dbd ", "bbbbb"],
    ["accca", "ceeec", "dfffd", "bgggb"],
    ["accca", "deeed", "bfffb", "bgggb"],
    ["accca", "ceeec", "dfffd", "bgggb"],
    [" aaa ", " cdc ", " d#d ", "bbbbb"],
  ])
  .key("a", event.memberOfBlock("pneumaticcraft:pressure_chamber_valve"), event.noHatch())
  .key("b", event.memberOfBlock("pneumaticcraft:pressure_chamber_glass"), event.noHatch())
  .key("c", event.memberOfBlock("pneumaticcraft:compressed_iron_block"), event.noHatch())
  .key("d", event.memberOfBlock("pneumaticcraft:plastic_brick_white"), hatch)
  .key("e", event.memberOfBlock("mekmm:ambient_gas_collector"), event.noHatch())
  .key("f", event.memberOfBlock("xycraft_machines:extractor"), event.noHatch())
  .key("g", event.memberOfBlock("pneumaticcraft:reinforced_pressure_chamber_valve"), event.noHatch())
  .build();
  event.multiBlock("bigger_ambient_gas_collector", "bigger_ambient_gas_collector", BIGEER_AMBIENT_GAS_COLLECTOR)
        .shape(shape)
        .progressBar(event.progressBar(77, 33, "circuit"))
        .itemInputs(itemInputs => itemInputs.addSlots(38, 35, 2, 1))
        .chemicalOutputs(chemicalOutputs => chemicalOutputs.addSlot(102, 35))
        .controllerCasing("plastic_casing")
        .overlay("bigger_ambient_gas_collector", true, false, false)
        .batch(1, 32)
        .electric()
        .register();
});