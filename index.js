export function capitalize(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}

export function reverseString(word) {
  return word.split("").reverse().join("");
}
