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

    // 运转于世界之基的齿轮 gold/gray
    createTooltipItem("world_gear");

    // 立于星坠之地的闪光 gray/darkGray
    createTooltipItem("fallen_star_glow");

    // 铭刻于世界的最强战绩 red/gray
    createTooltipItem("strongest_record");

    // 种植于规则之上的作物 green/gray
    createTooltipItem('rule_crop');

    // 托举于灵魂之中的呐喊 aqua/gray
    createTooltipItem("soul_cry");

    // 逆流于光阴长河之上的寒蜩 gold/gray
    createTooltipItem("time_cicada");

    // 祈求于命星之上的双眼 darkPurple/gray
    createTooltipItem("fate_eyes");

    // 扭曲于数据之中的耄耋 aqua/gray
    createTooltipItem("data_elder");

    // 毁灭于生命之中的幽灵 darkRed/gray
    createTooltipItem("life_ghost");

    // 破碎的世界缩影 */gray
    createTooltipItem("broken_world_fragment");

    // 充盈世界的食物 gold/gray
    createTooltipItem("world_filling_food");

    // 归墟盏 aqua/gray
    createTooltipItem("guixu_chalice");

    // 固道箓 blue/gray
    createTooltipItem("gudao_talisman");

    // 寰宇恒核 white/gray
    createTooltipItem("cosmos_core");

    // 曜辰玑 lightPurple/gray
    createTooltipItem("starlight_orb");

    // 衡垠圭 darkPurple/gray
    createTooltipItem("hengyin_gui");

    // 春秋蝉 gold/gray
    createTooltipItem("chunqiu_cicada");

    // 玄睆璋 darkPurple/gray
    createTooltipItem("xuanhuang_zhang");

    // 纪元璿 aqua/gray
    createTooltipItem("epoch_orb");

    // 生生圭 green/gray
    createTooltipItem("shengsheng_gu");

    // KuDikan */gray
    createTooltipItem("kudikan");

    // 草神 green.gold/gray
    createTooltipItem("grass_god");

    // 混沌透镜
    event.create("ccb:chaos_lens")
        .texture("ccb:item/chaos_lens")
        .rarity("epic")
        .glow(true);

    event.create("ccb:chaotic_space_fragment")
        .texture("ccb:item/chaos_lens");

    event.create("ccb:chaos_prophecy")
        .texture("ccb:item/chaos_lens");

    // 哈气 aqua
    event.create("ccb:haqi");

    // 强化普攻 gold/gray
    createTooltipItem("enhanced_basic_attack");

    // 注册不会消耗的钻们
    global.DRILLS.forEach(key => {
        createTooltipItem(`un_${key}`)
        .rarity("rare")
        .glow(true);
    });
    
    function createTooltipItem(id) {
        if (!id.includes(":")) id = `ccb:${id}`;
        return event.create(id)
            .tooltip(Text.translate(`tooltip.${id.replace(":", ".")}`));
    }
});
