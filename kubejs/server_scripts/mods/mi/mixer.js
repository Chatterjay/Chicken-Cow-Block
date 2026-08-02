ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.mixer(64, 1200)
        .fluidIn("1000x minecraft:milk")
        .fluidIn("10000x modern_industrialization:heavy_water")
        .itemOut('fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="modern_industrialization:deuterium"]');
    event.recipes.modern_industrialization.mixer(256, 1200)
        .itemIn('modern_industrialization:nuclear_reactor')
        .fluidIn("1000x minecraft:milk")
        .fluidIn("10000x modern_industrialization:high_pressure_heavy_water")
        .itemOut('fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="modern_industrialization:tritium"]');
});
