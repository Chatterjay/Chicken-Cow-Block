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
})
