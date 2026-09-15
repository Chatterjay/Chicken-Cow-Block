ServerEvents.recipes(event => {
    event.custom({
        type: 'ae2lt:overload_processing',
        priority: 0,
        inputs: [
            {
                ingredient: { item: 'neoecoae:storage_system_l9' },
                count: 64
            },
            {
                ingredient: { item: 'neoecoae:eco_item_storage_cell_256m' },
                count: 64
            },
            {
                ingredient: { item: 'neoecoae:eco_source_storage_cell_256m' },
                count: 64
            },
            {
                ingredient: { item: 'neoecoae:eco_fe_storage_cell_256m' },
                count: 64
            },
            {
                ingredient: { item: 'neoecoae:eco_fluid_storage_cell_256m' },
                count: 64
            }
        ],
        results: [
            {
                id: 'neoecoae:eco_infinite_cell_component',
                count: 1
            }
        ],
        totalEnergy: 50000000,
        lightningCost: 114514,
        lightningTier: 'extreme_high_voltage'
    }).id('ccb:overload_processing/eco_infinite_cell_component')

    event.custom({
        type: 'ae2lt:overload_processing',
        priority: 0,
        inputs: [
            {
                ingredient: { tag: 'c:storage_blocks/andesite_alloy' },
                count: 4
            },
            {
                ingredient: { item: 'allthecompressed:netherrack_1x' },
                count: 4
            },
            {
                ingredient: { tag: 'c:storage_blocks/silicon' },
                count: 4
            }
        ],
        results: [
            {
                id: 'appliedcreate:stress_processor',
                count: 36
            }
        ],
        totalEnergy: 400000,
        lightningCost: 1,
        lightningTier: 'high_voltage'
    }).id('ccb:overload_processing/andesite_processor')

    event.custom({
        type: 'ae2lt:overload_processing',
        priority: 0,
        inputs: [
            {
                ingredient: { tag: 'c:storage_blocks/brass' },
                count: 4
            },
            {
                ingredient: { item: 'allthecompressed:netherrack_1x' },
                count: 4
            },
            {
                ingredient: { tag: 'c:storage_blocks/silicon' },
                count: 4
            }
        ],
        results: [
            {
                id: 'appliedcreate:advanced_stress_processor',
                count: 36
            }
        ],
        totalEnergy: 400000,
        lightningCost: 1,
        lightningTier: 'high_voltage'
    }).id('ccb:overload_processing/brass_processor')
})
