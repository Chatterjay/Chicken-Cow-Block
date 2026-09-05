ClientEvents.lang('zh_cn', event => {
    const names = {
        wyvern_axe: '神龙之力战斧', wyvern_bow: '神龙之力弓', wyvern_chestpiece: '神龙之力胸甲',
        wyvern_hoe: '神龙之力锄', wyvern_pickaxe: '神龙之力镐', wyvern_shovel: '神龙之力铲', wyvern_sword: '神龙之力剑',
        draconic_axe: '神龙战斧', draconic_bow: '神龙弓', draconic_chestpiece: '神龙胸甲',
        draconic_hoe: '神龙锄', draconic_pickaxe: '神龙镐', draconic_shovel: '神龙铲',
        draconic_staff: '神龙法杖', draconic_sword: '神龙剑',
        chaotic_axe: '混沌战斧', chaotic_bow: '混沌弓', chaotic_chestpiece: '混沌胸甲',
        chaotic_hoe: '混沌锄', chaotic_pickaxe: '混沌镐', chaotic_shovel: '混沌铲',
        chaotic_staff: '混沌法杖', chaotic_sword: '混沌剑',
        wyvern_capacitor: '神龙之力通量容器', draconic_capacitor: '神龙通量容器',
        chaotic_capacitor: '混沌通量容器', creative_capacitor: '创造通量容器',
        creative_op_capacitor: '创造者通量容器'
    };

    Object.entries(names).forEach(([id, name]) => {
        event.add(`item.ccb.draconic_proxy_${id}`, `龙研代理：${name}`);
    });
});
