StartupEvents.registry("block", event => {
    event.create("ccb:life_crystal")
        .soundType("amethyst")
        .hardness(1.5)
        .resistance(1.5)
        .tagBlock("minecraft:mineable/pickaxe");

    event.create("ccb:nether_roost")
        .soundType("nether_wood")
        .hardness(2.0)
        .resistance(2.0)
        .tagBlock("minecraft:mineable/axe");

    event.create("ccb:metastable_annihilation_life")
        .soundType("amethyst")
        .hardness(1.5)
        .resistance(1.5)
        .tagBlock("minecraft:mineable/pickaxe");

    event.create("ccb:fengdu")
        .soundType("nether_wood")
        .hardness(2.0)
        .resistance(6.0)
        .tagBlock("minecraft:mineable/pickaxe");

    event.create("ccb:feijibei")
        .soundType("wool")
        .hardness(0.8)
        .resistance(0.8)
        .tagBlock("minecraft:mineable/axe");
});
