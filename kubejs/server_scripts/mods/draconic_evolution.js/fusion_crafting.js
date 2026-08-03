ServerEvents.recipes(event => {
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "type": "draconicevolution:stack",
            "count": 1,
            "items": 'chicken_roost:c_enderpearl'
        },
        "ingredients": [
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:draconium_block"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:draconium_block"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:draconium_block"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "chicken_roost:chicken_essence_tier_8"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:draconium_block"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:awakened_draconium_ingot"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:awakened_draconium_ingot"
                }
            }
        ],
        "result": {
            "count": 1,
            "id": "chicken_roost:c_draconium"
        },
        "techLevel": "wyvern",
        "totalEnergy": 500000000
    });
    event.custom({
        type: "draconicevolution:fusion_crafting",
        catalyst: {
            item: "chicken_roost:c_draconium"
        },
        ingredients: [
            {
                consume: true,
                ingredient: {
                    item: "chicken_roost:chicken_food_tier_9"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "chicken_roost:chicken_food_tier_9"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "chicken_roost:chicken_essence_tier_9"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "chicken_roost:chicken_essence_tier_9"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "draconicevolution:medium_chaos_frag"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "draconicevolution:medium_chaos_frag"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "occultism:awakened_feather"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "occultism:awakened_feather"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "draconicevolution:awakened_draconium_block"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "draconicevolution:awakened_draconium_block"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "draconicevolution:awakened_draconium_block"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "draconicevolution:awakened_draconium_block"
                }
            }
        ],
        result: {
            count: 1,
            id: "chicken_roost:c_awakeneddraconium"
        },
        techLevel: "draconic",
        totalEnergy: 1024000000
    });
});

ServerEvents.tags('block', event => {
    event.add('minecraft:snow_layer_cannot_survive_on', 'draconicevolution:structure_block');
});