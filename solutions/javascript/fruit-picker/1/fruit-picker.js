/// <reference path="./global.d.ts" />
//
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

import { notify } from './notifier';
import { order } from './grocer';

/**
 * @return void
 */

// I was stuck because, at first, I didn't understand notify ALREADY existed and I was trying to 'recreate' it. But it is already a function, with 'message' in it, and I just need to change the value of the message for my first 2 tasks.

export function onSuccess() {
  // Calls notify (already imported) passing my object. Don't need to use 'return' in here.
  notify({message: 'SUCCESS'})
}




/**
 * @return void
 */
export function onError() {
  notify({message: 'ERROR'})
}

/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 * @return void
 */
const queryValue = ''

export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  // const queryValue = query
  
  // Using the existing 'order' function, and passing forward query, and using the functions I implemented previously.
  order( query, onSuccess, onError )
}

/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */


export function postOrder(variety, quantity) {
  // Store my destructured arguments into query const -> same alias as previous function. And then, pass the previous function with only the argument I need.
  const query = { variety, quantity }

  orderFromGrocer(query)  
}
