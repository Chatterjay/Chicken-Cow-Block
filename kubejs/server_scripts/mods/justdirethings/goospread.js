
ServerEvents.recipes(event => {
    event.remove({output: 'ifeu:dead_dragon_egg'})
    event.remove({id:'pneumaticcraft:thermo_plant/yeast_culture'})
    event.remove({id:'oritech:centrifuge/fluid/compat/pneumaticcraft/yeast'})
})
ServerEvents.recipes(event=>{
    event.custom(
        {
  "type": "justdirethings:goospread",
  "craftingDuration": 2400,
  "id": "ifeu:dead_dragon_egg",
  "input": {
    "Name": "extendedae:mddyue"
  },
  "output": {
    "Name": "ifeu:dead_dragon_egg",
  },
  "tierRequirement": 4
})
 event.custom(
        {
  "type": "justdirethings:goospread",
  "craftingDuration": 2400,
  "id": "pneumaticcraft:yeast_culture",
  "input": {
    "Name": 'industrialforegoing:mycelial_reactor'
  },
  "output": {
    "Name": "pneumaticcraft:yeast_culture",
  },
  "tierRequirement": 4
})
event.custom(
        {
  "type": "justdirethings:goospread",
  "craftingDuration": 2400,
  "id": 'mi_tweaks:time_chicken',
  "input": {
    "Name": 'justdynathings:phase_box'
  },
  "output": {
    "Name": 'mi_tweaks:time_chicken',
  },
  "tierRequirement": 4
})
})
