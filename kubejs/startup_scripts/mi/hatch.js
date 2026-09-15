MIMachineEvents.registerHatches(event => {
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