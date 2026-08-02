ServerEvents.recipes(event => {
    event.shaped("chicken_roost:c_water", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: '#c:buckets/water',
        B: 'minecraft:feather',
        C: 'chicken_roost:chicken_essence_tier_2'
    });
    event.shaped('chicken_roost:c_oakwood', [
        "AAA",
        "ACA",
        "AAA"
    ], {
        A: 'minecraft:oak_log',
        C: 'chicken_roost:c_dirt'
    });
    event.shaped("chicken_roost:c_lava", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: '#c:buckets/lava',
        B: 'minecraft:feather',
        C: 'chicken_roost:chicken_essence_tier_2'
    });
    event.shaped("chicken_roost:c_certusquartz", [
        "ABA",
        "DCE",
        "AFA"
    ], {
        A: 'ae2:quartz_block',
        B: 'ae2:damaged_budding_quartz',
        C: 'chicken_roost:chicken_essence_tier_5',
        D: 'ae2:chipped_budding_quartz',
        E: 'ae2:flawed_budding_quartz',
        F: 'ae2:flawless_budding_quartz'
    });
});

