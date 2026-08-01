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
}
    )
})