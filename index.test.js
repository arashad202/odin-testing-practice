import { capitalize, reverseString } from "./index";

test("capitalize", () => {
  expect(capitalize("ahmed")).toBe("Ahmed");
});

test("reverseString", () => {
  expect(reverseString("ahmed")).toBe("demha");
});
