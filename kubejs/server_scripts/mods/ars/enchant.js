ServerEvents.recipes(event=>{
    event.custom(
{
  "type": "ars_nouveau:enchanting_apparatus",
  "keepNbtOfReagent": true,
  "pedestalItems": [
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "avaritia:neutron"
    },
    {
      "item": "minecraft:heavy_core"
    },
    {
      "item": "ars_elemental:mark_of_mastery"
    },
    {
      "item": "ars_elemental:mark_of_mastery"
    },
    {
      "item": "ars_elemental:mark_of_mastery"
    }
  ],
  "reagent": {
    "item": "chicken_roost:c_vanilla"
  },
  "result": {
    "count": 1,
    "id": "chicken_roost:c_neutron"
  },
  "sourceCost": 100000
})
})
ServerEvents.recipes(event => {
event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'cognition:flask_of_hades',
            'ae2omnicells:netherite_scrap_block',
            'allthetweaks:nether_star_block',
            'powah:nitro_crystal_block',
            'ccb:magic_drink'
        ], 
    'minecraft:ender_eye', 
    'gateways:gate_pearl[gateways:gateway="gateways:book_gate"]', 
    10000, 
)
event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'irons_spellbooks:diamond_spell_book[irons_spellbooks:spell_container={data:[],maxSpells:10,mustEquip:1b,spellWheel:1b}]',
            'mahoutsukai:guidebook',
            'ars_nouveau:apprentice_spell_book',
            'ars_nouveau:manipulation_essence',
            'ccb:magic_drink'
        ], 
    'ars_nouveau:magebloom_block', 
    'mi_tweaks:magic_chicken', 
    10000, 
)}
)