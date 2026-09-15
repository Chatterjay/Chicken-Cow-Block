const CHICKEN_VOID = 'ccb:chicken_void'
const BRAZIER = 'ars_nouveau:ritual_brazier'

BlockEvents.rightClicked(BRAZIER, event => {
    if (event.level.isClientSide()) return
    if (String(event.hand || '') !== 'MAIN_HAND') return
    if (!event.player.isCrouching()) return
    if (!event.item.empty) return

    const player = event.player
    const from = String(event.level.dimension)
    const yaw = player.yaw
    const pitch = player.pitch

    if (from === CHICKEN_VOID) {
        const x = player.persistentData.contains('ccb_brazier_x') ? player.persistentData.getDouble('ccb_brazier_x') : 0.5
        const y = player.persistentData.contains('ccb_brazier_y') ? player.persistentData.getDouble('ccb_brazier_y') : 80
        const z = player.persistentData.contains('ccb_brazier_z') ? player.persistentData.getDouble('ccb_brazier_z') : 0.5
        const dim = player.persistentData.contains('ccb_brazier_dim') ? player.persistentData.getString('ccb_brazier_dim') : 'minecraft:overworld'
        player.teleportTo(dim, x, y, z, yaw, pitch)
        player.tell(Text.of('你从基岩层归来。').gray())
    } else {
        player.persistentData.putString('ccb_brazier_dim', from)
        player.persistentData.putDouble('ccb_brazier_x', player.x)
        player.persistentData.putDouble('ccb_brazier_y', player.y)
        player.persistentData.putDouble('ccb_brazier_z', player.z)
        if (!player.teleportTo(CHICKEN_VOID, 0.5, 6, 0.5, yaw, pitch)) {
            player.tell(Text.of('基岩层未能接通。').red())
            return
        }
        player.tell(Text.of('你坠入鸡基岩层。').darkGray())
    }

    event.cancel()
})
