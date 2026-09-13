ServerEvents.recipes(event => {
  event.custom({
    type: 'lychee:arcane_explosion',
    item_in: {
      item: 'ccb:fengdu'
    },
    contextual: [
      {
        type: 'lychee_oritech:has_soul',
        range: { min: 2501 }
      }
    ],
    post: [
      { type: 'prevent_default' },
      { type: 'lychee_oritech:consume_soul', amount: 2500 },
      {
        type: 'lychee_oritech:transform_item',
        slot: 1,
        result: { id: 'minecraft:air' }
      },
      { type: 'drop_item', id: 'ccb:guixu_chalice', count: 1 }
    ]
  }).id('ccb:arcane_explosion/guixu_chalice')
})
