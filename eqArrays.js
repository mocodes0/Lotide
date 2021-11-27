
const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  let outcome;
  if (arr1.length === arr2.length) {
    let arrayLength = arr2.length;
    for (let i = 0; i < arrayLength; i++) {
      if (arr1[i] === arr2[i]) {
        outcome = true;
      } else {
        outcome = false;
      }
    }
  } else {
    outcome = false;
  }
  return outcome;
};

module.exports = eqArrays;