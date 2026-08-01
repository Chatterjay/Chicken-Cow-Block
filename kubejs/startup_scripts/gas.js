StartupEvents.registry('mekanism:chemical', event => {
    //注册气体（id，颜色，显示的名字）
    event.create('netherstar_gas').tint(0xf4f7cd).displayName('下界之星')
})
StartupEvents.registry('mekanism:chemical', event => {
    event.create('singularity_gas').tint(0x39013c).displayName('奇点')
})