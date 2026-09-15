ServerEvents.recipes(event => {
    event.remove({output: 'modern_industrialization:replicator'});
    event.remove({output: 'hostile_neural_industrialization:prediction_machine_casing'});
    event.remove({id: "modern_industrialization:materials/superconductor/assembler/coil"});
    event.shaped('hostile_neural_industrialization:prediction_machine_casing',[
    "AAA",
    "ABA",
    "AAA"
],{
    A:'ccb:mi_prediction_matrix',
    B:'modern_industrialization:clean_stainless_steel_machine_casing'
})
event.shaped('mi_ae_addon:giant_input_assembly',[
    "AAA",
    "AAA",
    "AAA"
],{
    A:'mi_ae_addon:me_stocking_output_input_assembly'
})
event.shapeless('mi_ae_addon:me_chemical_output_hatch',[
       'mi_ae_addon:me_stocking_chemical_input_hatch'
    ])
event.shaped('modern_industrialization:giga_parallel_control_hatch',[
    "DCE",
    "ABA",
    "ECD"
],{
    A:'modern_industrialization:quantum_parallel_control_hatch',
    B:'neoecoae:computation_system_l9',
    C:'neoecoae:eco_computation_cell_l9',
    D:'ae2lt:lightning_collapse_matrix',
    E:'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:neutron_gear"]'
})
});