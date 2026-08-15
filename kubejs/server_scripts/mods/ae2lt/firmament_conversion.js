ServerEvents.recipes(event=>{
    event.custom(
        {
  "type": "ae2lt:firmament_conversion",
  "priority": 0,
  "inputs": [
    {
      "ingredient": {
        "item": 'avaritia:star_fuel_block'
      },
      "count": 1
    },
    {
      "ingredient": {
        "item": 'projectexpansion:final_star'
      },
      "count": 4
    },
    {
      "ingredient": {
        "item": 'projectexpansion:colossal_star_omega'
      },
      "count": 4
    }
  ],
  "results": [
    {
      "id": 'ccb:fallen_star_glow',
      "count": 1
    }
  ],
  "processTime": 200
})
})