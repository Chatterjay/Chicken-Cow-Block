ServerEvents.recipes(event=>{
event.custom(
    {
  "type": "extended_industrialization:canning_machine",
  "duration": 100,
  "eu": 2,
  "item_inputs": [
    {
      "amount": 1,
      "item": 'irons_spellbooks:blood_vial'
    }
  ],
  "item_outputs": [
    {
      "amount": 1,
      "item": 'minecraft:glass_bottle'
    }
  ],
  "fluid_outputs": [
    {
      "amount": 250,
      "fluid": "irons_spellbooks:blood"
    }
  ],
})
})
ServerEvents.recipes(event=>{
event.custom(
    {
  "type": "extended_industrialization:canning_machine",
  "duration": 100,
  "eu": 2,
  "item_inputs": [
    {
      "amount": 1,
      "item": 'minecraft:glass_bottle'
    }
  ],
  "fluid_inputs": [
    {
      "amount": 250,
      "fluid": "irons_spellbooks:ice_venom"
    }
  ],
  "item_outputs": [
    {
      "amount": 1,
      "item": 'irons_spellbooks:ice_venom_vial'
    }
  ],
})
})
ServerEvents.recipes(event=>{
event.custom(
    {
  "type": "extended_industrialization:canning_machine",
  "duration": 100,
  "eu": 2,
  "item_inputs": [
    {
      "amount": 1,
      "item": 'minecraft:glass_bottle'
    }
  ],
  "fluid_inputs": [
    {
      "amount": 250,
      "fluid": "irons_spellbooks:timeless_slurry"
    }
  ],
  "item_outputs": [
    {
      "amount": 1,
      "item": 'irons_spellbooks:timeless_slurry'
    }
  ],
})
    event.recipes.extended_industrialization.canning_machine(32, 20)
        .fluidIn('8000x ccb:fanta_plasma')
        .itemIn('modern_industrialization:quantum_tank')
        .itemOut('ccb:plasma_coke');
    event.recipes.extended_industrialization.canning_machine(32, 20)
        .itemIn('irons_spellbooks:blood_vial')
        .fluidOut('1000x irons_spellbooks:blood')
        .itemOut('minecraft:glass_bottle');
})

