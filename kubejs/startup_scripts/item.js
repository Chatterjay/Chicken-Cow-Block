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

    // 充盈世界的食物
    event.create('ccb:world_filling_food')
        .formattedDisplayName(Text.translate('item.ccb.world_filling_food').gold())
        .tooltip(Text.translate('tooltip.ccb.world_filling_food').gray());

    // 归墟盏
    event.create('ccb:guixu_chalice')
        .formattedDisplayName(Text.translate('item.ccb.guixu_chalice').aqua())
        .tooltip(Text.translate('tooltip.ccb.guixu_chalice').gray());

    // 固道箓
    event.create('ccb:gudao_talisman')
        .formattedDisplayName(Text.translate('item.ccb.gudao_talisman').blue())
        .tooltip(Text.translate('tooltip.ccb.gudao_talisman').gray());

    // 寰宇恒核
    event.create('ccb:cosmos_core')
        .formattedDisplayName(Text.translate('item.ccb.cosmos_core').white())
        .tooltip(Text.translate('tooltip.ccb.cosmos_core').gray());

    // 曜辰玑
    event.create('ccb:starlight_orb')
        .formattedDisplayName(Text.translate('item.ccb.starlight_orb').lightPurple())
        .tooltip(Text.translate('tooltip.ccb.starlight_orb').gray());

    // 衡垠圭
    event.create('ccb:hengyin_gui')
        .formattedDisplayName(Text.translate('item.ccb.hengyin_gui').darkPurple())
        .tooltip(Text.translate('tooltip.ccb.hengyin_gui').gray());

    // 春秋蝉
    event.create('ccb:chunqiu_cicada')
        .formattedDisplayName(Text.translate('item.ccb.chunqiu_cicada').gold())
        .tooltip(Text.translate('tooltip.ccb.chunqiu_cicada').gray());

    // 玄睆璋
    event.create('ccb:xuanhuang_zhang')
        .formattedDisplayName(Text.translate('item.ccb.xuanhuang_zhang').darkPurple())
        .tooltip(Text.translate('tooltip.ccb.xuanhuang_zhang').gray());

    // 纪元璿
    event.create('ccb:epoch_orb')
        .formattedDisplayName(Text.translate('item.ccb.epoch_orb').aqua())
        .tooltip(Text.translate('tooltip.ccb.epoch_orb').gray());

    // 生生圭
    event.create('ccb:shengsheng_gu')
        .formattedDisplayName(Text.translate('item.ccb.shengsheng_gu').green())
        .tooltip(Text.translate('tooltip.ccb.shengsheng_gu').gray());

    // KuDikan
    event.create('ccb:kudikan')
        .formattedDisplayName(
            Text.red(Text.literal('K'))
                .append(Text.gold(Text.literal('u')))
                .append(Text.yellow(Text.literal('D')))
                .append(Text.green(Text.literal('i')))
                .append(Text.aqua(Text.literal('k')))
                .append(Text.blue(Text.literal('a')))
                .append(Text.lightPurple(Text.literal('n')))
        )
        .tooltip(Text.translate('tooltip.ccb.kudikan').gray());

    // 草神
    event.create('ccb:grass_god')
        .formattedDisplayName(
            Text.green(Text.literal('草'))
                .append(Text.gold(Text.literal('神')))
        )
        .tooltip(Text.translate('tooltip.ccb.grass_god').gray());
});