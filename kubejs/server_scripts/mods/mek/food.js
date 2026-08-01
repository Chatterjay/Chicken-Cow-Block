
EntityEvents.afterHurt('minecraft:player', event => {
  event.entity.tell("§4你被烤熟了")
  event.entity.getInventory().add(Item.of("ccb:unique_meat"))
})
