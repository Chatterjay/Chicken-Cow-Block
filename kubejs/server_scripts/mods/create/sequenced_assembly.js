ServerEvents.recipes(event=>{
    event.custom(
        {
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "minecraft:blackstone"
  },
  "results": [
    {
      "id": "minecraft:end_portal_frame"
    }
  ],
  "sequence": [
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "ccb:incomplete_end_portal_frame"
        },
        {
          "type": "neoforge:single",
          "amount": 500,
          "fluid": "create_dragons_plus:white_dye"
        }
      ],
      "results": [
        {
          "id": "ccb:incomplete_end_portal_frame"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "ccb:incomplete_end_portal_frame"
        },
        {
            "item": "chicken_roost:c_zinc"
        }
        ],
      "results": [
        {
          "id": "ccb:incomplete_end_portal_frame"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "ccb:incomplete_end_portal_frame"
        },
        {
            "item": "minecraft:ender_eye"
        }
      ],
      "results": [
        {
          "id": "ccb:incomplete_end_portal_frame"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "ccb:incomplete_end_portal_frame"
        }
      ],
      "results": [
        {
          "id": "ccb:incomplete_end_portal_frame"
        }
      ]
    }
  ],
  "transitional_item": {
    "id": "ccb:incomplete_end_portal_frame"
  }
}
    )
})
ServerEvents.recipes(event=>{
    event.custom(
{
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "chicken_roost:chicken_food_tier_1"
  },
  "loops": 114514,
  "results": [
    {
      "chance": 8.0,
      "id": "chicken_roost:chicken_food_tier_9"
    },
    {
      "chance": 8.0,
      "id": "minecraft:cow_spawn_egg"
    },
    {
      "chance": 8.0,
      "id": "chicken_roost:c_vanilla"
    },
    {
      "chance": 8.0,
      "id": "minecraft:short_grass"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": "chicken_roost:chicken_food_tier_1"
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    }
  ],
  "transitional_item": {
    "id": "create:incomplete_precision_mechanism"
  }
})
})