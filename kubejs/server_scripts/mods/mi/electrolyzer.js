ServerEvents.recipes(event => {
    event.remove({id: 'modern_industrialization:materials/electrolyzer/uu_matter'});
    event.remove({id: 'modern_industrialization:materials/electrolyzer/lapis'});
    event.remove({id: 'modern_industrialization:materials/electrolyzer/beryllium_dust'});
    event.custom({
        type: "modern_industrialization:electrolyzer",
        eu: 32,
        duration: 2400,
        item_inputs: { tag: "c:dusts/lapis", amount: 18 },
        item_outputs: [
            { item: "modern_industrialization:sodium_dust", amount: 2 },
            { item: "modern_industrialization:silicon_dust", amount: 1 }
        ],
        fluid_outputs: { fluid: "modern_industrialization:oxygen", amount: 2500, probability: 0.5 }
    }).id('modern_industrialization:materials/electrolyzer/lapis');
    event.custom({
        type: "modern_industrialization:electrolyzer",
        eu: 32,
        duration: 400,
        item_inputs: { tag: "c:dusts/emerald", amount: 23 },
        item_outputs: [
            { item: "modern_industrialization:beryllium_dust", amount: 3 },
            { item: "modern_industrialization:silicon_dust", amount: 6 }
        ],
        fluid_outputs: { fluid: "modern_industrialization:oxygen", amount: 3000 }
    }).id('modern_industrialization:materials/electrolyzer/beryllium_dust');
    event.recipes.modern_industrialization.electrolyzer(256, 1000)
        .itemIn('64x chicken_roost:c_aluminium')
        .itemOut('chicken_roost:c_titanium');
    event.recipes.modern_industrialization.electrolyzer(114, 2000)
        .itemIn('modern_industrialization:singularity', 0.001)
        .fluidIn("1x ccb:uu_amplitude")
        .fluidOut('1x modern_industrialization:uu_matter');
});
