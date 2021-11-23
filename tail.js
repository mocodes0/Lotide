const assertEqual = require('./assertEqual');

let tail = function(array) {
  let tailedArray = [];
  for (let i = 1; i < array.length; i++) {
    tailedArray.push(array[i]);
  }
  return tailedArray;
};

module.exports = tail;