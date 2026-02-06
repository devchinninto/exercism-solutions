// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy': return 0.5
      break;
    case 'Energizer': return 1.5
      break;
    case 'Green Garden': return 1.5
      break;
    case 'Tropical Island': return 3
      break;
    case 'All or Nothing': return 5
      break;
    default: return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *Energizer
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  // counter for my loop
  let totalWedges = 0
  let i = 0

  while (totalWedges < wedgesNeeded && i < limes.length) {
    // variable to assign an int to the strings in limes[]
      let limeSize = limes[i]

      switch (limeSize) {
        case 'small': limeSize = 6
          break;
        case 'medium': limeSize = 8
          break;
        case 'large': limeSize = 10
          break;
      }

    // adding up and incrementing counter
      totalWedges += limeSize;
      i++;

    // verifying if I hit the wedges I needed
    if (totalWedges === wedgesNeeded) {
      break;
    }
    
  }

  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
while (timeLeft > 0) {
  let i = 0
  // subtracts time left from the juice she's making
  timeLeft -= timeToMixJuice(orders[i])

  // removes it from the list and returns a 'new' array
  orders.shift()
}

  // remaining orders 
  return orders
}
