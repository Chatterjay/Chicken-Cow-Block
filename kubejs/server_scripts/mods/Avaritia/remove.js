ServerEvents.recipes(event =>{
    event.remove({id:'avaritia:ultimate_stew'})
    event.remove({id:'avaritia:cosmic_meatballs'})
    event.remove({id:'avaritia:infinity_catalyst_eternal'})
    event.remove({output:'avaritia:eternal_singularity'})

    event.forEachRecipe({ type: 'avaritia:shaped_table' }, recipe => {
        const json = JSON.parse(recipe.json)
        const result = json.result || {}
        const components = result.components || {}
        const customData = components['minecraft:custom_data'] || {}

        if ((result.id && result.id.includes('creative')) || customData.creative === true) {
            event.remove({ id: recipe.getId() })
        }
    })
})
