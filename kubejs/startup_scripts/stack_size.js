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
    event.modify([
        'ccb_core:kudikan_fumo',
        'ccb_core:daipaibulaotie_fumo',
        'data_energistics:fish_dan_',
        'data_energistics:qiuyeqaq2024'
    ], item => {
        item.maxStackSize = 64
    })
})
