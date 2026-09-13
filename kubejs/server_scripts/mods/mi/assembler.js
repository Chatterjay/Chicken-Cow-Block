ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.assembler(64, 200)
        .itemIn('extended_industrialization:electric_farmer')
        .itemIn('4x jdte:large_greenhouse')
        .itemIn('4x industrialforegoing:simulated_hydroponic_bed')
        .itemIn('mekmm:ultimate_planting_factory')
        .fluidIn('500x extended_industrialization:npk_fertilizer')
        .itemOut('mi_tweaks:greenhouse');
        event.recipes.modern_industrialization.assembler(64, 200)
        .itemIn('4x modern_industrialization:distillation_tower')
        .itemIn('4x modern_industrialization:chemical_reactor')
        .itemIn('8x modern_industrialization:advanced_pump')
        .itemIn('32x modern_industrialization:digital_circuit')
        .itemOut('mi_tweaks:petrochemical_factory');
        event.recipes.modern_industrialization.assembler(32, 200)
        .itemIn('modern_industrialization:advanced_item_input_hatch')
        .itemIn('advanced_ae:stock_export_bus_part')
        .itemIn('extendedae:oversize_interface')
        .itemIn('8x ae2:engineering_processor')
        .itemOut('mi_ae_addon:me_stocking_item_input_hatch');
        event.recipes.modern_industrialization.assembler(32, 200)
        .itemIn('modern_industrialization:advanced_fluid_input_hatch')
        .itemIn('extendedae:ex_export_bus_part')
        .itemIn('extendedae:oversize_interface')
        .itemIn('8x ae2:engineering_processor')
        .itemOut('mi_ae_addon:me_stocking_fluid_input_hatch');
        event.recipes.modern_industrialization.assembler(32, 200)
        .itemIn('mi_ae_addon:me_stocking_item_input_hatch')
        .itemIn('mi_ae_addon:me_stocking_fluid_input_hatch')
        .itemIn('16x ae2:engineering_processor')
        .itemIn('extendedae:mod_storage_bus')
        .itemOut('mi_ae_addon:me_stocking_output_input_assembly');
        event.recipes.modern_industrialization.assembler(32, 200)
        .itemIn('modern_industrialization:advanced_ex_item_fluid_output_hatch')
        .itemIn('advanced_ae:import_export_bus_part')
        .itemIn('extendedae:oversize_interface')
        .itemIn('16x ae2:engineering_processor')
        .itemOut('mi_ae_addon:me_output_assembly');
        event.recipes.modern_industrialization.assembler(32, 200)
        .itemIn('modern_mekanistics:advanced_chemical_input_hatch')
        .itemIn('mekanism:ultimate_chemical_tank')
        .itemIn('extendedae:oversize_interface')
        .itemIn('8x ae2:engineering_processor')
        .itemOut('mi_ae_addon:me_stocking_chemical_input_hatch');

        event.shaped('modern_mekanistics:bronze_chemical_input_hatch', [
            'U',
            'V'
        ], {
            U: 'modern_industrialization:bronze_machine_casing',
            V: 'mekanism:basic_chemical_tank'
        });

        event.shaped('modern_mekanistics:steel_chemical_input_hatch', ['U', 'V'], {
            U: 'modern_industrialization:steel_machine_casing',
            V: 'mekanism:advanced_chemical_tank'
        });
        event.shaped('modern_mekanistics:advanced_chemical_input_hatch', ['U', 'V'], {
            U: 'modern_industrialization:advanced_machine_hull',
            V: 'mekanism:elite_chemical_tank'
        });
        event.shaped('modern_mekanistics:turbo_chemical_input_hatch', ['U', 'V'], {
            U: 'modern_industrialization:turbo_machine_hull',
            V: 'mekanism:ultimate_chemical_tank'
        });
        event.shaped('modern_mekanistics:highly_advanced_chemical_input_hatch', ['U', 'V'], {
            U: 'modern_industrialization:highly_advanced_machine_hull',
            V: 'mekanism_extras:absolute_chemical_tank'
        });

        event.shaped('modern_mekanistics:bronze_chemical_output_hatch', ['U', 'V'], {
            U: 'mekanism:basic_chemical_tank',
            V: 'modern_industrialization:bronze_machine_casing'
        });
        event.shaped('modern_mekanistics:steel_chemical_output_hatch', ['U', 'V'], {
            U: 'mekanism:advanced_chemical_tank',
            V: 'modern_industrialization:steel_machine_casing'
        });
        event.shaped('modern_mekanistics:advanced_chemical_output_hatch', ['U', 'V'], {
            U: 'mekanism:elite_chemical_tank',
            V: 'modern_industrialization:advanced_machine_hull'
        });
        event.shaped('modern_mekanistics:turbo_chemical_output_hatch', ['U', 'V'], {
            U: 'mekanism:ultimate_chemical_tank',
            V: 'modern_industrialization:turbo_machine_hull'
        });
        event.shaped('modern_mekanistics:highly_advanced_chemical_output_hatch', ['U', 'V'], {
            U: 'mekanism_extras:absolute_chemical_tank',
            V: 'modern_industrialization:highly_advanced_machine_hull'
        });

        const chemicalHatchConversions = [
            'bronze',
            'steel',
            'advanced',
            'turbo',
            'highly_advanced'
        ];

        chemicalHatchConversions.forEach(tier => {
            event.shapeless(`modern_mekanistics:${tier}_chemical_output_hatch`, [
                `modern_mekanistics:${tier}_chemical_input_hatch`
            ]);
            event.shapeless(`modern_mekanistics:${tier}_chemical_input_hatch`, [
                `modern_mekanistics:${tier}_chemical_output_hatch`
            ]);
        });

});
