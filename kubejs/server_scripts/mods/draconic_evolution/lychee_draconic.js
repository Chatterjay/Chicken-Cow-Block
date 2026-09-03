
ServerEvents.recipes(event => {
  event.custom({
    type: "lychee:draconic_explosion_destroy_block",
    block_in:'projectexpansion:fading_matter_block',
    post: [
      { type: "delay", s: 60 },
      { type: "drop_item", id: 'ccb:strongest_record', count: 1 }
    ]
  }).id("ccb:draconic_explosion/fading_matter_block")

  event.custom({
    type: "lychee:draconic_explosion_damage_entity",
    entity: {
      type: "draconicevolution:draconic_guardian"
    },
    contextual: [
      {
        type: "location",
        predicate: {
          dimension: "ae2:spatial_storage"
        }
      }
    ],
    post: [
       { type: "delay", s: 60 },
      { type: "drop_item", id: "ccb:chaotic_space_fragment", count: 1 }
    ]
  }).id("ccb:draconic_explosion/chaotic_space_fragment")
})
