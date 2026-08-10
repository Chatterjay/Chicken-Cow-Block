let FLUID_COMPRESSOR;

MIMachineEvents.registerRecipeTypes((event) => {
    FLUID_COMPRESSOR = event.register("fluid_compressor")
        .withItemOutputs()
        .withFluidInputs();
});
MIMachineEvents.registerMachines(event => {
  const hatch = event.hatchOf( "item_output", "fluid_input", "energy_input");
  const shape = event.layeredShape("sing_casing", [
    ["ggggggggggggggggggg", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   "],
    ["gccccccccdccccccccg", " eeeeeeeeeeeeeeeee ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   "],
    ["gccccccccdccccccccg", " efffffffdfffffffe ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "    ggg     ggg    ", "                   ", "                   ", "                   ", "                   ", "                   "],
    ["gccccccccdccccccccg", " ef     fdf     fe ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "    ttt     ttt    ", "   ggggiiiiigggg   ", "                   ", "                   ", "                   ", "                   ", "                   "],
    ["gccccccccdccccccccg", " ef     fdf     fe ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "   t   uuuuu   t   ", "  gghhhhhhhhhhhgg  ", "                   ", "                   ", "                   ", "                   ", "                   "],
    ["gccccccccdccccccccg", " ef  j  fdf  j  fe ", "     j       j     ", "     j       j     ", "     j       j     ", "     j       j     ", "     j       j     ", "     j       j     ", "     j       j     ", "     j       j     ", "     j       j     ", "     j       j     ", "     j       j     ", "     j       j     ", "   t j uuuuu j t   ", "  gghhhhhhhhhhhgg  ", "     k       k     ", "     k       k     ", "     l       l     ", "     m       m     ", "                   "],
    ["gccccccccdccccccccg", " ef     fdf     fe ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "   t   uuuuu   t   ", "  gghhhhhhhhhhhgg  ", "                   ", "                   ", "                   ", "                   ", "                   "],
    ["gccccccccdccccccccg", " ef     fdf     fe ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "    uuunnnnnuuu    ", "   ihhhhhhhhhhhi   ", "                   ", "        eee        ", "        eee        ", "        eee        ", "                   "],
    ["gccccccccdccccccccg", " efffffffdfffffffe ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "    uuunnnnnuuu    ", "   ihhhhhhhhhhhi   ", "        eee        ", "       eeeee       ", "       eeeee       ", "       eeeee       ", "        eee        "],
    ["gdddddddddddddddddg", " eddddddddddddddde ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "    uuunnnnnuuu    ", "   ihhhhhhhhhhhi   ", "        eee        ", "       eeeee       ", "       eeoee       ", "       eeeee       ", "        eee        "],
    ["gccccccccdccccccccg", " efffffffdfffffffe ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "    uuunnnnnuuu    ", "   ihhhhhhhhhhhi   ", "        eee        ", "       eeeee       ", "       eeeee       ", "       eeeee       ", "        eee        "],
    ["gccccccccdccccccccg", " ef     fdf     fe ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "    uuunnnnnuuu    ", "   ihhhhhhhhhhhi   ", "                   ", "        eee        ", "        e#e        ", "        eee        ", "                   "],
    ["gccccccccdccccccccg", " ef     fdf     fe ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "   t   uuuuu   t   ", "  gghhhhhhhhhhhgg  ", "                   ", "                   ", "                   ", "                   ", "                   "],
    ["gccccccccdccccccccg", " ef  j  fdf  j  fe ", "     j       j     ", "     j       j     ", "     j       j     ", "     j       j     ", "     j       j     ", "     j       j     ", "     j       j     ", "     j       j     ", "     j       j     ", "     j       j     ", "     j       j     ", "     j       j     ", "   t j uuuuu j t   ", "  gghhhhhhhhhhhgg  ", "     k       k     ", "     k       k     ", "     l       l     ", "     m       m     ", "                   "],
    ["gccccccccdccccccccg", " ef     fdf     fe ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "   t   uuuuu   t   ", "  gghhhhhhhhhhhgg  ", "                   ", "                   ", "                   ", "                   ", "                   "],
    ["gccccccccdccccccccg", " ef     fdf     fe ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "    ttt     ttt    ", "   ggggiiiiigggg   ", "                   ", "                   ", "                   ", "                   ", "                   "],
    ["gccccccccdccccccccg", " efffffffdfffffffe ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "    ggg     ggg    ", "                   ", "                   ", "                   ", "                   ", "                   "],
    ["gccccccccdccccccccg", " eeeeeeeeeeeeeeeee ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   "],
    ["ggggggggggggggggggg", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   ", "                   "],
  ])
  .key("c", event.memberOfBlock("projectexpansion:white_matter_block"), event.noHatch())
  .key("d", event.memberOfBlock("ae2cs:quantum_crystal_block"), event.noHatch())
  .key("e", event.memberOfBlock("ae2omnicells:singularity_block"), hatch)
  .key("f", event.memberOfBlock("projectexpansion:fading_matter_block"), event.noHatch())
  .key("g", event.memberOfBlockPredicate(Block.id("advanced_ae:quantum_alloy_slab")), event.noHatch())
  .key("h", event.memberOfBlock("advanced_ae:quantum_infusion_block"), event.noHatch())
  .key("i", event.memberOfBlockPredicate(Block.id("ae2:fluix_slab")), event.noHatch())
  .key("j", event.memberOfBlock("extendedcrafting:black_iron_block"), event.noHatch())
  .key("k", event.memberOfBlock("advanced_ae:quantum_alloy_block"), event.noHatch())
  .key("l", event.memberOfBlock("ae2lt:lightning_collector"), event.noHatch())
  .key("m", event.memberOfBlock("minecraft:lightning_rod"), event.noHatch())
  .key("n", event.memberOfBlock("allthemodium:unobtainium_block"), event.noHatch())
  .key("o", event.memberOfBlock("allthecompressed:antimatter_block"), event.noHatch())
  .key("t", event.memberOfBlockPredicate(Block.id("advanced_ae:quantum_alloy_slab").with("type", "top")), event.noHatch())
  .key("u", event.memberOfBlockPredicate(Block.id("ae2:fluix_slab").with("type", "top")), event.noHatch())
  .build();
    event.simpleElectricCraftingMultiBlock(
        // English name, internal name
        "Fluid Compressor", "fluid_compressor",
        // Recipe type, multiblock shape
        FLUID_COMPRESSOR, shape,
        // REI progress bar
        event.progressBar(77, 33, "arrow"),
        // REI item inputs, item outputs, fluid inputs, fluid outputs
        (itemInputs) => {},
        (itemOutputs) => itemOutputs.addSlot(102, 35),
        (fluidInputs) => fluidInputs.addSlot(56,35),
        (fluidOutputs) => {
        },
        // Casing of the controller, overlay folder, front overlay?, top overlay?, side overlay?
        "sing_casing", "fluid_compressor", true, false, false
    );
});

