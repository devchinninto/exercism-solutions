// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  // Function to return both min and max included
 function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}

  // Setting min and max, and template string to return along with suffix
 const registry = Math.floor(getRandomInt(1000, 9999))

  return `NCC-${registry}` 
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const min = 41000.0
  const max = 42000.0

  // Min and max with only min inclusive.
 let stardate = min + Math.random()*(max - min)

  return stardate
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const planetClasses = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y']

  // Fixed values for my array. Max is excluded
  const min = 0
  const max = 10

 let i = Math.floor(min + Math.random()*(max - min))

console.log(i)
  
    return planetClasses[i]
  }

