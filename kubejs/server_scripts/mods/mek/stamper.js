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
        'copper',
        'gold',
        'invar',
        'iron',
        'stainless_steel',
        'steel',
        'tin',
        'titanium'
    ]

    materials.forEach(material => {
        const gearId = preferredItemId(`c:gears/${material}`, `modern_industrialization:${material}_gear`)
        if (!gearId) return
        event.custom({
            type: 'mekmm:stamper',
            input: {
                count: 8,
                tag: `c:ingots/${material}`
            },
            mold: {
                count: 1,
                item: 'immersiveengineering:mold_gear'
            },
            output: {
                count: 1,
                id: gearId
            }
        }).id(`ccb:stamper/${material}_gear`)
    })
})
