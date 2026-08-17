StartupEvents.registry("item", event => {
    event.create("ccb:incomplete_end_portal_frame");
    event.create("ccb:cow_bucket");
    event.create("ccb:mi_prediction_matrix");

    // ME Infinity Cell
    // 无限熔岩元件
    event.create('lava_cell', 'custom_infinity_cell')
        .texture('ccb:item/lava_cell')
        .fluidType('minecraft:lava')
        .cellModel('ccb:block/drive/lava_cell');

    // 世界齿轮
    event.create('ccb:world_gear')
        .formattedDisplayName(Text.translate('item.ccb.world_gear').gold())
        .tooltip(Text.translate('tooltip.ccb.world_gear').gray());

    // 坠于星坠之地的闪光
    event.create('ccb:fallen_star_glow')
        .formattedDisplayName(Text.translate('item.ccb.fallen_star_glow').gray())
        .tooltip(Text.translate('tooltip.ccb.fallen_star_glow').darkGray());

    // 铭刻于世界的最强战绩
    event.create('ccb:strongest_record')
        .formattedDisplayName(Text.translate('item.ccb.strongest_record').red())
        .tooltip(Text.translate('tooltip.ccb.strongest_record').gray());

    // 种植于规则之上的作物
    event.create('ccb:rule_crop')
        .formattedDisplayName(Text.translate('item.ccb.rule_crop').green())
        .tooltip(Text.translate('tooltip.ccb.rule_crop').gray());

    // 托举于灵魂之中的呐喊
    event.create('ccb:soul_cry')
        .formattedDisplayName(Text.translate('item.ccb.soul_cry').aqua())
        .tooltip(Text.translate('tooltip.ccb.soul_cry').gray());

    // 逆流于光阴长河之上的寒蜩
    event.create('ccb:time_cicada')
        .formattedDisplayName(Text.translate('item.ccb.time_cicada').gold())
        .tooltip(Text.translate('tooltip.ccb.time_cicada').gray());

    // 祈求于命星之上的双眼
    event.create('ccb:fate_eyes')
        .formattedDisplayName(Text.translate('item.ccb.fate_eyes').darkPurple())
        .tooltip(Text.translate('tooltip.ccb.fate_eyes').gray());

    // 扭曲于数据之中的耄耋
    event.create('ccb:data_elder')
        .formattedDisplayName(Text.translate('item.ccb.data_elder').aqua())
        .tooltip(Text.translate('tooltip.ccb.data_elder').gray());

    // 毁灭于生命之中的幽灵
    event.create('ccb:life_ghost')
        .formattedDisplayName(Text.translate('item.ccb.life_ghost').darkRed())
        .tooltip(Text.translate('tooltip.ccb.life_ghost').gray());

    // 破碎的世界缩影
    event.create('ccb:broken_world_fragment')
        .formattedDisplayName(
            Text.red(Text.literal('破'))
                .append(Text.gold(Text.literal('碎')))
                .append(Text.yellow(Text.literal('的')))
                .append(Text.green(Text.literal('世')))
                .append(Text.aqua(Text.literal('界')))
                .append(Text.blue(Text.literal('缩')))
                .append(Text.lightPurple(Text.literal('影')))
        )
        .tooltip(Text.translate('tooltip.ccb.broken_world_fragment').gray());
});