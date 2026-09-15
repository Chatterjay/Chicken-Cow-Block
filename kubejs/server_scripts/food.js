ServerEvents.recipes(event =>{
event.shaped('8x ccb:raw_sandwich',[
    "C",
    "B",
    "A"
],{
    A:'minecraft:cobblestone',
    B:'chicken_roost:chicken_essence_tier_1',
    C:'minecraft:oak_log',
})
event.shaped('4x ccb:soul_boom',[
    "ABA",
    "BCB",
    "ABA"
],{
    A:'minecraft:soul_sand',
    B:'minecraft:gunpowder',
    C:'chicken_roost:chicken_essence_tier_2',
})
event.shaped('ccb:power_drink',[
    "ABA",
    "ACA",
    "AAA"
],{
    A:'ae2cs:irradiated_crystal_block',
    B: 'createaddition:straw',
    C:'mekanism:radioactive_waste_barrel'
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
ServerEvents.recipes(event => {
  event.custom({
    type: "lychee:item_inside",
    item_in: { item: 'ccb:dragon_wings' },
    block_in: "pneumaticcraft:yeast_culture[level=0]",
    time: 240,
    post: [
      { type: "drop_item", id: "ccb:aged_dragon_wings" }
    ]
  })
})