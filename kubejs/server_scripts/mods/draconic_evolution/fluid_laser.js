ServerEvents.recipes(event => {
  event.custom({
    type: "industrialforegoing:laser_drill_fluid",
    catalyst: {
      item: "ccb:chaos_lens"
    },
    entity_data: {
      data: {},
      display: "",
      entity: {
        type: "draconicevolution:draconic_guardian"
      }
    },
    output: {
      amount: 10,
      fluid: "ccb:chaotic_polarization_fluid"
    },
    rarity: [
      {
        biome_filter: {
          blacklist: [],
          whitelist: []
        },
        depth_max: 256,
        depth_min: -64,
        dimension_filter: {
          blacklist: [],
          whitelist: [
            "ars_nouveau:jar"
          ]
        },
        weight: 8
      }
    ]
  }).id("ccb:laser_drill_fluid/chaotic_polarization_fluid")
})
