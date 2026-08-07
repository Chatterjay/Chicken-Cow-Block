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
});