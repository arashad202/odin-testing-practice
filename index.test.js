import { capitalize, reverseString, calculator } from "./index";

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
