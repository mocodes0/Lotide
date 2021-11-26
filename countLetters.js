const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    // console.log('✅ Assertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
*/

const countLetters = function(sentence) {
  const result = {};
  sentence = sentence.split(' ').join('');
  for (letter of sentence) {
    if (Number(result[letter])) {
      result[letter] += 1;
    } else{
      result[letter] = 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));