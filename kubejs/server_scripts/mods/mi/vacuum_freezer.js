ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.vacuum_freezer(128, 250)
        .itemIn('modern_industrialization:silicon_battery')
        .itemIn('modern_industrialization:sodium_battery')
        .fluidIn("8000x irons_spellbooks:ice_venom")
        .fluidIn("1000x modern_industrialization:cryofluid")
        .itemOut('ccb:frozen_battery_stick_ice');
    event.recipes.modern_industrialization.vacuum_freezer(128, 250)
        .itemIn('64x apothic_enchanting:infused_breath')
        .itemIn('ends_delight:dragon_breath_soda')
        .fluidIn("64000x create_dragons_plus:dragon_breath")
        .fluidIn("64000x ifeu:liquid_dragon_breath")
        .itemOut('ccb:drangon_ice_cream');
});