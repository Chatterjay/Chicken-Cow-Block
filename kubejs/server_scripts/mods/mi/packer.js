ServerEvents.recipes(event => {
event.recipes.modern_industrialization.packer(16000, 1200)
.itemIn('fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="modern_industrialization:deuterium"]')
.itemIn('modern_industrialization:fusion_reactor')
.itemIn('fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="modern_industrialization:tritium"]')
.itemOut('fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="modern_industrialization:helium_plasma"]')
})