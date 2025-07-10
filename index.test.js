import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index";

test("capitalize", () => {
  expect(capitalize("ahmed")).toBe("Ahmed");
});

test("reverseString", () => {
  expect(reverseString("ahmed")).toBe("demha");
});

test("calculator", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("calculator", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test("calculator", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("calculator", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("caesarCipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesarCipher", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray", () => {
  let object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(object);
});
