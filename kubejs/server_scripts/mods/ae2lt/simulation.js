ServerEvents.recipes(event=>{
    event.custom(
        {
  "type": "ae2lt:lightning_simulation",
  "priority": 0,
  "inputs": [
    {
      "ingredient": {
        "item": "ae2lt:overload_processor"
      },
      "count": 8
    },
    {
      "ingredient": {
        "item": "ae2lt:overload_crystal_block"
      },
      "count": 8
    },
    {
      "ingredient": {
        "item": "ae2lt:overload_alloy"
      },
      "count": 8
    }
  ],
  "result": {
    "id": "ae2lt:lightning_collector",
    "count": 1
  },
  "totalEnergy": 200000,
  "lightningCost": 16,
  "lightningTier": "high_voltage"
})
})
