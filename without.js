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



const without = function(source, itemsToRemove) {
  for (const element of source) {
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (element === itemsToRemove[i]) {
        source.splice(source.indexOf(element), 1);
      }
    }
  }
  console.log(source);
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without([1, 2], []);
without([1, "lighthouse"], [1.1]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);