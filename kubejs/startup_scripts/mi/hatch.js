MIRegistrationEvents.registerCableTiers(event => {
    event.register(
        "ultimate",
        "UV",
        "Ultimate Voltage",
        15333333333333333,
        "extendedcrafting:the_ultimate_block"
    );
});

MIMachineEvents.registerHatches(event => {
    event.energy("ultimate");

    event.fluid(
        "Quantum",
        "quantum",
        "quan_casing",
        2147283647,
    );

    event.parallel("Giga", "giga", "quan_casing", 2100000000);

    event.roostSpeed("Time Crystal", "time_crystal", "time_crystal_casing", 4.0);
    event.roostSpeed("Ultimate", "ultimate", "ultimate_core_casing", 8.0);
    event.roostSpeed("Feijibei", "feijibei", "feijibei_casing", 16.0);
});

ModernMekMachineEvents.registerChemicalHatches(event => {
    const Consumer = Java.loadClass('java.util.function.Consumer');
    event['itemFluidChemical(java.lang.String,java.lang.String,java.lang.String,long,long,java.util.function.Consumer,java.util.function.Consumer,java.util.function.Consumer)'](
        "milk_chicken_steak_ex",
        "Milk Chicken Steak",
        "data_casing",
        64000,
        64000,
        new Consumer(items => items.addSlots(16, 20, 3, 3)),
        new Consumer(fluids => fluids.addSlots(80, 20, 1, 4)),
        new Consumer(chemicals => chemicals.addSlots(116, 20, 1, 4))
    );
});
