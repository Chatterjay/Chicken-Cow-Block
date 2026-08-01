EntityEvents.afterHurt('minecraft:player', event => {
  if (event.source.getType() == "mekanism.laser" && event.entity.isAlive()) {
    event.entity.tell("§4你被烤熟了");
    event.entity.getInventory().add(Item.of("ccb:unique_meat"));
  }
});
