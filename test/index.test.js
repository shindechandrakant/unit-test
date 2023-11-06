const isEven = require("../index.js");


describe("isEven", () => {

    test("1. throw an error if number is Negative", () => {
        expect(() => isEven(-2)).toThrow();
    });

    test("2. throw an error if number is not type of string", () => {
        expect(() => isEven("Number")).toThrow();
    });

    test("3. return true if number is even", () => {
        expect(isEven(2)).toBe(true);
    });

    test("4.return false if number is odd", () => {
        expect(isEven(3)).toBe(false);
    });
});

