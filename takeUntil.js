
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

const assertArraysEqual = function(outcome) {
  if (outcome) {
    console.log(`✅ Assertion Passed: eqArrays function returns ${outcome}`);
  } else {
    console.log(`❌ Assertion Failed: eqArrays function returns ${outcome}`);
  }
};

/*
Implementing Take Until below
*/

const takeUntil = function(array, callback) {
  const newArray = [];
  for (const val of array) {
    if (!callback(val)) {
      newArray.push(val);
    } else {
      break;
    }
  }
  return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

console.log(results1);
console.log(results2);
