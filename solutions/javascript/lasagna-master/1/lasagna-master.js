/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus (remainingTime) {
  if (remainingTime === 0) {
    return 'Lasagna is done.'
  } else if (!remainingTime) {
    return 'You forgot to set the timer.'
  } else {
    return 'Not done, please wait.'
  }
}

export function preparationTime (layers, minutesPerLayer = 2) {
  return layers.length * minutesPerLayer
}



export const quantities = (layers) => {
    let noodles = 0
    let sauce = 0

   for (const layer of layers) {
     if (layer === 'noodles') {
       noodles += 1
     }

     if (layer === 'sauce') {
       sauce += 1
     }
   }

   let noodleQuantity = noodles * 50
   let sauceQuantity = sauce * 0.2

  return { noodles: noodleQuantity, sauce: sauceQuantity }
}

export function addSecretIngredient (friendsList, myList) {
  let secretIngredient = friendsList[friendsList.length - 1]

  myList.push(secretIngredient)
}

export function scaleRecipe (recipe, portions) {
  let finalPortionQt = portions / 2
  console.log(finalPortionQt)

  let finalRecipe = {}
  
  for (const ingredient in recipe) {
  finalRecipe[ingredient] = (recipe[ingredient] * finalPortionQt)
  }

 return finalRecipe

}