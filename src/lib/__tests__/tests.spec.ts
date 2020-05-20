import {reversNumber, sortStringForAlphabet, increaseFirstLetter} from '../examples'

describe('Testing examples functions as HW:', () => {

  describe('REVERSE NUMBER', () => {
    test('should return reversed number', () => {
      expect(reversNumber(123)).toBe(321);
    });
  });

  describe('SORT STRING', () => {
    test('should return sorted string by alphabet', () => {
      expect(sortStringForAlphabet('webmaster')).toBe('abeemrstw');
    })
  });

  describe('INCREASE FIRST LETTER', () => {
    test('should return each word with big letter', () => {
      expect(increaseFirstLetter('the quick brown fox')).toBe('The Quick Brown Fox');
    })
  });


});