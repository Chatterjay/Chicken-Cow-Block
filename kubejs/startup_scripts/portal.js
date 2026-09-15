let $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
let CustomPortalBuilder = Java.loadClass('net.kyrptonaught.customportalapi.api.CustomPortalBuilder')
let BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')

StartupEvents.postInit(() => {
    try {
        let fluid = BuiltInRegistries.FLUID.get($ResourceLocation.parse('allthemodium:soul_lava'))
        CustomPortalBuilder.beginPortal()
            ['frameBlock(net.minecraft.resources.ResourceLocation)']($ResourceLocation.parse('ccb:nether_roost'))
            .destDimID($ResourceLocation.parse('allthemodium:the_other'))
            ['lightWithFluid(net.minecraft.world.level.material.Fluid)'](fluid)
            .tintColor(90, 20, 20)
            .flatPortal()
            .forcedSize(2, 2)
            .registerPortal()
        console.info('[CCB] nether roost portal registered')
    } catch (e) {
        console.error('[CCB] portal register failed: ' + e)
    }
})
