ServerEvents.recipes(event=>{
    event.custom(
        {"type":"mekanism:nucleosynthesizing","chemical_input":{"amount":10000,"chemical":"mekanism:antimatter"},"duration":500,"item_input":{"count":1,"item":"chicken_roost:c_neutron"},"output":{"count":1,"id":"chicken_roost:c_antimatter"},"per_tick_usage":false}
    )
})