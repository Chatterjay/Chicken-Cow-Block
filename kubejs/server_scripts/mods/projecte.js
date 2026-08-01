ServerEvents.recipes(event => {
	event.remove({ mod: 'projectexpansion' })
    event.remove({ output: 'projecte:alchemical_coal'})
    event.remove({ output: 'projecte:mobius_fuel'})
    event.remove({ output: 'projecte:aeternalis_fuel'})
    event.remove({ output: 'projecte:red_matter'})
    event.remove({ output: 'projecte:dark_matter'})
    event.remove({ output: 'projecte:philosophers_stone' })
})
ServerEvents.recipes(event =>{
event.shaped('projecte:philosophers_stone',[
    "ABA",
    "BCB",
    "ABA"
],{
    A:'modern_industrialization:ruby_dust',
    B:'data_energistics:data_dust',
    C:'minecraft:diamond'
})
});
ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "   AAAAAA",
    "  ABCDEFA",
    " AGGHIJKA",
    "ALMMNOPQA",
    "ARMMSTUVA",
    "AWXYMMGBA",
    "AZabMMGA ",
    "AcdefgA  ",
    "AAAAAA   "
  ],
  "key": {
    "A": {
      "item": "enderio_evolution:stellar_alloy_block"
    },
    "B": {
      "item": "apothic_enchanting:ender_library"
    },
    "C": {
      "items": "irons_spellbooks:druidic_spell_book",
      "components": {
        "irons_spellbooks:spell_container": {
          "mustEquip": true,
          "data": [],
          "maxSpells": 10,
          "spellWheel": true
        }
      },
      "type": "neoforge:components"
    },
    "D": {
      "items": "irons_spellbooks:copper_spell_book",
      "components": {
        "irons_spellbooks:spell_container": {
          "mustEquip": true,
          "data": [],
          "maxSpells": 5,
          "spellWheel": true
        }
      },
      "type": "neoforge:components"
    },
    "E": {
      "items": "irons_spellbooks:diamond_spell_book",
      "components": {
        "irons_spellbooks:spell_container": {
          "mustEquip": true,
          "data": [],
          "maxSpells": 10,
          "spellWheel": true
        }
      },
      "type": "neoforge:components"
    },
    "F": {
      "items": "irons_spellbooks:netherite_spell_book",
      "components": {
        "irons_spellbooks:spell_container": {
          "mustEquip": true,
          "data": [],
          "maxSpells": 12,
          "spellWheel": true
        }
      },
      "type": "neoforge:components"
    },
    "G": {
      "item": "apothic_enchanting:filtering_shelf"
    },
    "H": {
      "items": "irons_spellbooks:villager_spell_book",
      "components": {
        "irons_spellbooks:spell_container": {
          "mustEquip": true,
          "data": [],
          "maxSpells": 10,
          "spellWheel": true
        }
      },
      "type": "neoforge:components"
    },
    "I": {
      "items": "irons_spellbooks:evoker_spell_book",
      "components": {
        "irons_spellbooks:spell_container": {
          "mustEquip": true,
          "data": [
            {
              "id": "irons_spellbooks:fang_strike",
              "index": 0,
              "level": 6,
              "locked": true
            },
            {
              "id": "irons_spellbooks:fang_ward",
              "index": 1,
              "level": 4,
              "locked": true
            },
            {
              "id": "irons_spellbooks:summon_vex",
              "index": 2,
              "level": 4,
              "locked": true
            }
          ],
          "maxSpells": 10,
          "spellWheel": true
        }
      },
      "type": "neoforge:components"
    },
    "J": {
      "items": "irons_spellbooks:dragonskin_spell_book",
      "components": {
        "irons_spellbooks:spell_container": {
          "mustEquip": true,
          "data": [],
          "maxSpells": 12,
          "spellWheel": true
        }
      },
      "type": "neoforge:components"
    },
    "K": {
      "items": "irons_spellbooks:gold_spell_book",
      "components": {
        "irons_spellbooks:spell_container": {
          "mustEquip": true,
          "data": [],
          "maxSpells": 8,
          "spellWheel": true
        }
      },
      "type": "neoforge:components"
    },
    "L": {
      "item": "ars_nouveau:archmage_spell_book"
    },
    "M": {
      "item": "apothic_enchanting:geode_shelf"
    },
    "N": {
      "items": "allthewizardgear:vibranium_spell_book",
      "components": {
        "irons_spellbooks:spell_container": {
          "mustEquip": true,
          "data": [],
          "maxSpells": 14,
          "spellWheel": true
        }
      },
      "type": "neoforge:components"
    },
    "O": {
      "items": "irons_spellbooks:ice_spell_book",
      "components": {
        "irons_spellbooks:spell_container": {
          "mustEquip": true,
          "data": [],
          "maxSpells": 12,
          "spellWheel": true
        }
      },
      "type": "neoforge:components"
    },
    "P": {
      "items": "irons_spellbooks:rotten_spell_book",
      "components": {
        "irons_spellbooks:spell_container": {
          "mustEquip": true,
          "data": [],
          "maxSpells": 8,
          "spellWheel": true
        }
      },
      "type": "neoforge:components"
    },
    "Q": {
      "items": "irons_spellbooks:blaze_spell_book",
      "components": {
        "irons_spellbooks:spell_container": {
          "mustEquip": true,
          "data": [],
          "maxSpells": 10,
          "spellWheel": true
        }
      },
      "type": "neoforge:components"
    },
    "R": {
      "item": "ars_nouveau:apprentice_spell_book"
    },
    "S": {
      "items": "irons_spellbooks:necronomicon_spell_book",
      "components": {
        "irons_spellbooks:spell_container": {
          "mustEquip": true,
          "data": [
            {
              "id": "irons_spellbooks:blood_slash",
              "index": 0,
              "level": 5,
              "locked": true
            },
            {
              "id": "irons_spellbooks:blood_step",
              "index": 1,
              "level": 5,
              "locked": true
            },
            {
              "id": "irons_spellbooks:ray_of_siphoning",
              "index": 2,
              "level": 5,
              "locked": true
            },
            {
              "id": "irons_spellbooks:blaze_storm",
              "index": 3,
              "level": 5,
              "locked": true
            }
          ],
          "maxSpells": 10,
          "spellWheel": true
        },
        "irons_spellbooks:affinity_data": {
          "bonuses": {
            "irons_spellbooks:raise_dead": 2
          }
        }
      },
      "type": "neoforge:components"
    },
    "T": {
      "items": "allthewizardgear:allthemodium_spell_book",
      "components": {
        "irons_spellbooks:spell_container": {
          "mustEquip": true,
          "data": [],
          "maxSpells": 13,
          "spellWheel": true
        }
      },
      "type": "neoforge:components"
    },
    "U": {
      "items": "irons_spellbooks:cursed_doll_spell_book",
      "components": {
        "irons_spellbooks:spell_container": {
          "mustEquip": true,
          "data": [],
          "maxSpells": 10,
          "spellWheel": true
        },
        "irons_spellbooks:affinity_data": {
          "bonuses": {
            "irons_spellbooks:blood_slash": 1,
            "irons_spellbooks:blood_step": 1
          }
        }
      },
      "type": "neoforge:components"
    },
    "V": {
      "items": "irons_spellbooks:iron_spell_book",
      "components": {
        "irons_spellbooks:spell_container": {
          "mustEquip": true,
          "data": [],
          "maxSpells": 6,
          "spellWheel": true
        }
      },
      "type": "neoforge:components"
    },
    "W": {
      "item": "ars_nouveau:novice_spell_book"
    },
    "X": {
      "item": "occultism:book_of_binding_marid"
    },
    "Y": {
      "items": "allthewizardgear:unobtainium_spell_book",
      "components": {
        "irons_spellbooks:spell_container": {
          "mustEquip": true,
          "data": [],
          "maxSpells": 15,
          "spellWheel": true
        }
      },
      "type": "neoforge:components"
    },
    "Z": {
      "item": "occultism:book_of_binding_djinni"
    },
    "a": {
      "item": "occultism:book_of_binding_afrit"
    },
    "b": {
      "item": "occultism:book_of_binding_empty"
    },
    "c": {
      "item": "occultism:taboo_book"
    },
    "d": {
      "item": "occultism:book_of_binding_foliot"
    },
    "e": {
      "item": "allthearcanistgear:allthemodium_spell_book"
    },
    "f": {
      "item": "allthearcanistgear:vibranium_spell_book"
    },
    "g": {
      "item": "allthearcanistgear:unobtainium_spell_book"
    }
  },
  "result": {
    "id": "projecte:tome"
  }
})
})
