let $RoostRecipeFingerprints = (() => {
  try {
    return new (Java.loadClass("java.util.LinkedHashMap"))()
  } catch (_) {
    return {}
  }
})()

let $RoostRecipeIDs = (() => {
  try {
    return new (Java.loadClass("java.util.LinkedHashSet"))()
  } catch (_) {
    return new Set()
  }
})()

function $resetRoostRecipeState() {
  if ($RoostRecipeFingerprints.clear) {
    $RoostRecipeFingerprints.clear()
    $RoostRecipeIDs.clear()
  } else {
    $RoostRecipeFingerprints = {}
    $RoostRecipeIDs = new Set()
  }
}

function $ensureRoostUniqueID(id) {
  if ($RoostRecipeIDs.contains ? $RoostRecipeIDs.contains(id) : $RoostRecipeIDs.has(id)) {
    let suffix = 1
    let candidate
    do {
      candidate = id + "_" + suffix++
    } while ($RoostRecipeIDs.contains ? $RoostRecipeIDs.contains(candidate) : $RoostRecipeIDs.has(candidate))
    id = candidate
  }
  if ($RoostRecipeIDs.add) {
    $RoostRecipeIDs.add(id)
  } else {
    $RoostRecipeIDs.add(id)
  }
  return id
}

/**
 *
 * @param {RecipesEventJS} event - recipeEvent
 * @param {string} foodTag - food input tag
 * @param {string} leftChickenItem - left chicken item
 * @param {string} rightChickenItem - right chicken item
 * @param {string} outputItem - output item
 * @param {string} id - recipeID
 */
function addRecipeChickenBreeding(event, foodTag, leftChickenItem, rightChickenItem, outputItem, id) {
  let fp = "breeding|" + foodTag + "|" + leftChickenItem + "|" + rightChickenItem + "|" + outputItem
  if ($RoostRecipeFingerprints.containsKey ? $RoostRecipeFingerprints.containsKey(fp) : fp in $RoostRecipeFingerprints) return

  let recipeID = $ensureRoostUniqueID(id)
  if ($RoostRecipeFingerprints.put) {
    $RoostRecipeFingerprints.put(fp, recipeID)
  } else {
    $RoostRecipeFingerprints[fp] = recipeID
  }

  event
    .custom({
      type: "chicken_roost:basic_breeding",
      food: { tag: foodTag },
      "left-chicken": { item: leftChickenItem },
      "right-chicken": { item: rightChickenItem },
      time: 20,
      output: { item: outputItem }
    })
    .id(recipeID)
}

/**
 *
 * @param {RecipesEventJS} event - recipeEvent
 * @param {string} foodTag - food input tag
 * @param {string} chickenItem - chicken item
 * @param {string} outputItem - output item
 * @param {number} time - time in ticks
 * @param {string} id - recipeID
 */
function addRecipeChickenRoostOutput(event, foodTag, chickenItem, outputItem, time, id) {
  let fp = "roost_output|" + foodTag + "|" + chickenItem + "|" + outputItem + "|" + time
  if ($RoostRecipeFingerprints.containsKey ? $RoostRecipeFingerprints.containsKey(fp) : fp in $RoostRecipeFingerprints) return

  let recipeID = $ensureRoostUniqueID(id)
  if ($RoostRecipeFingerprints.put) {
    $RoostRecipeFingerprints.put(fp, recipeID)
  } else {
    $RoostRecipeFingerprints[fp] = recipeID
  }

  event
    .custom({
      type: "chicken_roost:roost_output",
      food: { tag: foodTag },
      chicken: { item: chickenItem },
      time: time,
      output: { item: outputItem }
    })
    .id(recipeID)
}