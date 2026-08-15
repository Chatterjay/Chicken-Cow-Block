
ServerEvents.recipes(event => {

  // ===== 示例 1：爆炸摧毁方块 =====
  // 当 DE 爆炸摧毁 draconium_block 时，掉落 1 个觉醒龙块
  event.custom({
    type: "lychee:draconic_explosion_destroy_block",
    block_in: 'allthecompressed:antimatter_block',
    post: [
      { type: "drop_item", id: 'ccb:strongest_record', count: 1 }
    ]
  })
})
