ItemEvents.modification(event => {
    event.modify('modern_industrialization:giga_parallel_control_hatch', item => {
        item.setItemName(Text.translate('block.modern_industrialization.giga_parallel_control_hatch').lightPurple());
    });
});
