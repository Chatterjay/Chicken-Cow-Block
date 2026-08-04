ServerEvents.recipes(event =>{
event.shaped('8x ccb:raw_sandwich',[
    "A",
    "B",
    "C"
],{
    A:'minecraft:cobblestone',
    B:'chicken_roost:chicken_essence_tier_1',
    C:'minecraft:oak_log',
})
event.shaped('ccb:soul_boom',[
    "ABA",
    "BCB",
    "ABA"
],{
    A:'minecraft:soul_sand',
    B:'minecraft:gunpowder',
    C:'chicken_roost:chicken_essence_tier_2',
})
event.shaped('ccb:power_drink',[
    "AAA",
    "ACA",
    "AAA"
],{
    A:'ae2cs:irradiated_crystal_block',
    C:'mekanism:radioactive_waste_barrel',
})
event.shaped('ccb:life_water',[
    " A ",
    "BCD",
    " E "
],{
    A:'arsdelight:mendosteen_hornbeer',
    B:'arsdelight:bastion_hornbeer',
    C:'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:ber"]',
    D:'arsdelight:bombegrante_hornbeer',
    E:'arsdelight:frostaya_hornbeer'
})
})