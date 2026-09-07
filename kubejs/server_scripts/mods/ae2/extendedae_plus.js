ServerEvents.recipes(event => {
    event.remove({ output: 'extendedae_plus:storage_core' });
    event.remove({ output: 'extendedae_plus:energy_storage_core' });
    event.remove({ output: 'extendedae_plus:quantum_storage_core' });
    event.remove({ output: 'extendedae_plus:spatial_core' });
    event.remove({ output: 'advanced_ae:quantum_core' });
    event.remove({ output: 'data_energistics:trinity_data_core' });
    event.remove({ output: 'ae2lt:matter_warping_matrix_controller'});
    event.remove({ output: 'ae2lt:tianshu_supercomputer_controller' });

    event.shaped('extendedae_plus:storage_core', [
        'MOM',
        'NBN',
        'MCM'
    ], {
        B: 'data_energistics:data_storage_component_256m',
        C: 'megacells:cell_component_256m',
        M: 'minecraft:netherite_block',
        N: 'minecraft:nether_star',
        O: 'extendedae_plus:oblivion_singularity'
    }).id('ccb:extendedae_plus/storage_core');

    event.shaped('extendedae_plus:energy_storage_core', [
        'MOM',
        'NBN',
        'MCM'
    ], {
        B: 'appliedcreate:stress_storage_component_256m',
        C: 'appflux:core_256m',
        M: 'minecraft:netherite_block',
        N: 'minecraft:nether_star',
        O: 'extendedae_plus:oblivion_singularity'
    }).id('ccb:extendedae_plus/energy_storage_core');

    event.shaped('extendedae_plus:quantum_storage_core', [
        'MOM',
        'NBN',
        'MCM'
    ], {
        B: 'ae2omnicells:quantum_omni_cell_component_256m',
        C: 'advanced_ae:quantum_storage_256',
        M: 'minecraft:netherite_block',
        N: 'minecraft:nether_star',
        O: 'extendedae_plus:oblivion_singularity'
    }).id('ccb:extendedae_plus/quantum_storage_core');

    event.shaped('extendedae_plus:spatial_core', [
        'MOM',
        'NBN',
        'MCM'
    ], {
        B: 'ae2omnicells:omni_cell_component_256m',
        C: 'ae2:spatial_cell_component_128',
        M: 'minecraft:netherite_block',
        N: 'minecraft:nether_star',
        O: 'extendedae_plus:oblivion_singularity'
    }).id('ccb:extendedae_plus/spatial_core');
});
