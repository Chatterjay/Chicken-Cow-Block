// startup_scripts/food.js
StartupEvents.registry('item', event => {
    event.create('ccb:raw_sandwich')
        .food(food => {
            food.nutrition(1)
                .saturation(1)
        });
    event.create('ccb:soul_boom')
        .food(food => {
            food.nutrition(2)
                .saturation(1)
        });
    event.create('ccb:magic_drink')
        .food(food => {
            food.nutrition(4)
                .saturation(1)
                .effect("irons_spellbooks:instant_mana", 1200, 0, 1)
                .effect("ars_nouveau:mana_regen", 1200, 0, 1)
                .fastToEat()
                .usingConvertsTo('minecraft:glass_bottle')
        });
    event.create('ccb:goo_jelly')
        .food(food => {
            food.nutrition(5)
                .saturation(1)
        });
    event.create('ccb:source_soul_fudge')
        .food(food => {
            food.nutrition(4)
                .saturation(1)
                .effect("ars_nouveau:mana_regen", 1200, 4, 1)
        });
    event.create('ccb:singularity_cookie')
        .food(food => {
            food.nutrition(5)
                .saturation(1)
        });
    event.create('ccb:ranbow_matter_fudge')
        .food(food => {
            food.nutrition(2)
                .saturation(1)
        });
    event.create('ccb:crystal_thin_sheet')
        .food(food => {
            food.nutrition(1)
                .saturation(1)
        });
    event.create('ccb:sample_pizza')
        .food(food => {
            food.nutrition(6)
                .saturation(1)
        });
    event.create('ccb:terminal_fried_rice')
        .food(food => {
            food.nutrition(7)
                .saturation(1)
        });
    event.create('ccb:power_drink')
        .food(food => {
            food.nutrition(1)
                .saturation(100)
                .effect("apothic_attributes:bleeding", 12000, 2, 1)
                .effect("minecraft:glowing", 12000, 0, 1)
                .effect("minecraft:health_boost", 12000, 0, 0.001)
                .usingConvertsTo('mekanism:radioactive_waste_barrel')
        });
    event.create('ccb:unique_meat')
        .food(food => {
            food.nutrition(7)
                .saturation(1)
                .effect("ars_nouveau:blasting", 1, 4, 1)
        });
    event.create('ccb:qio_special_toast_bread')
        .food(food => {
            food.nutrition(4)
                .saturation(1)
        });
    event.create('ccb:bacterial_juice_ranbow')
        .food(food => {
            food.nutrition(8)
                .saturation(1)
        });
    event.create('ccb:mineral_processing_molecular_cuisine')
        .food(food => {
            food.nutrition(1)
                .saturation(0)
        });
    event.create('ccb:drangon_rice_bowl')
        .food(food => {
            food.nutrition(10)
                .saturation(1)
        });
    event.create('ccb:drangon_ice_cream')
        .food(food => {
            food.nutrition(4)
                .saturation(1)
        });
    event.create('ccb:roasted_drangon_heart')
        .food(food => {
            food.nutrition(10)
                .saturation(1)
        });
    event.create('ccb:frozen_battery_stick_ice')
        .food(food => {
            food.nutrition(6)
                .saturation(1)
        });
    event.create('ccb:beef_balls')
        .food(food => {
            food.nutrition(8)
                .saturation(1)
                .effect("apothic_attributes:bleeding", 1200, 1, 1)
                .usingConvertsTo('modern_industrialization:ultradense_metal_ball')
        });
    event.create('ccb:atm_vibranium_unobtainium_alloy_ingot')
        .food(food => {
            food.nutrition(10)
                .saturation(10)
        });
    event.create('ccb:pellet_no')
        .food(food => {
            food.nutrition(10)
                .saturation(10)
        });
    event.create('ccb:uranium_radiation')
        .food(food => {
            food.nutrition(10)
                .saturation(10)
        });
    event.create('ccb:delicious_matter')
        .food(food => {
            food.nutrition(10)
                .saturation(10)
        });
    event.create('ccb:star_acid')
        .food(food => {
            food.nutrition(10)
                .saturation(10)
        });
    event.create('ccb:life_water')
        .food(food => {
            food.nutrition(10)
                .saturation(10)
        });
    event.create('ccb:antimatter_soup')
        .food(food => {
            food.nutrition(100)
                .saturation(2)
                .usingConvertsTo('occultism:eldritch_chalice')
        });
    event.create('ccb:uumatter_soup')
        .food(food => {
            food.nutrition(100)
                .saturation(2)
                .usingConvertsTo('occultism:celestial_chalice')
        });
    event.create('ccb:real_soul_boom')
        .food(food => {
            food.nutrition(100)
                .saturation(2)
        });
    event.create('ccb:exhaust_nuclear_waste_sauce')
        .food(food => {
            food.nutrition(100)
                .saturation(2)
        });
    event.create('ccb:plasma_coke')
        .food(food => {
            food.nutrition(100)
                .saturation(2)
        });
    event.create('ccb:aged_dragon_wings')
        .food(food => {
            food.nutrition(100)
                .saturation(2)
        });
    event.create('ccb:world_tree')
        .food(food => {
            food.nutrition(100)
                .saturation(2)
        });
    event.create('ccb:dragon_wings')
        .food(food => {
            food.nutrition(10)
                .saturation(1)
        });
});