ServerEvents.recipes(event => {
  event.custom({
    type: "lychee:nuclear_explosion_destroy_block",
    block_in: "ccb:life_crystal",
    post: [
      { type: "drop_item", id: "ccb:life_ghost", count: 1 }
    ]
  })

  const IsMeltdown = Java.loadClass('icu.kudikan.lychee_mekanism.contextual.IsMeltdown')
  event.recipes.lychee.block_exploding(
    BlockPredicateWrapper.block('ccb:metastable_annihilation_life'),
    [
      PostBuilder.create().dropItem('ccb:shengsheng_gu')
    ]
  ).contextual(
    ContextualBuilder.create()
      .condition(IsMeltdown.INSTANCE)
      .build()
  ).id('ccb:meltdown/metastable_annihilation_life')
})
