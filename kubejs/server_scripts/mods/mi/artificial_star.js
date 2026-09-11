ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.artificial_star(1, 1)
        .itemIn('mekanism:pellet_antimatter')
        .itemIn('mekmm:uu_matter')
        .itemOut('draconicevolution:chaos_shard')
        .euOut(76800000000);
        event.recipes.modern_industrialization.artificial_star(1, 100)
        .itemIn('ccb:fallen_star_glow')
        .itemIn('projectexpansion:gargantuan_star_omega')
        .itemOut('ccb:starlight_orb')
});

ServerEvents.tags('item', event => {
    event.add('industrialization_overdrive:multi_processing_array_blacklist', 'modern_industrialization:artificial_star');
    event.add('industrialization_overdrive:multi_processing_array_blacklist', 'modern_industrialization:fluid_compressor');
});
