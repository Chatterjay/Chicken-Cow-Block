ServerEvents.recipes(event => {
    event.recipes.modern_mekanistics.mass_generator(4096, 200)
        .itemIn('100x mekmm:scrap_box')
        .chemicalIn("10000x mekmm:unstable_dimensional_gas")
        .fluidOut("1000x ccb:uu_amplitude");
});
