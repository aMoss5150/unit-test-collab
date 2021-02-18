const chai = require("chai");
const expect = chai.expect;

const { Word } = require('../problems/phase-3')
describe('Word', function () {
	let test
	beforeEach("before ...", () => {
		 test = new Word("apple");
	})
  describe('Word constructor function', function () {
    it('should have a "word" property', function() {
      //Arrange & Act


      //Assert
       expect(test).to.have.property('word')
    })
     it('should set the "word" property when a new word is created', function() {
      //Arrange & Act
		let expected = "apple"

      //Assert
        expect(test.word).to.eql(expected)
    })
  })
  describe('removeVowels function', function () {
    it('should return a the word with all vowels removed', function() {
      //Arrange

      //Act

      //Assert
       expect(test.removeVowels()).to.eql('ppl');
    })
  })
  describe('removeConsonants function', function () {
})
  it('should return the word with the consonants removed', function() {
    //Arrange

    //Act

    //Assert
	expect(test.removeConsonants()).to.eql('ae');
  })
  describe('pigLatin function', function () {
})
  it('should return the word converted to pig latin', function() {
    //Arrange

    //Act

    //Assert
	expect(test.pigLatin()).to.eql('appleyay');
  })
})
