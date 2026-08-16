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
});