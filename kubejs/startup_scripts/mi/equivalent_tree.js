let EQUIVALENT_TREE;

MIMachineEvents.registerRecipeTypes(event => {
    EQUIVALENT_TREE = event.registerMixed('equivalent_tree');
});

MIMachineEvents.registerMachines(event => {
    event.craftingSingleBlock(
        'Equivalent Tree',
        'equivalent_tree',
        EQUIVALENT_TREE,
        ['steel'],
        32,
        event.progressBar(70, 33, 'arrow'),
        event.efficiencyBar(92, 33),
        event.energyBar(18, 33),
        1,
        1,
        1,
        0,
        1,
        itemSlots => itemSlots.addSlot(36, 35).addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(56, 35),
        false,
        false,
        false
    );
});
