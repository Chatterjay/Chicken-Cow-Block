ServerEvents.recipes(event=>{
    event.custom(
        {
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "modern_industrialization:electric_quarry"
    }
  ],
  "results": [
    {
      "chance": 0.8,
      "id": "immersiveengineering:dust_aluminum"
    },
    {
      "chance": 0.1,
      "id": "chicken_roost:c_tungsten"
    },
    {
      "chance": 0.1,
      "id": "minecraft:iron_nugget"
    }
  ]
})
})