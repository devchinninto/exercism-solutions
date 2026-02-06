// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let a1 = array1.join('')
  let a2 = array2.join('')

  return Number(a1) + Number(a2)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  // storing my value reversed in a string, then converting it back to number
  const stringV = String(value).split('').reverse().join('')
  const reversed = Number(stringV)

  console.log('Original:', value)
  console.log('Reversed variable:', reversed)
  
  if (value === reversed) { 
    return true
  } else {
    return false
  }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return 'Required field'
  } else if (!Number(input)) {
    return 'Must be a number besides 0'
  } else {
    return ''
  }
  
}
