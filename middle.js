const middle = function(array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2);

  let result = [];

  if (length <= 2) {
    return result;
  } else if (length % 2 !== 0) {
    return result = [array[middleIndex]];
  } else {
    return result =[array[middleIndex - 1], array[middleIndex]];
  }
};

module.exports = middle; 