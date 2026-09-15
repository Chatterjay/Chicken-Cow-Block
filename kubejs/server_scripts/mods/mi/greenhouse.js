ServerEvents.recipes(event => {
  const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
  const BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem')
  const ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
  const GreenhouseCropResolver = Java.loadClass('com.jdte.common.recipes.GreenhouseCropResolver')
  const added = new Set()

  const itemId = item => {
    const key = BuiltInRegistries.ITEM.getKey(item)
    return key ? key.toString() : null
  }

  const stackString = stack => {
    if (!stack || stack.empty) return null
    const id = itemId(stack.item)
    if (!id) return null
    const count = stack.count || 1
    return count > 1 ? `${count}x ${id}` : id
  }

  const addGreenhouse = (seed, outputs, fluidAmount) => {
    if (!seed || !outputs.length || added.has(seed)) return
    added.add(seed)
    const recipe = event.recipes.modern_industrialization.greenhouse(32, 100)
      .itemIn(seed, 0)
      .fluidIn("1x extended_industrialization:npk_fertilizer")
    outputs.forEach(output => recipe.itemOut(output))
  }

  const addFromDefinition = (seed, definition) => {
    if (!seed || !definition) return
    const outputs = []
    definition.outputs().forEach(stack => {
      const out = stackString(stack)
      if (out) outputs.push(out)
    })
    addGreenhouse(seed, outputs, definition.timeFluid())
  }

  const ingredientItem = ing => {
    if (!ing) return null
    if (typeof ing === 'string') return ing
    return ing.item || ing.id || null
  }

  const jsonStackString = stack => {
    const id = stack.id || stack.item
    if (!id) return null
    const count = stack.count || 1
    return count > 1 ? `${count}x ${id}` : id
  }

  event.forEachRecipe({ type: 'jdte:greenhouse' }, recipe => {
    const json = typeof recipe.json === 'string' ? JSON.parse(recipe.json) : JSON.parse(recipe.json.toString())
    const seedIng = json.seed || {}
    const outputs = (json.outputs || []).map(jsonStackString).filter(Boolean)
    const fluidAmount = json.time_fluid || 10
    const seed = ingredientItem(seedIng)
    if (seed) {
      addGreenhouse(seed, outputs, fluidAmount)
      return
    }
    if (seedIng.tag) {
      Ingredient.of(`#${seedIng.tag}`).itemIds.forEach(id => addGreenhouse(id, outputs, fluidAmount))
    }
  })

  BuiltInRegistries.ITEM.forEach(item => {
    if (!(item instanceof BlockItem)) return
    const seed = itemId(item)
    if (!seed || added.has(seed)) return
    addFromDefinition(seed, GreenhouseCropResolver.findGeneric(new ItemStack(item)))
  })
})
