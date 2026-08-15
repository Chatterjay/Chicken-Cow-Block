ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('3x minecraft:lightning_rod')
        .itemIn('minecraft:heart_of_the_sea')
        .itemIn('ars_nouveau:air_essence')
        .fluidIn("1000x #c:experience")
        .itemOut('ars_nouveau:glyph_lightning');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('ars_nouveau:glyph_lightning')
        .itemIn('8x minecraft:glass_bottle')
        .itemOut('8x irons_spellbooks:lightning_bottle');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('ars_nouveau:thread_life_drain')
        .itemIn('8x minecraft:glass_bottle')
        .itemOut('8x irons_spellbooks:blood_vial');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('minecraft:potion[potion_contents={potion:"minecraft:water"}]')
        .itemIn('minecraft:gunpowder')
        .itemIn('minecraft:coal')
        .itemOut('irons_spellbooks:common_ink');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('4x irons_spellbooks:common_ink')
        .itemIn(' minecraft:copper_ingot')
        .itemOut('irons_spellbooks:uncommon_ink');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('4x irons_spellbooks:uncommon_ink')
        .itemIn(' minecraft:iron_ingot')
        .itemOut('irons_spellbooks:rare_ink');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('4x irons_spellbooks:rare_ink')
        .itemIn(' minecraft:gold_ingot')
        .itemOut('irons_spellbooks:epic_ink');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('4x irons_spellbooks:epic_ink')
        .itemIn('minecraft:amethyst_shard')
        .itemOut('irons_spellbooks:legendary_ink');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('minecraft:paper')
        .itemIn('#c:dusts/emerald')
        .itemIn('2x #c:dusts/iron')
        .itemIn('mahoutsukai:dagger', 0)
        .fluidIn("1000x irons_spellbooks:blood")
        .itemOut('mahoutsukai:scroll_boundary_drain_life');
    event.recipes.modern_industrialization.magic_chicken(32, 40)
        .itemIn('chicken_roost:c_red')
        .itemIn('8x irons_spellbooks:legendary_ink')
        .itemIn('8x mahoutsukai:scroll_boundary_drain_life')
        .fluidIn("8000x irons_spellbooks:blood")
        .itemOut('chicken_roost:c_blood');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('#c:dusts/emerald')
        .itemIn('#c:dusts/diamond')
        .itemIn('#c:dusts/gold')
        .itemIn('mahoutsukai:dagger', 0)
        .fluidIn("1000x irons_spellbooks:blood")
        .itemOut('mahoutsukai:scroll_gandr');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('#c:dusts/emerald')
        .itemIn('#c:dusts/iron')
        .itemIn('#c:dusts/gold')
        .itemIn('mahoutsukai:dagger', 0)
        .fluidIn("1000x irons_spellbooks:blood")
        .itemOut('mahoutsukai:scroll_geas');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('minecraft:echo_shard')
        .itemIn('minecraft:breeze_rod')
        .fluidIn("1000x minecraft:water")
        .fluidOut('1000x irons_spellbooks:timeless_slurry');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('minecraft:paper')
        .itemIn('mahoutsukai:scroll_geas')
        .itemIn('mahoutsukai:scroll_gandr')
        .itemIn('allthemodium:ancient_soulberries')
        .fluidIn("1000x irons_spellbooks:timeless_slurry")
        .itemOut('irons_spellbooks:ancient_knowledge_fragment');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('2x minecraft:prismarine_shard')
        .itemIn('ars_nouveau:conjuration_essence')
        .itemIn('minecraft:totem_of_undying')
        .fluidIn("1000x #c:experience")
        .itemOut('ars_nouveau:glyph_fangs');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('ars_nouveau:glyph_fangs')
        .itemIn('8x minecraft:blue_ice')
        .itemOut('8x irons_spellbooks:icy_fang');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('irons_spellbooks:icy_fang')
        .fluidIn("1000x minecraft:water")
        .fluidOut('1000x irons_spellbooks:ice_venom');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('irons_spellbooks:arcane_ingot')
        .itemIn('#c:nuggets/steel')
        .fluidIn('100x minecraft:lava')
        .itemOut('apotheosis:common_material');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('2x apotheosis:common_material')
        .itemIn('irons_spellbooks:magic_cloth')
        .fluidIn("100x irons_spellbooks:blood")
        .itemOut('apotheosis:uncommon_material');
     event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('2x apotheosis:uncommon_material')
        .itemIn('irons_spellbooks:mithril_ingot')
        .fluidIn("100x irons_spellbooks:ice_venom")
        .itemOut('apotheosis:rare_material');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('2x apotheosis:rare_material')
        .itemIn('irons_spellbooks:mithril_weave')
        .fluidIn("100x irons_spellbooks:timeless_slurry")
        .itemOut('apotheosis:epic_material');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('2x apotheosis:epic_material')
        .itemIn('4x irons_spellbooks:legendary_ink')
        .itemIn('irons_spellbooks:dragonskin')
        .itemOut('apotheosis:mythic_material');
     event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('apotheosis:salvaging_table',0)
        .itemIn('2x #c:gems')
        .itemOut('apotheosis:gem_dust');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('irons_spellbooks:hogskin')
        .fluidIn('1000x irons_spellbooks:blood')
        .itemOut('irons_spellbooks:bloody_vellum');
});
