ServerEvents.recipes(event =>{
    event.remove({output:'moofluids:fluid_cow_spawn_egg'})
    event.remove({output:'enderio:powered_spawner'})
    event.remove({id:'minecraft:end_portal_frame'})
    event.remove({id:'avaritia:ultimate_stew'})
    event.remove({id:'avaritia:cosmic_meatballs'})
})