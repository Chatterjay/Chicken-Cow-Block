ServerEvents.recipes(event=>{
    event.custom(
        {
  "type": "create_dragons_plus:freezing",
  "ingredients": [
    {
      "item": 'chicken_roost:c_blazerod'
    }
  ],
  "results": [
    {
      "id": 'chicken_roost:c_breeze'
    }
  ]
})
    event.custom(
        {
  "type": "create_dragons_plus:ending",
  "ingredients": [
    {
      "type": "neoforge:components",
      "items": 'fluidsneo:fluid_cow_spawn_egg',
      "components": {
        "fluidsneo:fluid_type": "ifeu:liquid_malic_acid"
      }
    }
  ],
  "results": [
    {
      "id": 'fluidsneo:fluid_cow_spawn_egg',
      "components": {
        "fluidsneo:fluid_type": "ifeu:liquid_dragon_breath"
      }
    }
  ]
})
})