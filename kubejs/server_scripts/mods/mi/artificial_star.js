ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.artificial_star(1, 100)
        .itemIn('mekanism:pellet_antimatter')
        .itemIn('mekmm:uu_matter')
        .itemOut('draconicevolution:chaos_shard')
        .euOut(76800000000);
});

ServerEvents.tags('item', event => {
    event.add('industrialization_overdrive:multi_processing_array_blacklist', 'modern_industrialization:artificial_star');
});