ServerEvents.recipes(event =>{
event.shapeless('fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="create_dragons_plus:dragon_breath"]',[ 
'fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="ifeu:liquid_dragon_breath"]'
])
event.shapeless('fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="minecraft:milk"]',[ 
'minecraft:cow_spawn_egg'
])
event.shaped('fluidsneo:extended_fluid_cow_jar', [
    ' A ',
    'ABA',
    ' A '
], {
    A: 'ccb:cow_bucket',
    B: 'moofluids:fluid_cow_jar'
})
event.shaped('fluidsneo:yield_upgrade_1', [
    'CCC',
    'ABA',
    'CCC'
], {
    A: 'fluidsneo:extended_fluid_cow_jar',
    B: 'modern_industrialization:bronze_tank',
    C: 'ccb:cow_bucket'
})
event.shaped('fluidsneo:yield_upgrade_2', [
    'CCC',
    'ABA',
    'CCC'
], {
    A:'fluidsneo:yield_upgrade_1',
    B: 'modern_industrialization:steel_tank',
    C: 'ccb:cow_bucket'
})
event.shaped('fluidsneo:yield_upgrade_3', [
    'CCC',
    'ABA',
    'CCC'
], {
    A: 'fluidsneo:yield_upgrade_2',
    B:'modern_industrialization:aluminum_tank',
    C: 'ccb:cow_bucket'
})
event.shaped('fluidsneo:capacity_upgrade_1', [
    'CCC',
    'ABA',
    'CCC'
], {
    A: 'mekanism:basic_fluid_tank',
    B: 'fluidsneo:extended_fluid_cow_jar',
    C: 'ccb:cow_bucket'
})
event.shaped('fluidsneo:capacity_upgrade_2', [
    'CCC',
    'ABA',
    'CCC'
], {
    A: 'mekanism:advanced_fluid_tank',
    B: 'fluidsneo:capacity_upgrade_1',
    C: 'ccb:cow_bucket'
})
event.shaped('fluidsneo:capacity_upgrade_3', [
    'CCC',
    'ABA',
    'CCC'
], {
    A: 'mekanism:elite_fluid_tank',
    B: 'fluidsneo:capacity_upgrade_2',
    C: 'ccb:cow_bucket'
})
event.shaped('fluidsneo:auto_output_upgrade', [
    'A',
    'B'
], {
    A: 'ccb:cow_bucket',
    B: 'utilitarian:fluid_hopper'
})
});