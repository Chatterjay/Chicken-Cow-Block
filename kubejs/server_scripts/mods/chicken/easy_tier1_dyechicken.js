ServerEvents.recipes(event => {
    const colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 
                   'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 
                   'brown', 'green', 'red', 'black'];
    colors.forEach(color => {
        event.shapeless(
            Item.of(`chicken_roost:c_${color}`, 1),
            [
                `chicken_roost:${color}_egg`
            ]
        ).id(`kubejs:${color}_egg_to_${color}_chicken`);
    })

})