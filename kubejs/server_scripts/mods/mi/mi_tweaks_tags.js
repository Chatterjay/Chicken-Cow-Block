ServerEvents.tags('block', event => {
    const blocks = [
        'mi_tweaks:greenhouse',
        'mi_tweaks:cooking_pot',
        'mi_tweaks:cutting_board',
        'mi_tweaks:alien_chicken',
        'mi_tweaks:create_chicken',
        'mi_tweaks:magic_chicken',
        'mi_tweaks:time_chicken',
        'mi_tweaks:hongmeng_chicken_eye',
        'mi_tweaks:petrochemical_factory',
        'mi_tweaks:feast_block_serving',
        'mi_tweaks:eu_transformer',
        'mi_tweaks:flux_transformer'
    ]

    event.add('minecraft:mineable/pickaxe', blocks)
    event.add('minecraft:needs_iron_tool', blocks)
})

ServerEvents.tags('block', event => {
    const blocks = [
        'modern_mekanistics:milk_chicken_steak_ex_item_fluid_chemical_input_hatch',
        'modern_mekanistics:milk_chicken_steak_ex_item_fluid_chemical_output_hatch',
        'modern_mekanistics:mass_generator',
        'modern_mekanistics:niuniu_brand_cooking_machine',
        'modern_mekanistics:bigger_ambient_gas_collector'
    ]

    event.add('minecraft:mineable/pickaxe', blocks)
    event.add('minecraft:needs_stone_tool', blocks)
})

ServerEvents.tags('block', event => {
    const blocks = [
        'modern_industrialization:ultimate_energy_input_hatch',
        'modern_industrialization:ultimate_energy_output_hatch',
        'modern_industrialization:quantum_fluid_input_hatch',
        'modern_industrialization:quantum_fluid_output_hatch',
        'modern_industrialization:giga_parallel_control_hatch',
        'modern_industrialization:time_crystal_roost_speed_hatch',
        'modern_industrialization:ultimate_roost_speed_hatch',
        'modern_industrialization:feijibei_roost_speed_hatch'
    ]

    event.add('minecraft:mineable/pickaxe', blocks)
    event.add('minecraft:needs_stone_tool', blocks)
})
