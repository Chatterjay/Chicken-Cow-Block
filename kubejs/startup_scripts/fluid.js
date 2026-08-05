StartupEvents.registry("fluid", event => {
    event.create('ccb:uu_amplitude', 'thin')
        .displayName('uu增幅液')
        .tint(0xeca4dd)
        .noBlock();
    event.create('ccb:overworld_fluid', 'thin')
        .displayName('主世界流体')
        .tint(0x5faeb1)
        .noBlock()
        .noBucket();
     event.create('ccb:nether_fluid', 'thick')
        .displayName('下界流体')
        .tint(0xd6753a)
        .noBlock()
        .noBucket();
    event.create('ccb:end_fluid', 'thin')
        .displayName('末地流体')
        .tint(0xde62c8)
        .noBlock()
        .noBucket();
});
MIRegistrationEvents.registerFluids(event => {
    event.register(
        "Fanta Plasma", "fanta_plasma", // English name and internal name
        0xe59d12, 
        "steam", // Steam-like texture
        true, // true for upside down
        "low", // medium transparency
    );
});