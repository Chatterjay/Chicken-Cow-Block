const SINGULARITIES = [
    {
        id: 'biofuel',
        colors: [0x65a30d, 0x4d7c0f],
        ingredient: 'industrialforegoing:biofuel_bucket'
    },
    {
        id: 'crude_oil',
        colors: [0x1c1917, 0x292524],
        ingredient: 'modern_industrialization:crude_oil_bucket'
    },
    {
        id: 'cryofluid',
        colors: [0x38bdf8, 0x0ea5e9],
        ingredient: 'modern_industrialization:cryofluid_bucket'
    },
    {
        id: 'cryotheum_solution',
        colors: [0x06b6d4, 0x0891b2],
        ingredient: 'neoecoae:cryotheum_solution_bucket'
    },
    {
        id: 'data_corrosion_liquid',
        colors: [0x166534, 0x052e16],
        ingredient: 'data_energistics:data_corrosion_liquid_bucket'
    },
    {
        id: 'deuterium',
        colors: [0x67e8f9, 0x22d3ee],
        ingredient: 'modern_industrialization:deuterium_bucket'
    },
    {
        id: 'dragon_star_essence',
        colors: [0xfbbf24, 0xf59e0b],
        ingredient: 'ifeu:dragon_star_essence_bucket'
    },
    {
        id: 'ender',
        colors: [0x7c3aed, 0x6d28d9],
        ingredient: 'data_energistics:ender_bucket'
    },
    {
        id: 'end_fluid',
        colors: [0xde62c8, 0xb040a6],
        ingredient: 'hostilenetworks:end_prediction'
    },
    {
        id: 'ether_gas',
        colors: [0x22d3ee, 0x06b6d4],
        ingredient: 'industrialforegoing:ether_gas_bucket'
    },
    {
        id: 'fusion_fuel',
        colors: [0xef4444, 0xf97316],
        ingredient: 'mekanismgenerators:fusion_fuel_bucket'
    },
    {
        id: 'helium_plasma',
        colors: [0xf472b6, 0xc084fc],
        ingredient: 'modern_industrialization:helium_plasma_bucket'
    },
    {
        id: 'latex',
        colors: [0xf5f5f4, 0xe7e5e4],
        ingredient: 'industrialforegoing:latex_bucket'
    },
    {
        id: 'life_fluid_source',
        colors: [0xef4444, 0xb91c1c],
        ingredient: 'jdte:life_fluid_bucket'
    },
    {
        id: 'lava',
        colors: [0xef4444, 0xf97316],
        ingredient: 'minecraft:lava_bucket'
    },
    {
        id: 'liquid_air',
        colors: [0x93c5fd, 0xbfdbfe],
        ingredient: 'modern_industrialization:liquid_air_bucket'
    },
    {
        id: 'liquid_dragon_breath',
        colors: [0xd946ef, 0xc026d3],
        ingredient: 'ifeu:liquid_dragon_breath_bucket'
    },
    {
        id: 'liquid_malic_acid',
        colors: [0x86efac, 0x4ade80],
        ingredient: 'ifeu:liquid_malic_acid_bucket'
    },
    {
        id: 'lubricant',
        colors: [0xfbbf24, 0xf59e0b],
        ingredient: 'modern_industrialization:lubricant_bucket'
    },
    {
        id: 'milk',
        colors: [0xf5f5f4, 0xe7e5e4],
        ingredient: 'minecraft:milk_bucket'
    },
    {
        id: 'molten_allthemodium',
        colors: [0xfbbf24, 0xf59e0b],
        ingredient: 'allthemodium:molten_allthemodium_bucket'
    },
    {
        id: 'molten_unobtainium',
        colors: [0x6366f1, 0x4f46e5],
        ingredient: 'allthemodium:molten_unobtainium_bucket'
    },
    {
        id: 'molten_vibranium',
        colors: [0xa855f7, 0x7c3aed],
        ingredient: 'allthemodium:molten_vibranium_bucket'
    },
    {
        id: 'nether_fluid',
        colors: [0xd6753a, 0xa8531f],
        ingredient: 'hostilenetworks:nether_prediction'
    },
    {
        id: 'npk_fertilizer',
        colors: [0x84cc16, 0x65a30d],
        ingredient: 'extended_industrialization:npk_fertilizer_bucket'
    },
    {
        id: 'overworld_fluid',
        colors: [0x5faeb1, 0x2e8b8e],
        ingredient: 'hostilenetworks:overworld_prediction'
    },
    {
        id: 'pink_slime',
        colors: [0xf472b6, 0xe879f9],
        ingredient: 'industrialforegoing:pink_slime_bucket'
    },
    {
        id: 'polytetrafluoroethylene',
        colors: [0xf5f5f4, 0xa8a29e],
        ingredient: 'smfcore:polytetrafluoroethylene_bucket'
    },
    {
        id: 'polonium_containing_solution',
        colors: [0x4ade80, 0x22c55e],
        ingredient: 'mekanism_extras:polonium_containing_solution_bucket'
    },
    {
        id: 'polymorphic_fluid_source',
        colors: [0xec4899, 0xdb2777],
        ingredient: 'justdirethings:polymorphic_fluid_bucket'
    },
    {
        id: 'sewage',
        colors: [0x78716c, 0x57534e],
        ingredient: 'industrialforegoing:sewage_bucket'
    },
    {
        id: 'sludge',
        colors: [0x44403c, 0x292524],
        ingredient: 'industrialforegoing:sludge_bucket'
    },
    {
        id: 'sodium',
        colors: [0x78716c, 0x57534e],
        ingredient: 'mekanism:sodium_bucket'
    },
    {
        id: 'soul_lava',
        colors: [0x7c3aed, 0xea580c],
        ingredient: 'allthemodium:soul_lava_bucket'
    },
    {
        id: 'source_fluid',
        colors: [0xa78bfa, 0x8b5cf6],
        ingredient: 'sauce:source_fluid_bucket'
    },
    {
        id: 'spirit_solution',
        colors: [0xc084fc, 0xa855f7],
        ingredient: 'occultengineering:spirit_solution_bucket'
    },
    {
        id: 'still_molten_fluxite',
        colors: [0xf97316, 0xea580c],
        ingredient: 'oritech:still_molten_fluxite_bucket'
    },
    {
        id: 'sulfuric_acid',
        colors: [0xeab308, 0xca8a04],
        ingredient: 'mekanism:sulfuric_acid_bucket'
    },
    {
        id: 'superheated_sodium',
        colors: [0xf97316, 0xea580c],
        ingredient: 'mekanism:superheated_sodium_bucket'
    },
    {
        id: 'time_fluid_source',
        colors: [0x619d49, 0x89e565],
        ingredient: 'justdirethings:time_fluid_bucket'
    },
    {
        id: 'tritium',
        colors: [0x93c5fd, 0x818cf8],
        ingredient: 'modern_industrialization:tritium_bucket'
    },
    {
        id: 'uu_matter',
        colors: [0xc084fc, 0xa855f7],
        ingredient: 'modern_industrialization:uu_matter_bucket'
    },
    {
        id: 'water',
        colors: [0x3b82f6, 0x60a5fa],
        ingredient: 'minecraft:water_bucket'
    },
];

AvaritiaEvents.singularity(event => {
    SINGULARITIES.forEach(s => {
        event.register(`avaritia:${s.id}_singularity`, builder => {
            builder.setDisplayName(`singularity.avaritia.${s.id}`)
                .setColors(s.colors[0], s.colors[1])
                .setIngredient(Ingredient.of(s.ingredient))
                .setEnabled(true)
                .setRecipeDisabled(true);
        });
    });
});
