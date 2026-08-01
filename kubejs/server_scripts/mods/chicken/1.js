const chickenRecipes = [
  {
    tier: 1,
    time: 40,
    breed: false,
    chickens: [
      { output: "c_white", item: "minecraft:white_dye" },
      { output: "c_orange", item: "minecraft:orange_dye" },
      { output: "c_magenta", item: "minecraft:magenta_dye" },
      { output: "c_light_blue", item: "minecraft:light_blue_dye" },
      { output: "c_yellow", item: "minecraft:yellow_dye" },
      { output: "c_lime", item: "minecraft:lime_dye" },
      { output: "c_gray", item: "minecraft:gray_dye" },
      { output: "c_light_gray", item: "minecraft:light_gray_dye" },
      { output: "c_cyan", item: "minecraft:cyan_dye" },
      { output: "c_purple", item: "minecraft:purple_dye" },
      { output: "c_blue", item: "minecraft:blue_dye" },
      { output: "c_brown", item: "minecraft:brown_dye" },
      { output: "c_green", item: "minecraft:green_dye" },
      { output: "c_red", item: "minecraft:red_dye" },
      { output: "c_black", item: "minecraft:black_dye" },
      { output: "c_vanilla", item: "minecraft:egg" },
      { output: "c_sand", item: "minecraft:sand"},
      { output: "c_nautilusshell", item: "minecraft:nautilus_shell"},
      { output: "c_gravel", item: "minecraft:gravel"},
      { output: "c_feather", item: "minecraft:feather"},
     { output: "c_oakwood", item: "chicken_roost:wood_essence"},
     { output: "c_quartz", item: "minecraft:quartz"},
    ]
  },
  {
    tier: 1,
    time: 40,
    breed: true,
     chickens: [
      {
        output: "c_soulsand",
        parent_1: "c_sand",
        parent_2: "c_quartz",
        item: "minecraft:soul_sand"
      },
      {
        output: "c_cobble",
        parent_1: "c_black",
        parent_2: "c_gray",
        item: "chicken_roost:stone_essence"
      },
      {
        output: "c_bone",
        parent_1: "c_white",
        parent_2: "c_feather",
        item: "minecraft:bone"
      },
      {
        output: "c_flint",
        parent_1: "c_gravel",
        parent_2:"c_cobble",
        item: "minecraft:flint"
      },
      {
        output: "c_honeycomb",
        parent_1: "c_yellow",
        parent_2: "c_orange",
        item:  "minecraft:honeycomb"
      },
      {
        output: "c_dirt",
        parent_1: "c_oakwood",
        parent_2: "c_brown",
        item:  "minecraft:dirt"
      }
    ]
  },
  {
   tier: 2,
    time: 60,
    breed: true,
     chickens: [
      {
        output: "c_redstone",
        parent_1: "c_red",
        parent_2: "c_sand",
        item: "minecraft:redstone"
      },
      {
        output: "c_glowberries",
        parent_1: "c_sweetberries",
        parent_2: "c_yellow",
        item: "minecraft:glow_berries"
      }, 
      {
        output: "c_sweetberries",
        parent_1: "c_apple",
        parent_2: "c_red",
        item: "minecraft:sweet_berries"
      }, 
     {
        output: "c_glowstone",
        parent_1: "c_glowberries",
        parent_2: "c_redstone",
        item: "minecraft:glowstone_dust"
      }, 
      {
        output: "c_iron",
        parent_1: "c_flint",
        parent_2: "c_gray",
        item: "minecraft:iron_ingot"
      }, 
      {
        output: "c_string",
        parent_1: "c_feather",
        parent_2: "c_white",
        item: "minecraft:string"
      }, 
      {
        output: "c_lapis",
        parent_1: "c_blue",
        parent_2: "c_cyan",
        item: "minecraft:lapis_lazuli"
      }, 
      {
        output: "c_sugarcane",
        parent_1: "c_oakwood",
        parent_2: "c_lime",
        item: "minecraft:sugar_cane"
      }, 
      {
        output: "c_netherrack",
        parent_1: "c_cobble",
        parent_2: "c_quartz",
        item: "minecraft:netherrack"
      }, 
      {
        output: "c_coal",
        parent_1: "c_flint",
        parent_2: "c_black",
        item: "minecraft:coal"
      }, 
      {
        output: "c_snow",
        parent_1: "c_water",
        parent_2: "c_white",
        item: "minecraft:snowball"
      },
      {
        output: "c_blackquartz",
        parent_1: "c_quartz",
        parent_2: "c_coal",
        item: "actuallyadditions:black_quartz"
      },
      {
        output: "c_nickel",
        parent_1: "c_iron",
        parent_2: "c_light_gray",
        item: "immersiveengineering:ingot_nickel"
      },  
     ]
  },
  {
   tier: 2,
    time: 80,
    breed: false,
     chickens: [
       { output: "c_tnt", item: "minecraft:gunpowder" },
        { output: "c_pink", item: 'minecraft:pink_dye'},
       { output: "c_apple", item: "minecraft:apple" },
       { output: "c_melon", item: "minecraft:melon" },
       { output: "c_carrot", item: "minecraft:carrot" },
       { output: "c_beetroot", item: "minecraft:beetroot" },
       { output: "c_water", item: "chicken_roost:water_egg" },
       { output: "c_lava", item: "chicken_roost:lava_egg" },
       { output: "c_pumpkin", item: "minecraft:pumpkin" }
     ]
  },
  {
  tier: 3,
    time: 100,
    breed: true,
     chickens: [
      {
        output: "c_glass",
        parent_1: "c_sand",
        parent_2: "c_coal",
        item: "minecraft:glass"
      }, 
      {
        output: "c_copper",
        parent_1: "c_iron",
        parent_2: "c_orange",
        item: "minecraft:copper_ingot"
      }, 
      {
        output: "c_clay",
        parent_1: "c_water",
        parent_2: "c_dirt",
        item: "minecraft:clay_ball"
      },
      {
        output: "c_leather",
        parent_1: "c_brown",
        parent_2: "c_orange",
        item: "minecraft:leather"
      },
      {
        output: "c_rabbithide",
        parent_1: "c_leather",
        parent_2: "c_flint",
        item: "minecraft:rabbit_hide"
      },
      {
        output: "c_spidereye",
        parent_1: "c_string",
        parent_2: "c_sweetberries",
        item: "minecraft:spider_eye"
      },
      {
        output: "c_spidereye",
        parent_1: "c_string",
        parent_2: "c_sweetberries",
        item: "minecraft:spider_eye"
      },
      {
        output: "c_lead",
        parent_1: "c_iron",
        parent_2: "c_black",
        item: "immersiveengineering:ingot_lead"
      },
      {
        output: "c_netherwart",
        parent_1: "c_soulsand",
        parent_2: "c_beetroot",
        item: "minecraft:nether_wart"
      },
      {
        output: "c_sulfur",
        parent_1: "c_tnt",
        parent_2: "c_yellow",
        item: "immersiveengineering:dust_sulfur"
      },
      {
        output: "c_osmium",
        parent_1: "c_iron",
        parent_2: "c_white",
        item: "mekanism:ingot_osmium"
      },
      {
        output: "c_gold",
        parent_1: "c_iron",
        parent_2: "c_yellow",
        item: "minecraft:gold_ingot"
      },
      {
        output: "c_silver",
        parent_1: "c_osmium",
        parent_2: "c_white",
        item: "immersiveengineering:ingot_silver"
      },
      {
        output: "c_rubber",
        parent_1: "c_oakwood",
        parent_2: "c_leather",
        item: "industrialforegoing:dryrubber"
      },
      {
        output: "c_slag",
        parent_1: "c_sand",
        parent_2: "c_gravel",
        item: "immersiveengineering:slag"
      },
     ]
  },
  {
  tier: 3,
    time: 100,
    breed: false,
     chickens: [
    { output: "c_sponge", item: "minecraft:sponge" },
    { output: "c_aluminium", item: "immersiveengineering:ingot_aluminum"},
    { output: "c_invar", item: "modern_industrialization:invar_ingot"},
    { output: "c_graphite", item: "immersiveengineering:dust_hop_graphite"},
    { output: "c_steel", item: "immersiveengineering:ingot_steel"},
    { output: "c_restoniacrystal", item: "actuallyadditions:restonia_crystal"},
    { output: "c_paliscrystal", item: "actuallyadditions:palis_crystal"},
    { output: "c_conductiveiron", item: "enderio:conductive_alloy_ingot"},     
   ]
 },
  {
  tier: 4,
    time: 120,
    breed: true,
     chickens: [
       {
        output: "c_obsidian",
        parent_1: "c_water",
        parent_2: "c_lava",
        item: "minecraft:obsidian"
      },
      {
        output: "c_tin",
        parent_1: "c_osmium",
        parent_2: "c_gray",
        item: "mekanism:ingot_tin"
      },
      {
        output: "c_rotten",
        parent_1: "c_leather",
        parent_2: "c_brown",
        item: "minecraft:rotten_flesh"
      },
      {
        output: "c_niter",
        parent_1: "c_glowstone",
        parent_2: "c_sulfur",
        item: "mekanism:fluorite_gem"
      },
      {
        output: "c_blazerod",
        parent_1: "c_lava",
        parent_2: "c_bone",
        item: "minecraft:blaze_rod"
      },
      {
        output: "c_diamond",
        parent_1: "c_lapis",
        parent_2: "c_light_blue",
        item: "minecraft:diamond"
      },
      {
        output: "c_salt",
        parent_1: "c_water",
        parent_2: "c_blazerod",
        item: "alltheores:salt"
      },
      {
        output: "c_salt",
        parent_1: "c_water",
        parent_2: "c_blazerod",
        item: "alltheores:salt"
      },
      {
        output: "c_platinum",
        parent_1: "c_gold",
        parent_2: "c_iron",
        item: "modern_industrialization:platinum_ingot"
      },
   ]
  },
   {
  tier: 4,
    time: 120,
    breed: false,
     chickens: [
    { output: "c_slime", item: "minecraft:slime_ball" },
    { output: "c_biofuel", item: "mekanism:bio_fuel" },
    { output: "c_zinc", item: "create:zinc_ingot" },
    { output: "c_silicon", item: "ae2:silicon" },
    { output: "c_electrum", item: "immersiveengineering:ingot_electrum" },
    { output: "c_soularium", item: "enderio:soularium_ingot" },
    { output: "c_voidcrystal", item: "actuallyadditions:void_crystal" },
    { output: "c_energeticalloy", item: "enderio:energetic_alloy_ingot" },
    { output: "c_signalum", item: "immersiveengineering:ingot_constantan" },
    { output: "c_prismarineshard", item: "minecraft:prismarine_shard" },
    { output: "c_bitumen", item: "oritech:carbon_fibre_strands" },
    { output: "c_soularium", item: "enderio:soularium_ingot" },
    { output: "c_amethystshard", item: 'minecraft:amethyst_shard' }
   ]
  },
  {
  tier: 5,
    time: 140,
    breed: false,
     chickens: [
    { output: 'c_blood', item: 'irons_spellbooks:blood_vial'},
    { output: 'c_chorusfruit', item: 'minecraft:chorus_fruit' },
    { output: 'c_enderpearl', item: 'minecraft:ender_pearl'},
    { output: 'c_endstone', item: 'minecraft:end_stone' },
    { output: 'c_ruby', item: 'alltheores:ruby'},
    { output: 'c_chrome', item: 'modern_industrialization:chromium_dust'},
    { output: 'c_ferricore', item: 'justdirethings:ferricore_ingot'},
    { output: 'c_ghasttear', item: 'minecraft:ghast_tear'},
    { output: 'c_enoricrystal', item: 'actuallyadditions:enori_crystal'},
    { output: 'c_bronze', item: 'mekanism:ingot_bronze'},
    { output: 'c_redstonealloy', item: 'enderio:redstone_alloy_ingot'},
    { output: 'c_darksteel', item: 'enderio:dark_steel_ingot'},
    { output: 'c_breeze', item: 'minecraft:breeze_rod'},
    { output:'c_certusquartz' , item: 'ae2:certus_quartz_crystal'},
    { output:'c_skystone' , item: 'ae2:sky_stone_block'},
    { output:'c_antimony' , item: 'modern_industrialization:raw_antimony'},
    { output:'c_emerald' , item: 'minecraft:emerald'}
   ]
  },
   {
  tier: 5,
    time: 140,
    breed: true,
     chickens: [
      {
        output: "c_magmacream",
        parent_1: "c_slime",
        parent_2: "c_blazerod",
        item: "minecraft:magma_cream"
      },
       {
        output: "c_basalz",
        parent_1: "c_magmacream",
        parent_2: "c_lava",
        item: "minecraft:basalt"
      },
    
  ]
 },
 {
  tier: 6,
    time: 160,
    breed: false,
     chickens: [
    { output: 'c_enderium', item: 'ae2omnicells:ender_ingot'},
    { output: 'c_brass', item: 'create:brass_ingot'},
    { output: 'c_tungsten', item: 'modern_industrialization:raw_tungsten'},
    { output: 'c_prismarinecrystal', item: 'minecraft:prismarine_crystals'},
    { output: 'c_emeradiccrystal', item: 'actuallyadditions:emeradic_crystal'},
    { output: 'c_pulsatingiron', item: 'enderio:pulsating_alloy_ingot'},
    { output: 'c_vibrantalloy', item: 'enderio:vibrant_alloy_ingot'},
    { output: 'c_xp', item: 'minecraft:experience_bottle'},
    { output: 'c_chargedcertus', item: 'ae2:charged_certus_quartz_crystal'},
    { output: 'c_fluixcrystal', item: 'ae2:fluix_crystal'},
    { output: 'c_netherite', item: 'minecraft:netherite_scrap'},
    { output: 'c_singularity', item: 'ae2:singularity'},
    { output: 'c_entrocrystal', item: 'extendedae:entro_crystal'},
    { output: 'c_datacrystal', item: 'data_energistics:data_crystal'},
    { output: 'c_blazegold', item: 'justdirethings:blazegold_ingot'}
   ]
  },
  {
  tier: 7,
    time: 180,
    breed: false,
     chickens: [
    { output: 'c_diamantinecrystal', item: 'actuallyadditions:diamatine_crystal'},
    { output: 'c_allthemodium', item: 'allthemodium:allthemodium_ingot'},
    { output: 'c_vibranium', item: 'allthemodium:vibranium_ingot'},
    { output: 'c_draconium', item: 'draconicevolution:draconium_ingot'},
    { output: 'c_quantumalloy', item: 'advanced_ae:quantum_alloy'},
    { output: 'c_overloadcrystal', item:'ae2lt:overload_crystal'},
    { output: 'c_celestigem', item: 'justdirethings:celestigem'}
   ]
  },
  {
  tier: 8,
    time: 200,
    breed: false,
     chickens: [
    { output: 'c_iridium', item: 'modern_industrialization:iridium_ingot'},
    { output: 'c_netherstar', item: 'minecraft:nether_star'},
    { output: 'c_diamantinecrystal', item: 'actuallyadditions:diamatine_crystal'},
    { output: 'c_monazite', item: 'modern_industrialization:monazite_dust'},
    { output: 'c_stainsteel', item: 'modern_industrialization:stainless_steel_ingot'},
    { output: 'c_eclipsealloy', item:'justdirethings:eclipsealloy_ingot'}
   ]
  },
  {
  tier: 9,
    time: 220,
    breed: false,
     chickens: [
    { output: 'c_titanium', item: 'modern_industrialization:raw_titanium'},
    { output: 'c_unobtainium', item: 'allthemodium:unobtainium_ingot'},
    { output: 'c_plutonium', item: 'oritech:plutonium_dust'},
    { output: 'c_neutron', item: 'avaritia:neutron_ingot'},
    { output: 'c_awakeneddraconium', item: 'draconicevolution:awakened_draconium_ingot'}
   ]
  },
  {
  tier: 10,
    time: 300,
    breed: false,
     chickens: [
    { output: 'c_infinity', item: 'avaritia:infinity_nugget'},
    { output: 'c_antimatter', item: 'mekanism:pellet_antimatter'},
    { output: 'c_chaos', item: 'draconicevolution:medium_chaos_frag'},
    { output: 'c_uumatter', item: 'mekmm:uu_matter'}
   ]
  }
]
ServerEvents.recipes((event) => {
  event.remove({ type: "chicken_roost:basic_breeding" })
  event.remove({ type: "chicken_roost:trainer_output" })
  event.remove({ type: "chicken_roost:roost_output" })

  chickenRecipes.forEach((recipe) => {
    const tier = recipe.tier
    recipe.chickens.forEach((chicken) => {
      // New Chicken
      if (recipe.breed) {
        addRecipeChickenBreeding(
          event,
          `c:seeds/tier${tier - 1}orup`,
          `chicken_roost:${chicken.parent_1}`,
          `chicken_roost:${chicken.parent_2}`,
          `chicken_roost:${chicken.output}`,
          `ccb:roosts/breeding/${chicken.output}`
        )
      }

      // Same Chicken
      addRecipeChickenBreeding(
        event,
        `c:seeds/tier${tier}orup`,
        `chicken_roost:${chicken.output}`,
        `chicken_roost:${chicken.output}`,
        `chicken_roost:${chicken.output}`,
        `ccb:roosts/copying/${chicken.output}`
      )
      // Roost Block Output
      if (chicken.item) {
        addRecipeChickenRoostOutput(
          event,
          `c:seeds/tier${tier}orup`,
          `chicken_roost:${chicken.output}`,
          chicken.item,
          recipe.tier,
          `ccb:roosts/roost/${chicken.output}`
        )
      }
    })
  })

  for (let i = 1; i <= 9; i++) {
    event.custom({
      type: "chicken_roost:trainer_output",
      chicken: {
        tag: "c:roost/chicken"
      },
      output: {
        item: `chicken_roost:chicken_food_tier_${i}`
      }
    })
  }
})
ServerEvents.tags("item", (event) => {
  chickenRecipes.forEach((tiers) => {
    const tier = tiers.tier
    tiers.chickens.forEach((chicken) => {
      event.removeAllTagsFrom(`chicken_roost:${chicken.output}`)
      event.add(`c:roost/tier${tier}`, `chicken_roost:${chicken.output}`)
      event.add("c:roost/chicken", `chicken_roost:${chicken.output}`)
    })
  })
})

