const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { mirrorArray, hiddenCounter, myMap, avgValue } = require('../problems/phase-2')

//1. mirrorArray
describe('mirrorArray()', function () {
  it('should return a single array where the first half is the orginal array and the second half is a mirror of the first half', function () {
    //Arrange

    //Act

    //Assert
    expect(mirrorArray([1, 2, 3])).to.deep.equal([1, 2, 3, 3, 2, 1])
  })
})

//2. hiddenCounter
describe('hiddenCounter()', function () {

  it('should return a function that will increment the counter when invoked', function () {
    //Arrange
    let result = hiddenCounter()
    // let result2 = hiddenCounter()
    //Assert
    expect(result()).to.equal(1)
    expect(result()).to.equal(2)
    expect(result()).to.equal(3)
  })
})

//3. myMap
describe('myMap', function () {
  it("should function like the built in Array#map", function () {
    //Arrange

    //Act

    //Assert
    expect(myMap([1, 2, 3], (num) => num * 2)).to.deep.equal([1, 2, 3].map((el) => el * 2));
  });

  it("should not call the built in Array#map", function () {
    //Arrange
    let arr = [1, 2, 3]
    let spy = chai.spy.on(Array.prototype, 'map')
    //Act
    myMap(arr, (num) => num * 2)
    //Assert
    expect(spy).not.called()

  });
})

//4. avgValue
describe('avgValue', function () {
  it('should return the average of an array of numbers', function () {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
})