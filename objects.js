"use strict";


// 1. countWords
function countWords(phrase) {
  // Replace this with your code

  let dict = {}

  for (const char of phrase.split("")) {
    if (dict[char]){
      dict[char] += 1;
    } else {
      dict[char]=1;
      }
    }
    return dict
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {

  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };

  if (!melonPrices[price]) {
    return;
  }

  return melonPrices[price].sort();
};

  // Replace this with your code
