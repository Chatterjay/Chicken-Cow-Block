ServerEvents.recipes(event => {
    event.remove({output: 'mekmm:scrap_box'});
    event.recipes.modern_industrialization.implosion_compressor(1024, 10)
        .itemIn('64x mekmm:scrap')
        .itemIn('modern_industrialization:industrial_tnt')
        .itemOut('mekmm:scrap_box', 0.1);
});
