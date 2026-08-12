// server_scripts/worldrecipe.js
// 橡木鸡
PlayerEvents.tick(event => {
    const { player, server } = event;
    // 避免在客户端计算、避免在已标记的玩家上反复判断
    if (player.level.isClientSide()) return;

    // 已经领取过的玩家直接跳过
    if (player.persistentData.getBoolean('void_reward_claimed')) return;

    // 定义虚空高度阈值（可根据需要修改，通常 -64 是1.18+的虚空边界）
    const VOID_Y = -64;

    // 检查玩家 Y 坐标是否低于指定高度
    if (player.y < VOID_Y) {
        // 标记已领取
        player.persistentData.putBoolean('void_reward_claimed', true);

        // 给予奖励物品（可自定义）
        player.give('chicken_roost:c_oakwood');

        // 发送提示消息
        player.tell(Text.of('极致的毁灭，却带来了别样的新生，看来这是唯一的机会！').gold());
    }
});

ServerEvents.recipes(event => {
    // 石英鸡
    event.recipes.lychee.block_crushing(
        BlockPredicateWrapper.ANVIL,
        BlockPredicateWrapper.block("minecraft:quartz_block"),
        SizedIngredientWrapper.of('chicken_roost:c_vanilla'),
        [
            PostBuilder.create().dropItem('chicken_roost:c_quartz')
        ]
    );
    // 下界石英种子
    event.recipes.lychee.block_crushing(
        BlockPredicateWrapper.ANVIL,
        BlockPredicateWrapper.ANY,
        [
            SizedIngredientWrapper.of('chicken_roost:chicken_food_tier_2'),
            SizedIngredientWrapper.of('minecraft:light_gray_dye'),
        ],
        [
            PostBuilder.create().dropItem('ae2cs:nether_quartz_seed')
        ]
    );
    // 红色染料
    event.recipes.lychee.block_interacting(
        [SizedIngredientWrapper.of('#c:seeds')],
        BlockPredicateWrapper.block('minecraft:mangrove_log'),
        [
            PostBuilder.create().dropItem('minecraft:red_dye')
        ]
    );
    // 蓝色染料
    event.recipes.lychee.block_interacting(
        [SizedIngredientWrapper.of('#c:seeds')],
        BlockPredicateWrapper.block('minecraft:spruce_log'),
        [
            PostBuilder.create().dropItem('minecraft:blue_dye')
        ]
    );
    // 橙色染料
    event.recipes.lychee.block_interacting(
        [SizedIngredientWrapper.of('#c:seeds')],
        BlockPredicateWrapper.block('minecraft:acacia_log'),
        [
            PostBuilder.create().dropItem('minecraft:orange_dye')
        ]
    );
    // 黑色染料
    event.recipes.lychee.block_interacting(
        [SizedIngredientWrapper.of('#c:seeds')],
        BlockPredicateWrapper.block('minecraft:dark_oak_log'),
        [
            PostBuilder.create().dropItem('minecraft:black_dye')
        ]
    );
    // 棕色染料
    event.recipes.lychee.block_interacting(
        [SizedIngredientWrapper.of('#c:seeds')],
        BlockPredicateWrapper.block('minecraft:jungle_log'),
        [
            PostBuilder.create().dropItem('minecraft:brown_dye')
        ]
    );
    // 黄色染料
    event.recipes.lychee.block_interacting(
        [SizedIngredientWrapper.of('#c:seeds')],
        BlockPredicateWrapper.block('minecraft:oak_log'),
        [
            PostBuilder.create().dropItem('minecraft:yellow_dye')
        ]
    );
    // 白色染料
    event.recipes.lychee.block_interacting(
        [SizedIngredientWrapper.of('#c:seeds')],
        BlockPredicateWrapper.block('minecraft:birch_log'),
        [
            PostBuilder.create().dropItem('minecraft:white_dye')
        ]
    );
    event.recipes.lychee.block_interacting(
        [SizedIngredientWrapper.of('minecraft:air')],
        BlockPredicateWrapper.block('minecraft:short_grass'),
        [
            PostBuilder.create().dropItem('chicken_roost:chicken_food_tier_1')
        ]
    );
    event.recipes.lychee.block_interacting(
        [SizedIngredientWrapper.of('minecraft:stick')],
        BlockPredicateWrapper.block('minecraft:grass_block'),
        [
             PostBuilder.create().preventDefault(),
            PostBuilder.create().dropItem('minecraft:egg')
        ]
    )
    
});
BlockEvents.rightClicked('chicken_roost:roost', event => {
  if (event.player.isCrouching() && event.item.id == 'minecraft:wooden_sword') {
    event.player.give('minecraft:wheat_seeds')
    event.player.swing()
  }
})
