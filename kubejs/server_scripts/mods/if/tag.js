ServerEvents.tags("item",event => {
    event.add('c:plates/plastic','industrialforegoing:plastic')
    event.add('pneumaticcraft:plastic_sheets','industrialforegoing:plastic')
})

ServerEvents.tags("fluid", event => {
    event.add('c:steam', 'mekanism:steam')
    event.add('c:steam', 'mekanism:flowing_steam')
})