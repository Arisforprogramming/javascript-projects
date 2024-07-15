const checkFive = require('../checkFive.js');

describe("checkFive test", function () {
    test("return 'number is less than 5' when num < 5", function () {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });
    test("return 'number is equal to 5' when num === 5", function () {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });
    test("return 'number is greater than 5' when num > 5", function () {
        let output = checkFive(8);
        expect(output).toEqual("8 is greater than 5.");
    });
});