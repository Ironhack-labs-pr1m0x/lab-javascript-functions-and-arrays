// Iteration #1: Find the maximum

const maxOfTwoNumbers = (num1, num2) => {
  if (num1 < num2) return num2;
  return num1;
};

// Iteration #2: Find longest word
const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
];

const findLongestWord = (wordsArr) => {
  if (wordsArr.length === 0) return null;

  let longestWord = '';
  for (let i = 0; i < wordsArr.length; i++) {
    wordsArr[i].length > longestWord.length
      ? (longestWord = wordsArr[i])
      : null;
  }

  return longestWord;
};

findLongestWord(words);

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const numbers2 = ['6', '12', 2];

const sumNumbers = (numbersArr) => {
  let sum = 0;

  numbersArr.forEach((number) => {
    sum += number;
  });

  return sum;
};

sumNumbers(numbers);

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10, []];

const sum = (mixedArr) => {
  if (mixedArr.length === 0) return 0;
  let showError = false;

  mixedArr.forEach((el) => {
    if (typeof el === 'object') showError = true;
  });

  //! Uncomment to throw error
  // if (showError) throw new Error("Unsupported data type sir or ma'am");

  let sum = 0;

  mixedArr.forEach((el) => {
    switch (typeof el) {
      case 'boolean':
        if (el === true) sum += 1;
        break;
      case 'string':
        sum += el.length;
        break;
      case 'number':
        sum += el;
        break;
    }
  });

  return sum;
};

sum(mixedArr);

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

const averageNumbers = (numbersArr) => {
  if (numbersArr.length === 0) return null;

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sum = numbersArr.reduce(reducer);
  return sum / numbersArr.length;
};

averageNumbers(numbersAvg);

// Level 2: Array of strings
const wordsArrTest = ['seat', 'correspond'];

const wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

const averageWordLength = (wordsArrTest) => {
  if (wordsArrTest.length === 0) return null;

  const str = wordsArrTest.join('');
  return str.length / wordsArrTest.length;
};

averageWordLength(wordsArr);

const otherMixedArr = [
  6,
  12,
  'miami',
  1,
  true,
  'barca',
  '200',
  'lisboa',
  8,
  10,
];

const avg = (arr) => {
  if (arr.length === 0) return null;

  let sum = 0;

  arr.forEach((el) => {
    switch (typeof el) {
      case 'boolean':
        el ? (sum += 1) : (sum += 0);
        break;
      case 'string':
        sum += el.length;
        break;
      case 'number':
        sum += el;
        break;
    }
  });

  const avgSum = sum / arr.length;
  return parseFloat(avgSum.toFixed(2));
};

avg(otherMixedArr);

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring',
];

const uniquifyArray = (wordsArr) => {
  if (wordsArr.length === 0) return null;

  let excludeFromArr = [];

  wordsArr.forEach((el) => {
    if (!excludeFromArr.includes(el)) excludeFromArr.push(el);
  });

  return excludeFromArr;
};

uniquifyArray(wordsUnique);

// Iteration #6: Find elements
const wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience',
];

const doesWordExist = (wordsArr, word) => {
  if (wordsArr.length === 0) return null;
  return wordsArr.includes(word) ? true : false;
};

doesWordExist(wordsFind, 'haus');

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter',
];

const howManyTimes = (wordsCount, word) => {
  let counter = 0;

  for (let i = 0; i < wordsCount.length; i++) {
    if (wordsCount[i] === word) counter++;
  }

  return counter;
};

howManyTimes(wordsCount);

// Iteration #8: Bonus

const createProduct = (arr) => {
  return arr.reduce(function (a, b) {
    return a * b;
  });
};

const greatestProductVertically = (matrix) => {
  let greatestProduct = { matrix: [], product: 0 };

  for (let i = 0; i < matrix.length; i++) {
    let currentIteration = { matrix: [], product: 0 };

    for (let k = 0; k < matrix.length; k++) {
      // Setup first Matrix
      if (k < 4 && currentIteration.product === 0) {
        currentIteration.matrix.push(matrix[k][i]);
      }

      // Setup first Product
      if (k === 4) {
        currentIteration.product = createProduct(currentIteration.matrix);
      }

      // After first Setup
      if (currentIteration.product > 0) {
        // Copy currentIteration Object for manipulation
        let currentIterationC = { ...currentIteration };

        // Delete first Element of Array
        currentIterationC.matrix.shift();
        currentIterationC.matrix.push(matrix[k][i]);

        const newProduct = createProduct(currentIterationC.matrix);
        currentIteration.product = newProduct;

        if (currentIteration.product < currentIterationC.product) {
          currentIteration = currentIterationC;
        }

        if (greatestProduct.product < currentIteration.product) {
          greatestProduct = currentIteration;
        }
      }
    }
  }
  return greatestProduct;
};

const greatestProductHorizontally = (matrix) => {
  let greatestProduct = { matrix: [], product: 0 };

  for (let i = 0; i < matrix.length; i++) {
    let currentIteration = { matrix: [], product: 0 };

    for (let k = 0; k < matrix.length; k++) {
      // Setup first Matrix
      if (k < 4 && currentIteration.product === 0) {
        currentIteration.matrix.push(matrix[i][k]);
      }

      // Setup first Product
      if (k === 4) {
        currentIteration.product = createProduct(currentIteration.matrix);
      }

      // Run after first Product creation
      if (currentIteration.product > 0) {
        // Copy currentIteration Object for manipulation
        let currentIterationC = { ...currentIteration };

        // Delete first Element of Array
        currentIterationC.matrix.shift();
        currentIterationC.matrix.push(matrix[k][i]);

        const newProduct = createProduct(currentIterationC.matrix);
        currentIteration.product = newProduct;

        if (currentIteration.product < currentIterationC.product) {
          currentIteration = currentIterationC;
        }

        if (greatestProduct.product < currentIteration.product) {
          greatestProduct = currentIteration;
        }
      }
    }
  }
  return greatestProduct;
};

const greatestProduct = (matrix) => {
  const result = greatestProductVertically(matrix);
  const result2 = greatestProductHorizontally(matrix);

  return result.product < result2.product ? result2.product : result.product;
};

greatestProduct(matrixOne);

// will be refactored
