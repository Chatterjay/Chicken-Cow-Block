ServerEvents.recipes(event => {
    event.custom({
        "type": "ae2lt:firmament_conversion",
        "priority": 0,
        "inputs": [
            { "ingredient": { "item": "avaritia:star_fuel_block" }, "count": 1 },
            { "ingredient": { "item": "projectexpansion:final_star" }, "count": 1 },
            { "ingredient": { "item": "projectexpansion:colossal_star_omega" }, "count": 1 },
            { "ingredient": { "item": "oritech:big_solar_panel_block" }, "count": 1 },
            { "ingredient": { "item": "oritech:black_hole_block" }, "count": 1 },
            {
                "ingredient": {
                    "type": "neoforge:components",
                    "items": "extendedcrafting:singularity",
                    "components": {
                        "extendedcrafting:singularity_id": "extendedcrafting:ritual_conjure_meteorites"
                    }
                },
                "count": 1
            },
            {
                "ingredient": {
                    "type": "neoforge:components",
                    "items": "extendedcrafting:singularity",
                    "components": {
                        "extendedcrafting:singularity_id": "extendedcrafting:dragon_star_block"
                    }
                },
                "count": 1
            },
            {
                "ingredient": {
                    "type": "neoforge:components",
                    "items": "extendedcrafting:singularity",
                    "components": {
                        "extendedcrafting:singularity_id": "extendedcrafting:stellar_alloy_block"
                    }
                },
                "count": 1
            },
            {
                "ingredient": {
                    "type": "neoforge:components",
                    "items": "extendedcrafting:singularity",
                    "components": {
                        "extendedcrafting:singularity_id": "extendedcrafting:nether_star_block"
                    }
                },
                "count": 1
            }
        ],
        "results": [
            { "id": "ccb:fallen_star_glow", "count": 1 }
        ],
        "processTime": 200
    })
})
