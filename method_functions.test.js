import { lengthFunction, popFunction } from './method_functions';

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
