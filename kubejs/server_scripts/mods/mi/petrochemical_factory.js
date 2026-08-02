ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.petrochemical_factory(256, 2000)
        .fluidIn("2500x modern_industrialization:crude_oil")
        .fluidIn("2500x modern_industrialization:steam")
        .fluidOut('575x modern_industrialization:butadiene')
        .fluidOut('500x modern_industrialization:benzene')
        .fluidOut('550x modern_industrialization:ethylene')
        .fluidOut('150x modern_industrialization:acetylene')
        .fluidOut('100x modern_industrialization:ethylbenzene')
        .fluidOut('100x modern_industrialization:toluene')
        .fluidOut('75x modern_industrialization:propene')
        .fluidOut('450x modern_industrialization:methane');
    event.recipes.modern_industrialization.petrochemical_factory(64, 1200)
        .fluidIn("10000x minecraft:lava")
        .fluidIn("2500x data_energistics:ender")
        .fluidOut('10000x oritech:still_sulfuric_acid')
        .fluidOut('2500x oritech:still_sheol_fire')
        .fluidOut('1000x oritech:still_strange_matter');
});
