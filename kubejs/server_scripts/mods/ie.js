ServerEvents.recipes(event=>{
    event.remove({output:'immersiveengineering:raw_aluminum'})
    event.remove({output:'immersiveengineering:ore_aluminum'})
    event.remove({output:'immersiveengineering:deepslate_ore_aluminum'})
    event.custom(
      {
  "type": "immersiveengineering:squeezer",
  "energy": 19200,
  "input": {
    "basePredicate": {
      "item": "chicken_roost:c_coal"
    },
    "count": 8
  },
  "result": {
    "item": "chicken_roost:c_graphite"
  }
}

    )
  }
)