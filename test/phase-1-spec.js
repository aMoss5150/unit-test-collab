const chai = require("chai");
const expect = chai.expect;
const { isFive, isOdd, myRange, fizzBuzz } = require("../problems/phase-1");
describe("isFive(num)", () => {
	it("should return true if the num is 5 otherwise false", () => {
		//Arrange

		let result = isFive(5);
		let answer = true;
		//Act
		//Assert
		expect(result).to.equal(answer);
		//Arrange
		let result2 = isFive(2);
		let answer2 = false;

		//Act

		//Assert
		expect(result2).to.equal(answer2);
	});
});

describe("isOdd(number)", () => {
	it("should return true if number is odd", () => {
		//Arrange

		//Act

		//Assert
		expect(isOdd(3)).to.be.true;
	});
	it("should return false if the num is even", () => {
		//Arrange

		//Act

		//Assert
		expect(isOdd(2)).to.be.false;
	});
	it("should throw an error if num is not type of Number", () => {
		//Arrange

		//Act

		//Assert
		expect(() => isOdd("hat").to.throw(TypeError));
	});
});
describe("myRange(min, max, step)", () => {
	context("if step is not provided", () => {
		it("should return the correct array with default value step=1", () => {
			//Arrange
			let answer = [1, 2, 3, 4, 5];
			let result = myRange(1, 5);
			//Act

			// Assert
			expect(result).to.deep.equal(answer);
		});
	});
	context("if step is provided", () => {
		it("should return the correct array", () => {
			//Arrange
			let answer = [1, 3, 5, 7, 9];
			let result = myRange(1, 10, 2);
			//Act

			// Assert
			expect(result).to.deep.equal(answer);
		});
	});
	it("should throw an error if num is not type of Number", () => {
		//Arrange

		//Act

		//Assert
		expect(() => myRange("str", "str2").to.throw(Error));
	});
});
describe("fizzBuzz(max)", () => {
	it("should throw a RangeError if max < 0", () => {
		//Arrange

		//Act

		//Assert
		expect(() => fizzBuzz(-1).to.throw(RangeError));
	});
	it("should throw a TypeError if max is not a number", () => {
		//Arrange

		//Act

		//Assert
		expect(() => fizzBuzz("str").to.throw(TypeError));
	});
	it("should return an array from 0 to max (not inclusive) of numbers that are divisible by either 3 or 5 but not both", () => {
		//Arrange

		//Act

		//Assert
		expect(fizzBuzz(10)).to.deep.equal([3, 5, 6, 9]);
	});
});
