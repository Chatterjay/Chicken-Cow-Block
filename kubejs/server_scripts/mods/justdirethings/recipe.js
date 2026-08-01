ServerEvents.recipes(event =>{
    event.remove({output:'justdirethings:time_crystal_block'})
    event.remove({output:'justdirethings:time_crystal'})
})
ServerEvents.recipes(event =>{
event.shaped('justdirethings:time_crystal_block',[
    "AA",
    "AA"
],{
    A:'justdirethings:time_crystal'
})
event.shaped('4x justdirethings:time_crystal',[
    "A"
],{
    A:'justdirethings:time_crystal_block'
})
});
