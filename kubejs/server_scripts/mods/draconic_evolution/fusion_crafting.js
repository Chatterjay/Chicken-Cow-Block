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
                    "item": "chicken_roost:chicken_essence_tier_8"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "occultism:awakened_feather"
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
                    "item": "occultism:awakened_feather"
                }
            }
        ],
        "result": {
            "count": 1,
            "id": "chicken_roost:c_draconium"
        },
        "techLevel": "wyvern",
        "totalEnergy": 1000000
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
        totalEnergy: 10240000
    });
    event.custom({
        type: "draconicevolution:fusion_crafting",
        catalyst: {
            item: "ifeu:apple_core"
        },
        ingredients: [
            {
                consume: true,
                ingredient: {
                    item: "projecte:red_matter"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "projecte:red_matter"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "projectexpansion:yellow_matter"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "projectexpansion:yellow_matter"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "projectexpansion:white_matter"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "projectexpansion:white_matter"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "projectexpansion:fading_matter"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "projectexpansion:fading_matter"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "ifeu:liquid_malic_acid_bucket"
                }
            },
            {
                consume: true,
                ingredient: {
                    item: "ifeu:liquid_malic_acid_bucket"
                }
            }
        ],
        result: {
            count: 1,
            id: "ccb:delicious_matter"
        },
        techLevel: "draconic",
        totalEnergy: 819200000
    });
     event
    .custom({
      type: "draconicevolution:fusion_crafting",
      catalyst: {
        item: "chicken_roost:c_awakeneddraconium",
      },
      ingredients: [
        {
          consume: true,
          ingredient: {
            tag: "c:ingots/draconium_awakened",
          },
        },
        {
          consume: true,
          ingredient: {
            tag: "c:ingots/draconium_awakened",
          },
        },
        {
          consume: true,
          ingredient: {
            item: "draconicevolution:awakened_core",
          },
        },
        {
          consume: true,
          ingredient: {
            item: "draconicevolution:awakened_core",
          },
        },
        {
          consume: true,
          ingredient: {
            item: "draconicevolution:large_chaos_frag",
          },
        },
        {
          consume: true,
          ingredient: {
            item: "draconicevolution:large_chaos_frag",
          },
        },
        {
          consume: true,
          ingredient: {
            tag: "c:ingots/draconium_awakened",
          },
        },
        {
          consume: true,
          ingredient: {
            item: "draconicevolution:awakened_core",
          },
        },
        {
          consume: true,
          ingredient: {
            item: "draconicevolution:awakened_core",
          },
        },
        {
          consume: true,
          ingredient: {
            item: "draconicevolution:large_chaos_frag",
          },
        },
        {
          consume: true,
          ingredient: {
            item: "draconicevolution:large_chaos_frag",
          },
        },
        {
          consume: true,
          ingredient: {
            tag: "c:ingots/draconium_awakened",
          },
        },
      ],
      result: {
        count: 1,
        id: "chicken_roost:c_chaos",
      },
      techLevel: "chaotic",
      totalEnergy: 100000000,
    })
    event
    .custom({
      type: "draconicevolution:fusion_crafting",
      catalyst: {
        item: 'modern_industrialization:quantum_machine_hull',
      },
      ingredients: [
        {
          consume: true,
          ingredient: {
            item: 'draconicevolution:reactor_core',
          },
        },
        {
          consume: true,
          ingredient: {
            item: 'modern_industrialization:large_diesel_generator',
          },
        },
        {
          consume: true,
          ingredient: {
            item: 'modern_industrialization:mv_steam_turbine',
          },
        },
        {
          consume: true,
          ingredient: {
            item: 'modern_industrialization:plasma_turbine',
          },
        },
        {
          consume: true,
          ingredient: {
            item:'jdte:dimensional_collapse_solar_panel',
          },
        },
        {
          consume: true,
          ingredient: {
            item:'mekanism:pellet_antimatter',
          },
        },
        {
          consume: true,
          ingredient: {
            item: 'mekmm:uu_matter',
          },
        },
        {
          consume: true,
          ingredient: {
            item: 'mekanism_extras:naquadah_reactor_controller',
          },
        },
        {
          consume: true,
          ingredient: {
            item: 'mekanismgenerators:fusion_reactor_controller',
          },
        },
        {
          consume: true,
          ingredient: {
            item: 'modern_industrialization:fusion_reactor',
          },
        },
        {
          consume: true,
          ingredient: {
            item: 'modern_industrialization:nuclear_reactor',
          },
        },
        {
          consume: true,
          ingredient: {
            item: 'industrialforegoing:mycelial_reactor',
          },
        },
      ],
      result: {
        count: 1,
        id: 'modern_industrialization:artificial_star',
      },
      techLevel: "chaotic",
      totalEnergy: 100000000000,
    })
});

ServerEvents.tags('block', event => {
    event.add('minecraft:snow_layer_cannot_survive_on', 'draconicevolution:structure_block');
});