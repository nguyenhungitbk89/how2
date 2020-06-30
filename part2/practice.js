function dummy () {
  return 1;
}
/**
 * Reverse an array
 * 
 * @example
 * 
 * reverse([1,2,3]) returns [3,2,1]
 * 
 * @param {array} array
 * @returns {array}
 */
function reverse (array) {
  const reversedArray = [];
  const arrayLength = array.length
  for(let i = arrayLength - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

/**
 * Reverse a string
 * 
 * @example
 * 
 * stringReverse('hello') returns 'olleh'
 * 
 * @param {string} text
 * @returns {string}
 * 
 */
function stringReverse (text) {
  const reversedStrArray = [];
  const strArray = text.split('');
  const stringLength = strArray.length;
  for(let i = stringLength - 1; i >= 0; i--) {
    reversedStrArray.push(strArray[i]);
  }
  return reversedStrArray.join('');
}


/**
 * return a fixed length fibonacci list
 * 
 * @example
 * 
 * fibonacci(5) returns [1,1,2,3,5]
 * 
 * @param {number} length
 * @returns {array}
 */
function fibonacci (length) {
  const arrayOfFib = [];
  arrayOfFib[0] = 1;
  arrayOfFib[1] = 1;
  for (let i = 2; i < length; i++) {
    arrayOfFib[i] = arrayOfFib[i - 1] + arrayOfFib[i - 2];
  }
  return arrayOfFib;
}

/**
 * return the biggest number in the array
 * 
 * @example
 * 
 * biggest([1,3,5,7,9]) returns 9
 * 
 * @param {array} array
 * @returns {number}
 */
function biggest (array) {
  let maxValue = array[0];
  array.forEach(currentValue => {
    if (currentValue > maxValue) {
      maxValue = currentValue
    }
  });
  return maxValue;
}

/**
 * Creates an array of numbers progressing from 
 * start up to, but not including, end
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
 * @example
 * 
 * range(0,4) returns [0,1,2,3]
 * 
 * @param {number} start 
 * @param {number} end 
 * @returns {array}
 */
function range (start, end) {
  const resultedArray = [];
  for(let i = start; i < end; i++) {
    resultedArray.push(i);
  }
  return resultedArray;
}

/**
 * Recursively flattens array.
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
 * @example
 * 
 * flatten([1,[2,[3,4],[5,[6]]]]) returns [1,2,3,4,5,6]
 * 
 * @param {array} array
 * @returns {array}
 */
function flatten (array) {
  const flattenArray = [];
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    const currentElement = array[i];
    if (Array.isArray(currentElement)) {
      flattenArray.push(...flatten(currentElement))
    } else {
      flattenArray.push(currentElement);
    }
  }
  return flattenArray;
}

module.exports = {
  dummy,
  fibonacci,
  reverse,
  flatten,
  biggest,
  flatten,
  stringReverse,
  range
};
