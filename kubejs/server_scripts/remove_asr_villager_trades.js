MoreJS.villagerTrades(event => {
  ;[
    'asr:trinity_data_core',
    'asr:tianshu_matrix',
    'asr:super_assembler_matrix'
  ].forEach(item => {
    event.removeTrades({ output: Ingredient.of(item) })
  })
})
