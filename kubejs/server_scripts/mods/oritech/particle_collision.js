ServerEvents.recipes(event =>{
    event.remove({output:'projecte:watch_of_flowing_time'})
    event.remove({output:'projecte:dm_pedestal'})
})
ServerEvents.recipes(event=>{
    event.custom(
{
   "type": "oritech:particle_collision",
  "ingredients": [
    {
      "item": 'data_energistics:data_ripper'
    },
    {
      "item": 'justdynathings:advanced_time_wand'
    }
  ],
  "results": [
    {
      "count": 1,
      "id": 'projecte:watch_of_flowing_time'
    }
  ],
  "time": 100000
})
})
ServerEvents.recipes(event=>{
    event.custom(
{
   "type": "oritech:particle_collision",
  "ingredients": [
    {
      "item": 'projectexpansion:final_star'
    },
    {
      "item": 'projectexpansion:gargantuan_star_omega'
    }
  ],
  "results": [
    {
      "count": 1,
      "id": 'projecte:dm_pedestal'
    }
  ],
  "time": 100000
})
    event.custom(
{
   "type": "oritech:particle_collision",
  "ingredients": [
    {
      "item": 'minecraft:end_portal_frame'
    },
    {
      "item": 'minecraft:end_portal_frame'
    }
  ],
  "results": [
    {
      "count": 1,
      "id": 'oritech:black_hole_block'
    }
  ],
  "time": 15000
})
    event.custom(
{
   "type": "oritech:particle_collision",
  "ingredients": [
    {
      "item": 'oritech:black_hole_block'
    },
    {
      "item": 'ifeu:sacred_rubber_sapling'
    }
  ],
  "results": [
    {
      "count": 1,
      "id": 'ccb:world_tree'
    }
  ],
  "time": 50000
})
})