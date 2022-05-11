import { popFunction } from './popFunction';

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
