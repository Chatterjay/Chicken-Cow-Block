ServerEvents.recipes(event => {
    event.remove({ output: 'ccb_core:natural_lightning_spawner' });
    event.smithing('ccb_core:natural_lightning_spawner',
        'irons_spellbooks:lightning_bottle', 'minecraft:trident', 'powah:charged_snowball');
        event.smithing('allthemodium:allthemodium_upgrade_smithing_template',
        'constructionstick:template_unbreakable', 'minecraft:netherite_upgrade_smithing_template', 'apotheosis:diamond_upgrade_smithing_template');
    event.shaped('ccb:mi_prediction_matrix',[
    "AE ",
    "BCB",
    " ED"
],{
    A:'immersiveengineering:ingot_aluminum',
    B:'modern_industrialization:analog_circuit_board',
    C:'hostilenetworks:prediction_matrix',
    D:'minecraft:copper_ingot',
    E:'immersiveengineering:slag_glass'
})
    event.shapeless('ccb:broken_world_fragment', [
        'ccb:world_gear',
        'ccb:fallen_star_glow',
        'ccb:strongest_record',
        'ccb:rule_crop',
        'ccb:soul_cry',
        'ccb:time_cicada',
        'ccb:fate_eyes',
        'ccb:data_elder',
        'ccb:life_ghost'
    ]);
    const catPrediction = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:minecraft/cat"]';
    event.shaped('ccb:haqi', [
        "AAA",
        "AAA",
        "AAA"
    ], {
        A: catPrediction
    });
    const chaosGuardianPrediction = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:draconicevolution/draconic_guardian"]';
    event.shaped('ccb:chaos_prophecy', [
        "AAA",
        "AAA",
        "AAA"
    ], {
        A: chaosGuardianPrediction
    });
    event.shapeless('ccb:enhanced_basic_attack', [
        'ccb:haqi',
        'ccb:haqi',
        'ccb:haqi'
    ]);
    event.shaped('ccb:gudao_talisman', [
        "ABC",
        "DEF",
        "GHI"
    ], {
        A: 'modern_industrialization:quantum_helmet',
        B: 'ccb:world_gear',
        C: 'extended_industrialization:nano_quantum_helmet',
        D: 'modern_industrialization:quantum_chestplate',
        E: 'modern_industrialization:quantum_boots',
        F: 'extended_industrialization:nano_quantum_chestplate',
        G: 'modern_industrialization:quantum_leggings',
        H: 'extended_industrialization:nano_quantum_boots',
        I: 'extended_industrialization:nano_quantum_leggings'  
    });
    event.shaped('2x ccb:data_elder', [
        "ABA"
    ], {
        A: 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:enhanced_basic_attack"]',
        B: 'ccb:data_elder'
    });
    event.shaped('2x ccb:soul_cry', [
        "ABA"
    ], {
        A: 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:divine_soulshard"]',
        B: 'ccb:soul_cry'
    });
    event.shaped('2x ccb:chaotic_space_fragment', [
        " A ",
        "ABA",
        " A "
    ], {
        A: 'draconicevolution:small_chaos_frag',
        B: 'ccb:chaotic_space_fragment'
    });
    event.shaped('ccb:cow_bucket', [
        "CAC",
        "ABA",
        "CAC"
    ], {
        A: 'ae2:sky_stone_tank',
        B: 'enderio:drain',
        C:'modern_industrialization:steel_tank'
    });
    event.custom({
        type: 'extendedcrafting:combination',
        input: {
            item: 'allthecompressed:nether_star_block_6x'
        },
        ingredients: [
            { item:'avaritia:infinity_totem' },
            { item: 'ccb:life_crystal' },
            { item: 'apotheosis:initial_health_spawner_rune' },
            {
                type: 'neoforge:components',
                items: 'avaritia:singularity',
                components: {
                    'avaritia:singularity_id': 'avaritia:life_fluid_source_singularity'
                }
            }
        ],
        result: {
            id: 'ccb:metastable_annihilation_life'
        },
        power_cost: 100000
    }).id('ccb:combination/metastable_annihilation_life');
});
