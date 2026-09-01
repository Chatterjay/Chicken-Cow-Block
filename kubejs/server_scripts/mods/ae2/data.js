ServerEvents.recipes(event=>{
    event.custom(
        {
	"type": "data_energistics:data_reassembler",
	"item_inputs": [
		{
			"ingredient": {
				"item": 'ae2:wireless_terminal'
            },
			"count": 1
		},
		{
			"ingredient": {
				"item": 'data_energistics:data_mimetic_field'
			},
			"count": 1
		},
		{
			"ingredient": {
				"item": 'data_energistics:data_extractor'
			},
			"count": 1
		},
		{
			"ingredient": {
				"item": 'data_energistics:data_dust'
			},
			"count": 8
		},
		{
			"ingredient": {
				"item": 'farmersdelight:rice'
			},
			"count": 2
		},
		{
			"ingredient": {
				"item": 'farmersdelight:onion'
			},
			"count": 2
		},
		{
			"ingredient": {
				"item": 'farmersdelight:minced_beef'
			},
			"count": 1
		},
        {
			"ingredient": {
				"item": 'farmersdelight:fried_egg'
			},
			"count": 1
		}
	],
	"fluid_inputs": [
		{
			"#": 500,
			"#t": "ae2:f",
			"id": "actuallyadditions:refined_canola_oil"
		}
	],
	"item_outputs": [
		{
			"id": 'ccb:terminal_fried_rice',
			"count": 1
		}
	],
	"key_input": {
		"#t": "data_energistics:data_flow",
		"#": 2400
	}
})
  event.custom(
        {
	"type": "data_energistics:data_reassembler",
	"item_inputs": [
		{
			"ingredient": {
				"item": 'minecraft:cow_spawn_egg'
            },
			"count": 1
		},
		{
			"ingredient": {
				"item": 'data_energistics:data_mimetic_field'
			},
			"count": 1
		}
	],
	"fluid_inputs": [
		{
			"#": 4000,
			"#t": "ae2:f",
			"id": "data_energistics:data_corrosion_liquid"
		}
	],
	"item_outputs": [
		{
			"id": 'fluidsneo:fluid_cow_spawn_egg',
			"count": 1,
			"components": {
				"fluidsneo:fluid_type": "data_energistics:data_corrosion_liquid"
			}
		}
	],
	"key_input": {
		"#t": "data_energistics:data_flow",
		"#": 2400
	}
})
 event.custom(
        {
	"type": "data_energistics:data_reassembler",
	"item_inputs": [
		{
			"ingredient": {
				"item": 'industrialforegoingsouls:soul_laser_base'
            },
			"count": 64
		},
		{
			"ingredient": {
				"item": 'industrialforegoingsouls:soul_surge'
			},
			"count": 64
		},
		{
			"ingredient": {
				"item": 'chicken_roost:chicken_essence_tier_9'
			},
			"count": 64
		},
		{
			"ingredient": {
				"item": 'projecte:soul_stone'
			},
			"count": 1
		},
		{
			"ingredient": {
				"type": "neoforge:components",
				"items": "extendedcrafting:singularity",
				"components": {
					"extendedcrafting:singularity_id": "extendedcrafting:divine_soulshard"
				}
			},
			"count": 1
		},
		{
			"ingredient": {
				"item": 'oritech:enchantment_catalyst_block'
			},
			"count": 1
		},
		{
			"ingredient": {
				"item": 'sauce:anima_essence'
			},
			"count":64
		},
		{
			"ingredient": {
				"item": 'occultism:trinity_gem'
			},
			"count": 1
		},
		{
			"ingredient": {
				"item": 'megacells:soul_storage_cell_256m'
			},
			"count": 1
		}
	],
	"fluid_inputs": [
		{
			"#": 256000,
			"#t": "ae2:f",
			"id": "allthemodium:soul_lava"
		}
	],
	"item_outputs": [
		{
			"id": 'ccb:soul_cry',
			"count": 1
		}
	],
	"key_input": {
		"#t": "soulplied_energistics:soul",
		"#": 12800000
	}
})

})