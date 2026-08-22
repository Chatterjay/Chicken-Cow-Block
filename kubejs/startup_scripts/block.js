StartupEvents.registry("block", event => {
    event.create("ccb:life_crystal")
        .soundType("amethyst")
        .hardness(1.5)
        .resistance(1.5)
        .tagBlock("minecraft:mineable/pickaxe");
});
