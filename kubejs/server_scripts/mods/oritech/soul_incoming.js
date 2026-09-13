ServerEvents.recipes(event => {
  event.custom({
    type: 'lychee:soul_incoming',
    entity: {
      type: 'mecrh:ender_chicken'
    },
    post: [
      { type: 'drop_item', id: 'ccb:eternal_pain_soul', count: 1 }
    ]
  }).id('ccb:soul_incoming/ender_chicken')

  event.custom({
    type: 'lychee:soul_incoming',
    soul_flower: true,
    entity: {},
    post: [
      { type: 'drop_item', id: 'ccb:warm_eon_soul', count: 1 }
    ]
  }).id('ccb:soul_incoming/soul_flower')
})
