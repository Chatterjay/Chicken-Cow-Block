ServerEvents.recipes(event =>{
    event.shapeless('chicken_roost:c_vanilla',[
        'minecraft:egg'
    ])
    event.shaped('8x irons_spellbooks:arcane_essence',[
    "A",
    "B",
    "C"
],{
    A:'minecraft:light_blue_dye',
    B:'ars_nouveau:sourceberry_bush',
    C:'minecraft:purple_dye'
})
});