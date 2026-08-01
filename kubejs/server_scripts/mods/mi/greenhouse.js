ServerEvents.recipes(event => {
  const seedCrops = [
    { seed: 'minecraft:wheat_seeds', crop: 'minecraft:wheat' },
    { seed: 'minecraft:beetroot_seeds', crop: 'minecraft:beetroot' },
    { seed: 'minecraft:melon_seeds', crop: 'minecraft:melon' },
    { seed: 'minecraft:pumpkin_seeds', crop: 'minecraft:pumpkin' },
    { seed: 'minecraft:torchflower_seeds', crop: 'minecraft:torchflower' },
    { seed: 'minecraft:pitcher_pod', crop: 'minecraft:pitcher_plant' },
    { seed: 'farmersdelight:cabbage_seeds', crop: 'farmersdelight:cabbage' },
    { seed: 'farmersdelight:tomato_seeds', crop: 'farmersdelight:tomato' },
    { seed: 'farmersdelight:rice', crop: 'farmersdelight:rice_panicle' },
    { seed: 'farmersdelight:onion', crop: 'farmersdelight:onion' },
    { seed: 'actuallyadditions:canola_seeds', crop: 'actuallyadditions:canola' },
    { seed: 'actuallyadditions:coffee_beans', crop: 'actuallyadditions:coffee_beans' },
    { seed: 'actuallyadditions:flax_seeds', crop: 'minecraft:string' },
    { seed: 'actuallyadditions:rice_seeds', crop: 'actuallyadditions:rice' },
    { seed: 'occultism:datura_seeds', crop: 'occultism:datura' },
    { seed: 'ars_nouveau:magebloom_crop', crop: 'ars_nouveau:magebloom' },
    { seed: 'chicken_roost:chicken_food_tier_1', crop: 'chicken_roost:chicken_food_tier_1' },
    { seed: 'chicken_roost:chicken_food_tier_2', crop: 'chicken_roost:chicken_food_tier_2' },
    { seed: 'chicken_roost:chicken_food_tier_3', crop: 'chicken_roost:chicken_food_tier_3' },
    { seed: 'chicken_roost:chicken_food_tier_4', crop: 'chicken_roost:chicken_food_tier_4' },
    { seed: 'chicken_roost:chicken_food_tier_5', crop: 'chicken_roost:chicken_food_tier_5' },
    { seed: 'chicken_roost:chicken_food_tier_6', crop: 'chicken_roost:chicken_food_tier_6' },
    { seed: 'chicken_roost:chicken_food_tier_7', crop: 'chicken_roost:chicken_food_tier_7' },
    { seed: 'chicken_roost:chicken_food_tier_8', crop: 'chicken_roost:chicken_food_tier_8' },
    { seed: 'chicken_roost:chicken_food_tier_9', crop: 'chicken_roost:chicken_food_tier_9' },
    { seed: 'chicken_roost:chicken_food_tier_10', crop: 'chicken_roost:chicken_food_tier_10' },
  ]
    seedCrops.forEach(function(entry) {
      event.recipes.modern_industrialization.greenhouse(32, 100)
        .itemIn(entry.seed,0)
        .itemOut(entry.crop)
        .fluidIn("10x extended_industrialization:npk_fertilizer")
    })
  })
