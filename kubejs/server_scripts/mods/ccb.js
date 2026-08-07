ServerEvents.recipes(event => {
    event.remove({ output: 'ccb_core:natural_lightning_spawner' });
    event.smithing('ccb_core:natural_lightning_spawner',
        'irons_spellbooks:lightning_bottle', 'minecraft:trident', 'powah:charged_snowball');
    event.shaped('ccb:mi_prediction_matrix',[
    "AE ",
    "BCB",
    " ED"
],{
    A:'immersiveengineering:ingot_aluminum',
    B:'modern_industrialization:analog_circuit_board',
    C:'hostilenetworks:prediction_matrix',
    D:'minecraft:copper_ingot',
    E:'immersiveengineering:slag_glass'
})
});
