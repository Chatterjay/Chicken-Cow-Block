ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.assembler(64, 200)
        .itemIn('extended_industrialization:electric_farmer')
        .itemIn('4x jdte:large_greenhouse')
        .itemIn('4x industrialforegoing:simulated_hydroponic_bed')
        .itemIn('mekmm:ultimate_planting_factory')
        .fluidIn('500x extended_industrialization:npk_fertilizer')
        .itemOut('mi_tweaks:greenhouse');
        event.recipes.modern_industrialization.assembler(64, 200)
        .itemIn('4x modern_industrialization:distillation_tower')
        .itemIn('4x modern_industrialization:chemical_reactor')
        .itemIn('8x modern_industrialization:advanced_pump')
        .itemIn('32x modern_industrialization:digital_circuit')
        .itemOut('mi_tweaks:petrochemical_factory');
});