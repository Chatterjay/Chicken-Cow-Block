ServerEvents.recipes(event => {
    event.remove({ output:'extendedae:infinity_water_cell' });
    event.shaped('extendedae:infinity_water_cell', [
        'EDE',
        'CBC',
        'AAA'
    ], {
        B: 'ae2:cell_component_16k',
        C: 'chicken_roost:c_water',
        A: 'minecraft:diamond',
        D: 'fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="minecraft:water"]',
        E: 'ae2:quartz_glass'
    })
    event.shaped('kubejs:lava_cell', [
        'EDE',
        'CBC',
        'AAA'
    ], {
        B: 'ae2:cell_component_16k',
        C: 'chicken_roost:c_lava',
        A: 'minecraft:diamond',
        D: 'fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="minecraft:lava"]',
        E: 'ae2:quartz_glass'
    })
    event.shaped('ccb:time_fluid_cell', [
        'EDE',
        'CBC',
        'AAA'
    ], {
        B: 'data_energistics:data_storage_component_256m',
        C: 'fluidsneo:extended_fluid_cow_jar',
        A: 'justdirethings:time_crystal',
        D: 'fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="justdirethings:time_fluid_source"]',
        E: 'ae2:quartz_glass'
    })
    event.shaped('ccb:npk_fertilizer_cell', [
        'EDE',
        'CBC',
        'AAA'
    ], {
        B: 'data_energistics:data_storage_component_256m',
        C: 'fluidsneo:extended_fluid_cow_jar',
        A: 'minecraft:diamond',
        D: 'fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="extended_industrialization:npk_fertilizer"]',
        E: 'ae2:quartz_glass'
    })
})