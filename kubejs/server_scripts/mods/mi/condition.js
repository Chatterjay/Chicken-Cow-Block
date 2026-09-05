MIRecipeEvents.customCondition(event => {
    event.register(
        'end_coordinates_over_10000',
        (context, recipe) => {
            const machine = context.getBlockEntity()
            const level = machine.getLevel()
            const pos = machine.getBlockPos()

            return level.dimension().location().toString() === 'minecraft:the_end'
                && (Math.abs(pos.getX()) > 10000 || Math.abs(pos.getZ()) > 10000)
        },
        Text.of('必须位于末地，且 X 或 Z 超过 ±10000')
    )
})