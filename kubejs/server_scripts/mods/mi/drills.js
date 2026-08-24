// priority: -10

ServerEvents.recipes(event => {
    [
        'modern_industrialization:quarry',
        'modern_industrialization:oil_drilling_rig'
    ].forEach(type => {
        event.forEachRecipe({ type: type }, recipe => {
            const newJson = JSON.parse(recipe.json);
            let item_inputs = newJson.item_inputs;

            if (item_inputs && item_inputs.probability > 0.0 && item_inputs.probability < 1.0) {
                let item = item_inputs.item.split(":")[1];
                if (!global.DRILLS.includes(item)) return;
                item_inputs.item = `ccb:un_${item}`;   // 替换物品
                item_inputs.probability = 0.0;
            }
            
            event.custom(newJson).id(recipe.getId() + '_unconsumed');
        });
    });

    global.DRILLS.forEach(key => {
        const base = key === 'digital_miner'
            ? 'mekanism:digital_miner'
            : `modern_industrialization:${key}`;
        event.smithing(
            `ccb:un_${key}`,
            'smfcore:adamantine_upgrade_smithing_template',
            base,
            'smfcore:adamantine_ingot'
        );
    });
});