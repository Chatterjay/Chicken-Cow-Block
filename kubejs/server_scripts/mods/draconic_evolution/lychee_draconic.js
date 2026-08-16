
ServerEvents.recipes(event => {
  event.custom({
    type: "lychee:draconic_explosion_destroy_block",
    block_in:'projectexpansion:fading_matter_block',
    post: [
      { type: "delay", s: 60 },
      { type: "drop_item", id: 'ccb:strongest_record', count: 1 }
    ]
  })
})
