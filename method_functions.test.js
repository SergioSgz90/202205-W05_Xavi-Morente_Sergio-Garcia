import { lengthFunction, popFunction, unshiftFunction } from './method_functions';

//TESTING 01_lengthFunction
describe('Given the function lengthFunction', () => {
    describe('When recived an array', () => {
        test('Then should show the length of the Array', () => {
            // Arrange
            const initials = [1, 2, 3];
            // Act
            const result = lengthFunction(initials);
            // Assert
            expect(result).toBe(3);
        });
    });
});

//TESTING 02_pushFunction


//TESTING 03_popFunction
describe('Given the function popFunction', () => {
    describe('When recived an array', () => {
        test('Then the last element from the array its removed', () => {
            // Arrange
            const initials = [1, 2, 4];
            // Act
            const result = popFunction(initials);
            // Assert
            expect(result).toEqual([1, 2]);
        });
    });
});

//TESTING 04_shiftFunction


//TESTING 05_unshiftFunction
describe('Given the function unshiftFunction', () => {
    describe('When recived an array', () => {
        test('adds a new element in the beggining of the array', () => {
            // Arrange
            const initials = [1, 2, 4];
            const initials02 = [0]
            // Act
            const result = unshiftFunction(initials, initials02);
            // Assert
            expect(result).toEqual([0, 1, 2, 4]);
            expect(result).toContain(0);
        });
    });
});