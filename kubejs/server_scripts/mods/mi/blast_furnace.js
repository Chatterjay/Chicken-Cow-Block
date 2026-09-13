ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.blast_furnace(32, 1500)
        .itemIn('draconicevolution:dragon_heart')
        .itemIn('64x draconicevolution:infused_obsidian')
        .fluidIn('1145x modern_industrialization:argon')
        .itemOut('ccb:roasted_drangon_heart')
})
