ServerEvents.recipes(event =>{
    event.remove({output:'mekmm:empty_crystal'})
})
ServerEvents.recipes(event=>{
    event.custom(
        {
  "type": "oritech:laser",
  "ingredients": [
    {
      "item": 'ifeu:dead_dragon_egg'
    }
  ],
  "results": [
    {
      "count": 1,
      "id": 'mekmm:empty_crystal'
    }
  ],
  "time": 1
})
})