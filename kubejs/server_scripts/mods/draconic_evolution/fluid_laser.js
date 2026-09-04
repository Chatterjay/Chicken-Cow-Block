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

  event.custom({
    type: "industrialforegoing:dissolution_chamber",
    input: [
      { tag: "c:glass_panes/colorless" },
      { tag: "c:glass_panes/colorless" },
      { tag: "c:glass_panes/colorless" },
      { tag: "c:glass_panes/colorless" },
      { item: "ccb:chaotic_space_fragment" },
      { item: "ccb:chaotic_space_fragment" },
      { item: "ccb:chaotic_space_fragment" },
      { item: "ccb:chaotic_space_fragment" }
    ],
    inputFluid: {
      amount: 1000,
      fluid: "industrialforegoing:ether_gas"
    },
    output: {
      count: 1,
      id: "ccb:chaos_lens"
    },
    processingTime: 200
  }).id("ccb:dissolution_chamber/chaos_lens")
})
