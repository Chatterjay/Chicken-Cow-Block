ServerEvents.recipes(event=>{
    event.recipes.mekanism.compressing('chicken_roost:c_uumatter','chicken_roost:c_neutron', '10000x mekmm:uu_matter')

    const preferredItemId = (tag, fallbacks) => {
        const target = AlmostUnified.getTagTargetItem(tag)
        if (target && !target.isEmpty()) return String(target.id)
        const ingredient = Ingredient.of(`#${tag}`)
        const ids = ingredient.itemIds
        if (ids && ids.length) return String(ids[0])
        const stacks = ingredient.stacks
        if (stacks && stacks.length) return stacks[0].id
        return fallbacks && fallbacks.length ? fallbacks[0] : null
    }

    const gemMaterials = ['diamond', 'emerald']
    const miPlates = [
        'aluminum', 'annealed_copper', 'battery_alloy', 'beryllium', 'blastproof_alloy',
        'bronze', 'cadmium', 'chromium', 'copper', 'cupronickel', 'diamond', 'electrum',
        'emerald', 'gold', 'invar', 'iridium', 'iron', 'kanthal', 'lead', 'nickel',
        'platinum', 'silicon', 'silver', 'stainless_steel', 'steel', 'superconductor',
        'tin', 'titanium', 'tungsten'
    ]
    const materials = [
        'iron',
        'copper',
        'gold',
        'aluminum',
        'tin',
        'lead',
        'constantan',
        'iridium',
        'uranium',
        'electrum',
        'bronze',
        'silver',
        'platinum',
        'nickel',
        'steel',
        'brass',
        'invar',
        'zinc',
        'osmium',
        'titanium',
        'tungsten',
        'netherite',
        'signalum',
        'lumium',
        'enderium',
        'diamond',
        'emerald',
        'stainless_steel',
        'annealed_copper',
        'battery_alloy',
        'blastproof_alloy',
        'beryllium',
        'cadmium',
        'chromium',
        'cupronickel',
        'kanthal',
        'silicon',
        'superconductor'
    ]

    materials.forEach(material => {
        const inputTag = gemMaterials.includes(material) ? `c:gems/${material}` : `c:ingots/${material}`
        const fallbacks = []
        if (miPlates.includes(material)) fallbacks.push(`modern_industrialization:${material}_plate`)
        fallbacks.push(`immersiveengineering:plate_${material}`, `alltheores:${material}_plate`)
        const plateId = preferredItemId(`c:plates/${material}`, fallbacks)
        if (!plateId) return
        event.custom({
            type: 'mekanism:compressing',
            chemical_input: {
                amount: 100,
                chemical: 'mekanism:hydrogen'
            },
            item_input: {
                count: 1,
                tag: inputTag
            },
            output: {
                count: 1,
                id: plateId
            },
            per_tick_usage: false
        }).id(`ccb:compressing/${material}_plate`)
    })

    const curvedPlates = [
        'aluminum',
        'battery_alloy',
        'blastproof_alloy',
        'bronze',
        'copper',
        'gold',
        'iridium',
        'stainless_steel',
        'steel',
        'tin',
        'titanium'
    ]

    curvedPlates.forEach(material => {
        event.custom({
            type: 'mekanism:compressing',
            chemical_input: {
                amount: 100,
                chemical: 'mekanism:hydrogen'
            },
            item_input: {
                count: 1,
                tag: `c:plates/${material}`
            },
            output: {
                count: 1,
                id: `modern_industrialization:${material}_curved_plate`
            },
            per_tick_usage: false
        }).id(`ccb:compressing/${material}_curved_plate`)
    })
})
