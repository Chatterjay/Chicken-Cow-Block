ServerEvents.recipes(event => {
  event.custom({
    type: 'lychee:catalyst_enchanting',
    book_in: {
      type: 'neoforge:components',
      items: 'minecraft:enchanted_book',
      components: {
        'minecraft:stored_enchantments': {
          levels: {
            'minecraft:unbreaking': 50
          }
        }
      }
    },
    item_in: {
      item:'enderio_evolution:undying_totem_capacitor'
    },
    post: [
      { type: 'prevent_default' },
      {
        type: 'lychee_oritech:transform_item',
        slot: 1,
        result: { id: 'ccb:world_containing_soul' }
      },
      {
        type: 'lychee_oritech:transform_item',
        slot: 0,
        result: { id: 'minecraft:air' }
      }
    ]
  }).id('ccb:catalyst_enchanting/world_containing_soul')
})
