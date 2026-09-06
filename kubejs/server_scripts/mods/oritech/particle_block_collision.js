ServerEvents.recipes(event => {
    event.custom({
        type: 'lychee:particle_block_collision',
        item_in: {
            type: 'neoforge:components',
            items: 'avaritia:infinity_clock',
            components: {
                'minecraft:custom_data': {
                    mode: {}
                }
            }
        },
        block_in: {
            blocks: ['projecte:dm_pedestal'],
            state: {
                waterlogged: 'false'
            },
            nbt: {
                Items: [
                    {
                        id: 'projecte:watch_of_flowing_time'
                    }
                ]
            }
        },
        momentum_cost: 100000,
        post: [
            {
                type: 'drop_item',
                id: 'ccb:chunqiu_cicada',
                count: 1
            }
        ]
    }).id('ccb:particle_hit_time_watch_dm_pedestal')
});
