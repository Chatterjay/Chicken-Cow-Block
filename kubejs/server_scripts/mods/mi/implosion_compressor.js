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
     event.recipes.modern_industrialization.implosion_compressor(1, 10)
        .itemIn('modern_industrialization:plutonium_battery')
        .itemIn('oritech:plutonium_pellet')
        .itemIn('8x mekanism:pellet_plutonium')
        .itemIn('oritech:nuke')
        .itemOut('ccb:pellet_no');
    event.recipes.modern_industrialization.implosion_compressor(1, 10)
        .itemIn('modern_industrialization:he_uranium_fuel_rod')
        .itemIn('oritech:uranium_pellet')
        .itemIn('8x modern_industrialization:le_uranium_nugget')
        .itemIn('modern_industrialization:nuke')
        .itemOut('ccb:uranium_radiation');
    event.recipes.modern_industrialization.implosion_compressor(16000, 10)
        .itemIn('ars_elemental:necrotic_focus')
        .itemIn('64x ae2lt:overload_tnt')
        .itemIn('64x oritech:nuke')
        .itemIn('256x modern_industrialization:nuke')
        .itemOut('ccb:real_soul_boom');
});
