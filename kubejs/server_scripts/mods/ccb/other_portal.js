let PortalPlacer = Java.loadClass('net.kyrptonaught.customportalapi.portal.PortalPlacer')
let PortalIgnitionSource = Java.loadClass('net.kyrptonaught.customportalapi.portal.PortalIgnitionSource')
let BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
let ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

const ROOST = 'ccb:nether_roost'
const OFFSETS = [
    [1, 0, 0], [-1, 0, 0],
    [0, 1, 0], [0, -1, 0],
    [0, 0, 1], [0, 0, -1]
]

function soulLavaSource() {
    return PortalIgnitionSource.FluidSource(
        BuiltInRegistries.FLUID.get(ResourceLocation.parse('allthemodium:soul_lava'))
    )
}

function isRoost(block) {
    return String(block.id || '').split('[')[0] === ROOST
}

function tryLightNear(level, origin) {
    const source = soulLavaSource()
    for (let dx = -3; dx <= 3; dx++) {
        for (let dz = -3; dz <= 3; dz++) {
            for (let dy = -1; dy <= 1; dy++) {
                const roost = origin.offset(dx, dy, dz)
                if (!isRoost(roost)) continue
                for (let i = 0; i < OFFSETS.length; i++) {
                    const inner = roost.offset(OFFSETS[i][0], OFFSETS[i][1], OFFSETS[i][2])
                    if (PortalPlacer.attemptPortalLight(level, inner.pos, roost.pos, source)) return true
                }
            }
        }
    }
    return PortalPlacer.attemptPortalLight(level, origin.pos, source)
}

BlockEvents.rightClicked(event => {
    if (event.level.isClientSide()) return
    if (String(event.hand || '') !== 'MAIN_HAND') return
    if (String(event.item.id) !== 'allthemodium:soul_lava_bucket') return
    if (!event.block) return

    const target = event.facing ? event.block.offset(event.facing) : event.block
    if (tryLightNear(event.level, target) || tryLightNear(event.level, event.block)) {
        event.player.tell(Text.of('异界传送门已开启。').darkRed())
        if (!event.player.isCreative()) {
            event.item.count--
            event.player.give('minecraft:bucket')
        }
        event.cancel()
    }
})

BlockEvents.placed(event => {
    if (event.level.isClientSide()) return
    if (String(event.block.id).indexOf('soul_lava') === -1) return
    tryLightNear(event.level, event.block)
})
