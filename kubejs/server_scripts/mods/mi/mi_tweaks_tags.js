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
