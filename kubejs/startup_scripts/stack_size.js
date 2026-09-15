ItemEvents.modification(event => {
    event.modify('minecraft:ender_pearl', item => {
        item.maxStackSize = 64
    })
    event.modify('minecraft:egg', item => {
        item.maxStackSize = 64
    })
    event.modify('mahoutsukai:hammer', item => {
        item.attackDamage = 10
    })
})
