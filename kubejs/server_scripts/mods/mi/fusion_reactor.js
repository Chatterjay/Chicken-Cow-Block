ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.fusion_reactor(32000, 300)
        .fluidIn('1000x modern_industrialization:helium_plasma')
        .fluidIn('1000x modern_industrialization:helium_plasma')
        .fluidOut('1000x modern_industrialization:fanta_plasma')
        .fluidOut('1000x minecraft:water');
});