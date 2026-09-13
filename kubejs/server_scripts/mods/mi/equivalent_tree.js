ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.equivalent_tree(32, 1000)
        .itemIn('ae2lt:entangled_topological_lattice')
        .itemOut('neoecoae:crystal_matrix')
        .emcOut(1000000000000000)
        .id('ccb:equivalent_tree/crystal_matrix');
});
