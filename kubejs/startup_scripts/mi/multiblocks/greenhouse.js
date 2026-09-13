let GREEN_HOUSE;

MIMachineEvents.registerRecipeTypes((event) => {
    GREEN_HOUSE = event.register("greenhouse")
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

function createGreenhouseTier(event, id, soilBlockId, maxBaseEu, multiplier, euCostMultiplier) {
    const hatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
    const soilMember = event.memberOfBlock(soilBlockId);
    const shape = event.layeredShape("green_casing", [
        ["aaaaaaaaaaa", "aaaaaaaaaaa", "bccccdccccb", "bcccccccccb", "bcccccccccb", "bcccccccccb", "bcccccccccb", "bcccccccccb", "bcccccccccb", "bcccccccccb", "bbbbbbbbbbb"],
        ["aaaaaaaaaaa", "aeeeeeeeeea", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "bcccccccccb"],
        ["aaaaaaaaaaa", "aeeeeeeeeea", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "bcccccccccb"],
        ["aaaaaaaaaaa", "aeeeeeeeeea", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "bcccccccccb"],
        ["aaaaaaaaaaa", "aeeeeeeeeea", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "bcccccccccb"],
        ["aaaaaaaaaaa", "aeeeefeeeea", "d         d", "c         c", "c         c", "c         c", "c         c", "c    g    c", "c         c", "c         c", "bcccccccccb"],
        ["aaaaaaaaaaa", "aeeeeeeeeea", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "bcccccccccb"],
        ["aaaaaaaaaaa", "aeeeeeeeeea", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "bcccccccccb"],
        ["aaaaaaaaaaa", "aeeeeeeeeea", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "bcccccccccb"],
        ["aaaaaaaaaaa", "aeeeeeeeeea", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "c         c", "bcccccccccb"],
        ["aaaaaaaaaaa", "aaaaa#aaaaa", "bccccdccccb", "bcccccccccb", "bcccccccccb", "bcccccccccb", "bcccccccccb", "bcccccccccb", "bcccccccccb", "bcccccccccb", "bbbbbbbbbbb"],
    ])
        .key("a", event.memberOfBlock("modern_industrialization:steel_machine_casing"), hatch)
        .key("b", event.memberOfBlock("modern_industrialization:basic_machine_hull"), event.noHatch())
        .key("c", event.memberOfBlock("actuallyadditions:greenhouse_glass"), event.noHatch())
        .key("d", event.memberOfBlock("industrialforegoing:plant_fertilizer"), event.noHatch())
        .key("e", soilMember, event.noHatch())
        .key("f", event.memberOfBlock("minecraft:water"), event.noHatch())
        .key("g", event.memberOfBlock("draconicevolution:celestial_manipulator"), event.noHatch())
        .build();
    return event.createTier(
        id,
        GREEN_HOUSE,
        shape,
        workstations => workstations.add(soilBlockId),
        maxBaseEu,
        multiplier,
        euCostMultiplier
    );
};

MITweaksMachineEvents.registerTieredMultiblocks(event => {
    const t1 = createGreenhouseTier(event, "greenhouse_t1", 'minecraft:farmland', 32, 1, 1);
    const t2 = createGreenhouseTier(event, "greenhouse_t2", 'farmersdelight:rich_soil_farmland', 64, 5, 2);
    const t3 = createGreenhouseTier(event, "greenhouse_t3", 'justdirethings:goosoil_tier1', 128, 25, 3);
    const t4 = createGreenhouseTier(event, "greenhouse_t4", 'justdirethings:goosoil_tier2', 256, 125, 4);
    const t5 = createGreenhouseTier(event, "greenhouse_t5", 'justdirethings:goosoil_tier3', 512, 250, 5);
    const t6 = createGreenhouseTier(event, "greenhouse_t6", 'justdirethings:goosoil_tier4', 1024, 100000, 16);
    event.electricStandalone(
        "Greenhouse", "greenhouse",
        tiers => tiers.add(t1).add(t2).add(t3).add(t4).add(t5).add(t6),
        event.progressBar(77, 33, "arrow"),
        itemInputs => itemInputs.addSlots(56, 35, 1, 2),
        itemOutputs => itemOutputs.addSlots(102, 35, 1, 2),
        fluidInputs => fluidInputs.addSlot(36, 35),
        fluidOutputs => fluidOutputs.addSlot(122, 35),
        "green_casing", "greenhouse", true, false, false
    );
});
