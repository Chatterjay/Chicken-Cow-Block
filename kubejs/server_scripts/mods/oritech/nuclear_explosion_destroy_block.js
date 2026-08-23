ServerEvents.recipes(event => {
  event.custom({
    type: "lychee:nuclear_explosion_destroy_block",
    block_in: "ccb:life_crystal",
    post: [
      { type: "drop_item", id: "ccb:life_ghost", count: 1 }
    ]
  })
})
