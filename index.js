export function capitalize(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}

export function reverseString(word) {
  return word.split("").reverse().join("");
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

function isPunc(element) {
  return /[^\w\s]/.test(element);
}

export function caesarCipher(sentence, key) {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let chars = sentence.split("").map((element) => {
    if (isPunc(element) || element == " ") {
      return element;
    }

    if (lowerAlphabet.includes(element)) {
      let index = lowerAlphabet.indexOf(element);
      index = (index + key + 26) % 26;
      return lowerAlphabet.at(index);
    }

    if (upperAlphabet.includes(element)) {
      let index = upperAlphabet.indexOf(element);
      index = (index + key + 26) % 26;
      return upperAlphabet.at(index);
    }
  });

  return chars.join("");
}

export function analyzeArray(array) {
  const sum = array.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  const length = array.length;
  const average = sum / length;
  const min = array.reduce((acc, curr) => {
    if (curr < acc) {
      return curr;
    } else {
      return acc;
    }
  });
  const max = array.reduce((acc, curr) => {
    if (curr > acc) {
      return curr;
    } else {
      return acc;
    }
  });

  return {
    average,
    min,
    max,
    length,
  };
}

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
