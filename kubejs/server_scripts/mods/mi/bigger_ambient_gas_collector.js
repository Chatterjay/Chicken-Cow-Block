ServerEvents.recipes(event => {
    event.recipes.modern_mekanistics.bigger_ambient_gas_collector(128, 100)
        .itemIn('mekmm:ambient_gas_collector',0)
        .chemicalOut("1000x mekmm:unstable_dimensional_gas")

});