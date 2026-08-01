ServerEvents.recipes(event =>{
    event.remove({output:'mekmm:uu_matter'})
})
ServerEvents.recipes(event=>{
    event.custom(
        {
  "type": "ifeu:shapeless",
  "inputFluid": {
    "amount": 1000,
    "id": "modern_industrialization:uu_matter"
  },
  "inputs": [
    {
      "item": "mekmm:empty_crystal"
    }
  ],
  "output": {
    "count": 1,
    "id": "mekmm:uu_matter"
  }
})
    event.custom(
        {
  "type": "ifeu:shapeless",
  "inputFluid": {
    "amount": 1000,
    "id": "modern_industrialization:styrene_butadiene_rubber"
  },
  "inputs": [
    {
      "item": "minecraft:acacia_sapling"
    }
  ],
  "output": {
    "count": 1,
    "id": "ifeu:rubber_sapling"
  }
})
})
