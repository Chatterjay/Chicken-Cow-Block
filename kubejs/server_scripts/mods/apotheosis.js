ServerEvents.recipes(event => {
    event.remove({ output: 'apotheosis:pinnacle_spawner_upgrade_rune' });
    event.shaped('apotheosis:pinnacle_spawner_upgrade_rune', [
        'GAG',
        'INI',
        'GEG'
    ], {
        A: 'apotheosis:god_fused_pearl',
        E: 'minecraft:nether_star',
        G: 'apotheosis:godforged_pearl',
        I: 'apothic_enchanting:infused_breath',
        N: 'apotheosis:infused_spawner_rune'
    }).id('ccb:apotheosis/pinnacle_spawner_upgrade_rune');
});
