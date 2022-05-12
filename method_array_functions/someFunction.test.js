
import { someFunction } from './some';

// TEST CASES
const arrayIsOk = [1, 2, 3];
const testArrIsEmpty = [];
const testElementIsNull = [null];
const isNotAnArrIsUndefined = undefined;
const isNotAnArrIsNumber = 1;
const isNotAnArrIsString = 'hello';

describe('Give different inputs I expect different outputs', () => {
  // true cases
  describe('When I pass an array with items and try finding an element which is included', () => {
    test('Should return true', () => {
      // Inputs
      const arr = arrayIsOk;
      const element = 2;
      const result = someFunction(arr, element);
      expect(result).toBe(true);
    });
  });
  describe('When I pass an array with items and try finding an element which is not included', () => {
    test('Should return false', () => {
      // Inputs
      const arr = arrayIsOk;
      const element = 7;
      const result = someFunction(arr, element);
      console.log(result);
      expect(result).toBe(false);
    });
  });
  describe('When I pass an empty array', () => {
    test('Should return false', () => {
      // Inputs
      const arr = testArrIsEmpty;
      const element = 2;
      const result = someFunction(arr, element);
      console.log(result);
      expect(result).toBe(false);
    });
  });

  describe('When an element is null', () => {
    test('Should return false', () => {
      // Inputs
      const arr = arrayIsOk;
      const element = testElementIsNull;
      const result = someFunction(arr, element);
      console.log(result);
      expect(result).toBe(false);
    });
  });

  describe('When the array is undefined', () => {
    test('Should return false', () => {
      // Inputs
      const arr = isNotAnArrIsUndefined;
      const element = 2;
      const result = someFunction(arr, element);
      console.log(result);
      expect(result).toBe(false);
    });
  });
  describe('When the array is not an array but a number', () => {
    test('Should return false', () => {
      // Inputs
      const arr = isNotAnArrIsNumber;
      const element = 2;
      const result = someFunction(arr, element);
      console.log(result);
      expect(result).toBe(false);
    });
  });
  describe('When the array is not an array but a string', () => {
    test('Should return false', () => {
      // Inputs
      const arr = isNotAnArrIsString;
      const element = 2;
      const result = someFunction(arr, element);
      console.log(result);
      expect(result).toBe(false);
    });
  });
  describe('When the element is undefined', () => {
    test('Should return false', () => {
      // Inputs
      const arr = arrayIsOk;
      const element = undefined;
      const result = someFunction(arr, element);
      console.log(result);
      expect(result).toBe(false);
    });
  });

  describe('When the element is NaN', () => {
    test('Should return false', () => {
      // Inputs
      const arr = arrayIsOk;
      const element = NaN;
      const result = someFunction(arr, element);
      console.log(result);
      expect(result).toBe(false);
    });
  });
});
