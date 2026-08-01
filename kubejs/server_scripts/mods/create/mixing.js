ServerEvents.recipes(event=>{
    event.custom(
{
  "type": "create:mixing",
  "heat_requirement": "heated",
  "ingredients": [
    {
      "item": "chicken_roost:c_copper"
    },
    {
      "item": "chicken_roost:c_lime"
    }
  ],
  "results": [
    {
      "count": 1,
      "id": "chicken_roost:c_zinc"
    }
  ]
}
  )
      event.custom(
{
  "type": "create:mixing",
  "heat_requirement": "superheated",
  "ingredients": [
    {
      "item": "chicken_roost:c_copper"
    },
    {
      "item": "chicken_roost:c_zinc"
    }
  ],
  "results": [
    {
      "count": 1,
      "id": "chicken_roost:c_brass"
    }
  ]
}
  )
 }
)