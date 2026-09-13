ServerEvents.recipes(event=>{
event.custom(
{
  "type": "farmersdelight:cooking",
  "container": { "id": "minecraft:glass_bottle" },
  "experience": 1.0,
  "ingredients": [
    {
      "item": 'ars_nouveau:sourceberry_bush'
    },
    {
      "item": 'irons_spellbooks:arcane_essence'
    },
    {
      "item": 'minecraft:egg'
    },
    {
      "item": 'minecraft:sugar'
    },
    {
      "item": 'farmersdelight:milk_bottle'
    }
  ],
  "recipe_book_tab": "drinks",
  "result": {
    "count": 1,
    "id": "ccb:magic_drink"
  }
})
event.custom(
{
  "type": "farmersdelight:cooking",
  "container": { "id": "minecraft:bowl" },
  "experience": 1.0,
  "ingredients": [
    {
      "item": 'justdirethings:gooblock_tier1'
    },
    {
      "item": 'justdirethings:gooblock_tier2'
    },
    {
      "item": 'justdirethings:upgrade_blank'
    },
    {
      "item": 'chicken_roost:chicken_essence_tier_4'
    },
    {
      "item": 'chicken_roost:chicken_essence_tier_4'
    },
    {
      "item": 'minecraft:sugar'
    }
  ],
  "result": {
    "count": 1,
    "id": "ccb:goo_jelly"
  }
})
event.custom({
  type: 'farmersdelight:cooking',
  container: { id: 'draconicevolution:draconium_ingot' },
  experience: 1.0,
  ingredients: [
    { item: 'ends_delight:liquid_dragon_egg' },
    { item: 'irons_spellbooks:dragonskin' },
    { item: 'jdte:ender_dragon_essence' },
    { item: 'draconicevolution:awakened_draconium_dust' },
    { item: 'apothic_enchanting:draconic_endshelf' }
  ],
  result: {
    count: 1,
    id: 'ccb:drangon_rice_bowl'
  }
}).id('ccb:cooking/drangon_rice_bowl')
event.custom(
{
  "type": "farmersdelight:cutting",
  "ingredients": [
    {
      "item": "appflux:redstone_crystal"
    }
  ],
  "result": [
    {
      "item": {
        "count": 4,
        "id": "ccb:crystal_thin_sheet"
      }
    },
  ],
  "tool": [
    {
      "item": "data_energistics:data_crystal_cutting_knife"
    }
  ]
})
})
