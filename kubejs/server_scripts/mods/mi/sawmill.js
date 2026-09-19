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
        'annealed_copper',
        'copper',
        'cupronickel',
        'electrum',
        'kanthal',
        'platinum',
        'silver',
        'superconductor',
        'tin'
    ]

    materials.forEach(material => {
        const plateId = preferredItemId(`c:plates/${material}`, `modern_industrialization:${material}_plate`)
        if (!plateId) return
        event.custom({
            type: 'mekanism:sawing',
            input: {
                count: 1,
                item: plateId
            },
            main_output: {
                count: 2,
                id: `modern_industrialization:${material}_wire`
            }
        }).id(`ccb:sawing/${material}_plate_to_wire`)
    })

    const fineWires = [
        'copper',
        'electrum',
        'platinum'
    ]

    fineWires.forEach(material => {
        event.custom({
            type: 'mekanism:sawing',
            input: {
                count: 1,
                item: `modern_industrialization:${material}_wire`
            },
            main_output: {
                count: 4,
                id: `modern_industrialization:${material}_fine_wire`
            }
        }).id(`ccb:sawing/${material}_wire_to_fine_wire`)
    })
})
