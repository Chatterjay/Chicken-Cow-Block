ServerEvents.recipes(event =>{
    event.remove({output:'chicken_roost:c_allthemodium'})
    event.remove({output:'chicken_roost:c_vibranium'})
    event.remove({output:'chicken_roost:c_unobtainium'})
})
ServerEvents.recipes(event=>{
    event.custom(
  {
  "type": "create:filling",
  "ingredients": [
    {
      "item": 'chicken_roost:chicken_essence_tier_7'
    },
    {
      "type": "neoforge:single",
      "amount": 1000,
      "fluid": "allthemodium:molten_allthemodium"
    }
  ],
  "results": [
    {
      "id": 'chicken_roost:c_allthemodium'
    }
  ]
})
})
ServerEvents.recipes(event=>{
    event.custom(
 {
  "type": "create:filling",
  "ingredients": [
    {
      "item": 'chicken_roost:chicken_essence_tier_8'
    },
    {
      "type": "neoforge:single",
      "amount": 1000,
      "fluid": "allthemodium:molten_vibranium"
    }
  ],
  "results": [
    {
      "id": 'chicken_roost:c_vibranium'
    }
  ]
})
})
ServerEvents.recipes(event=>{
    event.custom(
 {
  "type": "create:filling",
  "ingredients": [
    {
      "item": 'chicken_roost:chicken_essence_tier_9'
    },
    {
      "type": "neoforge:single",
      "amount": 1000,
      "fluid": "allthemodium:molten_unobtainium"
    }
  ],
  "results": [
    {
      "id": 'chicken_roost:c_unobtainium'
    }
  ]
})
})