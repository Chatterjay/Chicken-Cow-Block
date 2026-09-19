ServerEvents.recipes(event => {
    const preferredItemId = (tag, fallback) => {
        const target = AlmostUnified.getTagTargetItem(tag)
        if (target && !target.isEmpty()) return String(target.id)
        const ingredient = Ingredient.of(`#${tag}`)
        const ids = ingredient.itemIds
        if (ids && ids.length) return String(ids[0])
        const stacks = ingredient.stacks
        if (stacks && stacks.length) return stacks[0].id
        return fallback || null
    }

    const materials = [
        'aluminum',
        'bronze',
        'cadmium',
        'copper',
        'gold',
        'invar',
        'iron',
        'stainless_steel',
        'steel',
        'tin',
        'titanium',
        'uranium'
    ]

    materials.forEach(material => {
        const rodId = preferredItemId(`c:rods/${material}`, `modern_industrialization:${material}_rod`)
        if (!rodId) return
        event.custom({
            type: 'mekmm:lathe',
            input: {
                count: 1,
                tag: `c:ingots/${material}`
            },
            output: {
                count: 2,
                id: rodId
            }
        }).id(`ccb:lathe/${material}_rod`)
    })
})
