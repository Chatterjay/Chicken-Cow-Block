ItemEvents.entityInteracted(event => {
    if (event.level.isClientSide()) return;
    if (String(event.hand || "") !== "MAIN_HAND") return;

    if (event.target.type !== "minecraft:chicken") return;
    if (!event.item || event.item.empty) return;

    const chicken = event.target;
    const player = event.player;
    const itemId = String(event.item.id);

    const lockKey = "chicken_conversion_locked";
    if (chicken.persistentData.getBoolean(lockKey)) return;
    chicken.persistentData.putBoolean(lockKey, true);

    const x = chicken.x;
    const y = chicken.y;
    const z = chicken.z;

    function createChicken(chickenType) {
        let newChicken = event.level.createEntity("chicken_roost:" + chickenType);
        newChicken.setPos(x, y, z);
        newChicken.mergeNbt({
            Age: 0,
            Health: 4.0
        });
        newChicken.spawn();
        return newChicken;
    }

    function playSound() {
        event.level.playSound(null, x, y, z, "entity.chicken.ambient", "neutral", 1.0, 1.0);
    }

    function processConversion(outputChicken, item) {
        if (itemId !== item) return false;

        if (!player.isCreative()) {
            event.item.count--;
        }

        chicken.discard();

        createChicken(outputChicken);
        playSound();
        return true;
    }

    for (const {item, outputChicken} of global.CHICKEN_TRANSMUTE_RULES) {
        if (processConversion(outputChicken, item)) {
            return;
        }
    }
    chicken.persistentData.putBoolean(lockKey, false);
});