
ServerEvents.recipes(event => {
    event.remove({output: 'ifeu:dead_dragon_egg'})
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
})
