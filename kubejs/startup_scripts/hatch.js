MIMachineEvents.registerHatches(event => {
    event.fluid(
        "Quantum",
        // Internal name for the tier.
        // In this cases, the block IDs of the hatches will be huge_fluid_input_hatch and huge_fluid_output_hatch.
        "quantum",
        // Machine casing for the model of the hatch.
        "quan_casing",
        // Number of buckets that the hatch can hold.
        2147283647,
    );
});