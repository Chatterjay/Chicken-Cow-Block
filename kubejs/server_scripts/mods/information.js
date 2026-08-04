RecipeViewerEvents.addInformation("item", event => {
    event.add('chicken_roost:c_oakwood', [
        "当你第一次跳入虚空时，你将会获得它，后续可通过合成获得。"
    ]);

    global.COW_TRANSMUTE_RULES.forEach(rule => {
        const {item, fluid} = rule;

        const spawnEggId = `fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="${fluid}"]`;
        const itemName = Item.of(item).getDisplayName().getString() || item;
        const fluidName = Fluid.of(fluid).getDisplayName().getString() || fluid;

        event.add(spawnEggId, [
            `使用 §6${itemName}§r 右键普通牛，可将其转化为 §b${fluidName}§r 流体牛。`
        ]);
    });
});

RecipeViewerEvents.addInformation("fluid", event => {
    global.COW_TRANSMUTE_RULES.forEach(rule => {
        const {item, fluid} = rule;
        const itemName = Item.of(item).getDisplayName().getString() || item;
        const fluidName = Fluid.of(fluid).getDisplayName().getString() || fluid;

        event.add(fluid, [
            `使用 §6${itemName}§r 右键普通牛，可将其转化为 §b${fluidName}§r 流体牛。`
        ]);
    });
});