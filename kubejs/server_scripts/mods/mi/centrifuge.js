ServerEvents.recipes(event => {
    event.remove({id: 'modern_industrialization:vanilla_recipes/centrifuge/lava'});
    event.recipes.modern_industrialization.centrifuge(32, 800)
        .itemIn('6x chicken_roost:c_ruby')
        .itemOut('chicken_roost:c_chrome')
    event.recipes.modern_industrialization.centrifuge(32, 600)
        .fluidIn('1000x minecraft:lava')
        .itemOut('17x modern_industrialization:sulfur_dust')
        .itemOut('11x modern_industrialization:copper_nugget')
        .itemOut('modern_industrialization:chromium_nugget', 0.25)
        .id('modern_industrialization:vanilla_recipes/centrifuge/lava')
    event.recipes.modern_industrialization.centrifuge(32, 600)
        .itemIn('8x fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="minecraft:water"]')
        .itemOut('fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="modern_industrialization:deuterium"]')
        .itemOut('fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="modern_industrialization:tritium"]')
});
