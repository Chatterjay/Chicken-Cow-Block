ServerEvents.recipes(event => {
    // 删除配方
    [
        // 罐装机
        'extended_industrialization:/canning_machine/generated/canned_food/minecraft/honey_bottle',
        'extended_industrialization:canning_machine/emptying/minecraft/honey_bottle',
        // 化学反应釜
        'modern_industrialization:materials/chemical_reactor/water',
        'modern_industrialization:vanilla_recipes/chemical_reactor/prismarine_crystals',
        'modern_industrialization:oil/chemical_reactor/propene_to_acrylic_acid',
        // 搅拌机
        'modern_industrialization:vanilla_recipes/mixer/dye/light_gray_dye5',
        'modern_industrialization:vanilla_recipes/mixer/dye/magenta_dye4',
        'modern_industrialization:vanilla_recipes/mixer/dye/purple_dye',
        'modern_industrialization:alloy/mixer/invar/tiny_dust',
        'modern_industrialization:alloy/mixer/invar/dust',
        'modern_industrialization:alloy/mixer/le_mox/tiny_dust',
        'modern_industrialization:alloy/mixer/le_mox/dust',
        'modern_industrialization:alloy/mixer/he_mox/tiny_dust',
        'modern_industrialization:alloy/mixer/he_mox/dust',
        'modern_industrialization:alloy/mixer/le_uranium/dust',
        'modern_industrialization:alloy/mixer/le_uranium/tiny_dust',
        'modern_industrialization:alloy/mixer/he_uranium/dust',
        'modern_industrialization:alloy/mixer/he_uranium/tiny_dust',

        // 装配机
        'extended_industrialization:machines/tesla_receiver/assembler',
        'industrialization_overdrive:shaped/craft/terminal/assembler',
        'extended_industrialization:materials/aluminum/assembler/tesla_winding',
        'modern_industrialization:assembler_generated/electric_age/machine/wiremill',
        'modern_industrialization:assembler_generated/steam_age/steel/wiremill',
        // 装配机-仓室
        'modern_industrialization:hatches/basic/assembler/energy_input_hatch',
        'modern_industrialization:hatches/basic/assembler/energy_output_hatch',
        'modern_industrialization:hatches/advanced/assembler/energy_input_hatch',
        'modern_industrialization:hatches/advanced/assembler/energy_output_hatch',

        // 打包机
        'modern_industrialization:vanilla_recipes/packer/slimeblock',
        'modern_industrialization:vanilla_recipes/packer/prismarine',
        'modern_industrialization:vanilla_recipes/packer/melon',
        'modern_industrialization:materials/gold/packer/ingot',
        'modern_industrialization:materials/nuclear_alloy/packer/large_plate',
        'modern_industrialization:materials/blastproof_alloy/packer/large_plate',

        // 切割机
        'modern_industrialization:vanilla_recipes/cutting_machine/sticks'

    ].forEach(recipeId => event.remove({id: recipeId}));

    ['acacia', 'birch', 'cherry', 'crimson', 'dark_oak', 'jungle', 'mangrove', 'oak', 'spruce', 'warped'].forEach(wood => {
        event.remove({id: `modern_industrialization:cutting_machine/stripped/${wood}`});
        event.remove({id: `modern_industrialization:cutting_machine/stripped_wood/${wood}`});
    });

    event.recipes.modern_industrialization.chemical_reactor(10, 240)
        .fluidIn('400x modern_industrialization:propene')
        .fluidIn('600x modern_industrialization:oxygen')
        .fluidIn('100x modern_industrialization:steam')
        .fluidOut('400x modern_industrialization:acrylic_acid')
        .fluidOut('500x minecraft:water')
        .id('ccb:oil/chemical_reactor/propene_to_acrylic_acid');

    ['', 'tiny_'].forEach(suffix => {
        event.recipes.modern_industrialization.mixer(2, 100)
            .itemIn(`8x #c:${suffix}dusts/uranium_238`)
            .itemIn(`1x #c:${suffix}dusts/plutonium`)
            .itemIn(`1x #c:${suffix}dusts/lead`)
            .itemOut(`9x modern_industrialization:le_mox_${suffix}dust`)
            .id(`ccb:alloy/mixer/le_mox/${suffix}dust`);

        event.recipes.modern_industrialization.mixer(2, 100)
            .itemIn(`6x #c:${suffix}dusts/uranium_238`)
            .itemIn(`3x #c:${suffix}dusts/plutonium`)
            .itemIn(`1x #c:${suffix}dusts/uranium`)
            .itemOut(`9x modern_industrialization:he_mox_${suffix}dust`)
            .id(`ccb:alloy/mixer/he_mox/${suffix}dust`);

        event.recipes.modern_industrialization.mixer(2, 100)
            .itemIn(`8x #c:${suffix}dusts/uranium_238`)
            .itemIn(`1x #c:${suffix}dusts/uranium_235`)
            .itemIn(`1x #c:${suffix}dusts/lead`)
            .itemOut(`9x modern_industrialization:le_uranium_${suffix}dust`)
            .id(`ccb:alloy/mixer/le_uranium/${suffix}dust`);

        event.recipes.modern_industrialization.mixer(2, 100)
            .itemIn(`6x #c:${suffix}dusts/uranium_238`)
            .itemIn(`3x #c:${suffix}dusts/uranium_235`)
            .itemIn(`1x #c:${suffix}dusts/uranium`)
            .itemOut(`9x modern_industrialization:he_uranium_${suffix}dust`)
            .id(`ccb:alloy/mixer/he_uranium/${suffix}dust`);
    });

    event.recipes.modern_industrialization.packer(2, 800)
        .itemIn('3x #c:plates/nuclear_alloy')
        .itemIn('modern_industrialization:mixed_plate_nuclear')
        .itemOut('modern_industrialization:nuclear_alloy_large_plate')
        .id('ccb:materials/nuclear_alloy/packer/large_plate');

    event.recipes.modern_industrialization.packer(2, 800)
        .itemIn('3x #c:plates/blastproof_alloy')
        .itemIn('modern_industrialization:mixed_ingot_blastproof')
        .itemOut('modern_industrialization:blastproof_alloy_large_plate')
        .id('ccb:materials/blastproof_alloy/packer/large_plate');

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x modern_industrialization:tin_cable')
        .itemIn('2x modern_industrialization:analog_circuit')
        .itemIn('1x modern_industrialization:basic_machine_hull')
        .itemIn('3x modern_industrialization:motor')
        .itemIn('4x modern_industrialization:copper_wire')
        .itemOut('1x modern_industrialization:electric_wiremill')
        .id('ccb:assembler/electric_age/machine/wiremill');

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('3x #c:gears/bronze')
        .itemIn('1x modern_industrialization:steel_machine_casing')
        .itemIn('2x #modern_industrialization:fluid_pipes')
        .itemIn('2x modern_industrialization:bronze_rotor')
        .itemIn('#c:gears/steel')
        .itemOut('1x modern_industrialization:steel_wiremill')
        .id('ccb:assembler/steam_age/machine/wiremill');
});

