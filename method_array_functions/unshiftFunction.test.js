import { unshiftFunction } from './unshiftFunction.js';

//TESTING 05_unshiftFunction
describe('Given the function unshiftFunction', () => {
    describe('When recived an array', () => {
        test('adds a new element in the beggining of the array', () => {
            // Arrange
            const initials = [1, 2, 4];
            const initials02 = [0];
            // Act
            const result = unshiftFunction(initials, initials02);
            // Assert
            expect(result).toEqual([0, 1, 2, 4]);
            expect(result).toContain(...initials02, ...initials);
        });
    });
});
