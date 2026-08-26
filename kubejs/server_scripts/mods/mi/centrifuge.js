ServerEvents.recipes(event => {
    event.remove({id: 'modern_industrialization:materials/centrifuge/mozanite_dust'});
    event.remove({id: 'modern_industrialization:materials/centrifuge/mozanite_tiny_dust'});
    event.recipes.modern_industrialization.centrifuge(32, 800)
        .itemIn('6x chicken_roost:c_ruby')
        .itemOut('chicken_roost:c_chrome');
});
