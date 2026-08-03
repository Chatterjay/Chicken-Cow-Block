ServerEvents.recipes(event => {
    event.remove({output: 'mekmm:scrap_box'});
    event.recipes.modern_industrialization.implosion_compressor(1024, 10)
        .itemIn('64x mekmm:scrap')
        .itemIn('modern_industrialization:industrial_tnt')
        .itemOut('mekmm:scrap_box', 0.1);
    event.recipes.modern_industrialization.implosion_compressor(1, 10)
        .itemIn('64x #c:glass_blocks')
        .itemIn('minecraft:netherite_ingot')
        .itemIn('modern_industrialization:industrial_tnt')
        .itemOut('64x ccb_core:stellar_confinement_glass');
});
