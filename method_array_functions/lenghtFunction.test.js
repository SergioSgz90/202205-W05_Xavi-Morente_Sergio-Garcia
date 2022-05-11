import { lengthFunction } from './lengthFunction';

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
