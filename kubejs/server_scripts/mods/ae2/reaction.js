ServerEvents.recipes(event=>{
    event.custom(
        {
  "type": "advanced_ae:reaction",
  "input_energy": 1000000,
  "input_fluid": {
    "amount": 1000,
    "ingredient": {
      "fluid": "minecraft:lava"
    }
  },
  "input_items": [
    {
      "amount": 64,
      "ingredient": {
        "tag": "c:dusts/obsidian"
      }
    }
  ],
  "output": {
    "#": 64,
    "#t": "ae2:i",
    "id": "data_energistics:solidified_obsidian"
  }
})
})
