ServerEvents.recipes(event => {
    const item = id => ({ item: `draconicevolution:${id}` });
    const tag = id => ({ tag: id });
    const consumed = function(ingredient) {
        return { consume: true, ingredient: ingredient };
    };

    const targets = [
        'wyvern_axe', 'wyvern_bow', 'wyvern_chestpiece', 'wyvern_hoe',
        'wyvern_pickaxe', 'wyvern_shovel', 'wyvern_sword',
        'draconic_axe', 'draconic_bow', 'draconic_chestpiece', 'draconic_hoe',
        'draconic_pickaxe', 'draconic_shovel', 'draconic_staff', 'draconic_sword',
        'chaotic_axe', 'chaotic_bow', 'chaotic_chestpiece', 'chaotic_hoe',
        'chaotic_pickaxe', 'chaotic_shovel', 'chaotic_staff', 'chaotic_sword',
        'wyvern_capacitor', 'draconic_capacitor', 'chaotic_capacitor',
        'creative_capacitor', 'creative_op_capacitor'
    ];

    const fusion = (id, catalyst, ingredients, techLevel, totalEnergy) => {
        event.remove({ output: `draconicevolution:${id}` });
        event.remove({ id: `draconicevolution:tools/${id}` });
        event.remove({ id: `draconicevolution:tools/${id}_alt` });
        event.custom({
            type: 'draconicevolution:fusion_crafting',
            catalyst: { item: catalyst.includes(':') ? catalyst : `draconicevolution:${catalyst}` },
            ingredients: ingredients.map(consumed),
            result: { count: 1, id: `ccb:draconic_proxy_${id}` },
            techLevel: techLevel,
            totalEnergy: totalEnergy
        }).id(`ccb:draconic_proxy_fusion_${id}`);
    };

    const basic = [
        item('draconium_core'), tag('c:ingots/draconium'), tag('c:ingots/draconium'),
        item('basic_relay_crystal'), item('wyvern_energy_core'), item('basic_relay_crystal')
    ];
    ['axe', 'bow', 'chestpiece', 'hoe', 'pickaxe', 'shovel', 'sword'].forEach(id => {
        const catalyst = id === 'chestpiece'
            ? 'minecraft:diamond_chestplate'
            : id === 'bow'
                ? 'minecraft:bow'
                : `minecraft:diamond_${id}`;
        fusion(`wyvern_${id}`, catalyst, basic, 'wyvern', 8000000);
    });

    const draconic = [
        tag('c:ingots/netherite'), item('wyvern_core'), tag('c:ingots/netherite'),
        tag('c:ingots/draconium_awakened'), tag('c:ingots/draconium_awakened'),
        tag('c:ingots/netherite'), item('draconic_energy_core'), tag('c:ingots/netherite')
    ];
    ['axe', 'bow', 'chestpiece', 'hoe', 'pickaxe', 'shovel', 'sword'].forEach(id => {
        fusion(`draconic_${id}`, `ccb:draconic_proxy_wyvern_${id}`, draconic, 'draconic', 32000000);
    });
    fusion('draconic_staff', 'awakened_core', [
        tag('c:ingots/draconium_awakened'), item('draconic_pickaxe'),
        tag('c:ingots/draconium_awakened'), tag('c:ingots/draconium_awakened'),
        item('draconic_sword'), item('draconic_shovel'),
        tag('c:ingots/draconium_awakened'), item('draconic_energy_core'),
        tag('c:ingots/draconium_awakened'), tag('c:ingots/draconium_awakened')
    ], 'draconic', 256000000);

    const chaotic = [
        tag('c:ingots/draconium_awakened'), item('chaotic_core'),
        tag('c:ingots/draconium_awakened'), tag('c:ingots/draconium_awakened'),
        tag('c:ingots/draconium_awakened'), tag('c:ingots/draconium_awakened'),
        item('chaotic_energy_core'), tag('c:ingots/draconium_awakened')
    ];
    ['axe', 'bow', 'chestpiece', 'hoe', 'pickaxe', 'shovel', 'sword'].forEach(id => {
        fusion(`chaotic_${id}`, `ccb:draconic_proxy_draconic_${id}`, chaotic, 'chaotic', 128000000);
    });
    fusion('chaotic_staff', 'chaotic_core', [
        item('medium_chaos_frag'), item('chaotic_pickaxe'), item('medium_chaos_frag'),
        item('medium_chaos_frag'), item('chaotic_sword'), item('chaotic_shovel'),
        item('medium_chaos_frag'), item('chaotic_energy_core'), item('medium_chaos_frag'),
        item('medium_chaos_frag')
    ], 'chaotic', 1024000000);

    fusion('wyvern_capacitor', 'wyvern_core', [
        tag('c:ingots/draconium'), item('wyvern_energy_core'), tag('c:ingots/draconium'),
        item('wyvern_energy_core'), item('wyvern_energy_core'), tag('c:ingots/draconium'),
        item('wyvern_energy_core'), tag('c:ingots/draconium')
    ], 'wyvern', 8000000);
    fusion('draconic_capacitor', 'ccb:draconic_proxy_wyvern_capacitor', [
        tag('c:ingots/draconium_awakened'), item('awakened_core'), tag('c:ingots/draconium_awakened'),
        item('draconic_energy_core'), item('draconic_energy_core'), tag('c:ingots/draconium_awakened'),
        item('draconic_energy_core'), tag('c:ingots/draconium_awakened')
    ], 'draconic', 32000000);
    fusion('chaotic_capacitor', 'ccb:draconic_proxy_draconic_capacitor', [
        tag('c:ingots/draconium_awakened'), item('chaotic_core'), tag('c:ingots/draconium_awakened'),
        item('chaotic_energy_core'), item('chaotic_energy_core'), tag('c:ingots/draconium_awakened'),
        item('chaotic_energy_core'), tag('c:ingots/draconium_awakened')
    ], 'chaotic', 128000000);

    // Replace configurable inputs in all other recipes, including addon recipes.
    targets.forEach(id => {
        const original = `draconicevolution:${id}`;
        const proxy = `ccb:draconic_proxy_${id}`;
        event.replaceInput({ input: original }, original, proxy);
    });

    // The proxy is only an AE-safe intermediate; this restores the functional item.
    targets.forEach(id => {
        event.shapeless(`draconicevolution:${id}`, [`ccb:draconic_proxy_${id}`])
            .id(`ccb:draconic_proxy_to_${id}`)
            .group('ccb.draconic_proxy_conversion');
    });

    console.info('[CCB] Registered Draconic Evolution proxy fusion and conversion recipes.');
});
