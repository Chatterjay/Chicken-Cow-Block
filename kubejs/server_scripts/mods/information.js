RecipeViewerEvents.addInformation("item", event => {
    event.add('chicken_roost:c_oakwood', [
        "当你第一次跳入虚空时，你将会获得它，后续可通过合成获得。"
    ]);
     event.add('chicken_roost:c_feather', [
        "当你杀死一只原版鸡的时候，有概率生成一只羽毛鸡。"
    ]);
    event.add('#ars_nouveau:shady_wizard_fruits', [
        "这些果实可以分别通过对应的空岛构筑之板获得或者选择至高木森林造林之板一次性获得所有果实。"
    ]);
    event.add('ccb:chaotic_space_fragment', [
        "当混沌守卫处于空间塔维度受到龙堆的爆炸伤害时，它会掉落混沌空间碎片。"
    ]);
    event.add('ae2lt:tianshu_supercomputer_controller', [
        "该物品无法制作，只能使用天枢矩阵之板召唤"
    ]);
    event.add('ae2lt:matter_warping_matrix_controller', [
        "该物品无法制作，只能使用天枢矩阵之板召唤"
    ]);
    event.add('data_energistics:trinity_data_core', [
        "该物品无法制作，只能使用三位一体数据核心之板召唤"
    ]);
    event.add('advanced_ae:quantum_core', [
        "该物品无法制作，只能使用超级装配矩阵之板召唤"
    ]);

    global.COW_TRANSMUTE_RULES.forEach(rule => {
        const {item, fluid} = rule;

        const spawnEggId = `fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="${fluid}"]`;
        const itemName = Item.of(item).getDisplayName().getString() || item;
        const fluidName = Fluid.of(fluid).getDisplayName().getString() || fluid;

        event.add([spawnEggId, item], [
            `使用 §6${itemName}§r 右键普通牛，可将其转化为 §b${fluidName}§r 流体牛。`
        ]);
    });

    global.CHICKEN_TRANSMUTE_RULES.forEach(rule => {
        const {item, outputChicken} = rule;

        const itemName = Item.of(item).getDisplayName().getString() || item;
        const chickenName = Item.of(`chicken_roost:${outputChicken}`).getDisplayName().getString() || outputChicken;

        event.add([`chicken_roost:${outputChicken}`, item], [
            `使用 §6${itemName}§r 右键普通鸡，可将其转化为 §b${chickenName}§r。`
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