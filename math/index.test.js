// naming a file that ends in .test.js tells jest to recognize the test file
// be sure to create a test script for jest in package.json

const math = require("./math");

test("it runs the test", () => {
  // comparing actual value to expected value
  expect(true).toBe(true); // assertion
});

it("it compares objects", () => {
  // Arrange
  const expected = { name: "Reese" };
  // Act - run the production code
  const actual = getName("Reese");
  //Assert
  expect(actual).toEqual(expected);
  //   expect(getName()).toEqual({});
});

function getName(name) {
  //   return { name }; => same thing
  return { name: name };
}

it("adds two numbers", () => {
  expect(math.add(2, 2)).toBe(4);
});

// Test Driven Development (TDD) - making decisions about code behavior while writing tests - aka Test Driven Design
