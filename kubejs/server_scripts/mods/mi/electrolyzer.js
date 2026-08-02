ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "modern_industrialization:electrolyzer",
            "eu": 32,
            "duration": 2400,
            "item_inputs": [
                {
                    "item": "chicken_roost:c_lapis",
                    "amount": 6,
                    "probability": 1
                }
            ],
            "item_outputs": [
                {
                    "item": "chicken_roost:c_aluminium",
                    "amount": 1
                }
            ]
        }
    );
});
ServerEvents.recipes(event => {
    event.remove({id: 'modern_industrialization:materials/electrolyzer/uu_matter'});
    event.recipes.modern_industrialization.electrolyzer(2560, 1000)
        .itemIn('64x chicken_roost:c_aluminium')
        .itemOut('chicken_roost:c_titanium');
    event.recipes.modern_industrialization.electrolyzer(114, 2000)
        .itemIn('modern_industrialization:singularity', 0.001)
        .fluidIn("1x ccb:uu_amplitude")
        .fluidOut('1x modern_industrialization:uu_matter');
});
