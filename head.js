let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💣Assertion failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;

const assertEqual = require('./assertEqual');

  let head = function(array) {
      return array[0];
  }


module.exports = head;