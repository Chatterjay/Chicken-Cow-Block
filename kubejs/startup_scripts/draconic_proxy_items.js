// Fixed-stack proxy items for AE crafting. These are intentionally not equipment.
StartupEvents.registry('item', event => {
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

    targets.forEach(id => {
        const texturePath = id === 'creative_op_capacitor'
            ? 'draconicevolution:item/tools/creative_capacitor'
            : `draconicevolution:item/tools/${id}`;

        event.create(`ccb:draconic_proxy_${id}`)
            .texture(texturePath)
            .maxStackSize(64);
    });
});
