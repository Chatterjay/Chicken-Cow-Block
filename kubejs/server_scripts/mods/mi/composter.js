ServerEvents.recipes(event => {
event.recipes.extended_industrialization.composter(32, 20)
.itemIn('fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="mekanism:sulfuric_acid"]')
.itemIn('64x immersiveengineering:fertilizer')
.itemOut('fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="extended_industrialization:npk_fertilizer"]')
.fluidIn("8000x extended_industrialization:npk_fertilizer")
})