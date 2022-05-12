import { someFunction } from './someFunction';

describe('Given the function someFunction', () => {
    describe('When recived an element matching in the array', () => {
        test('it will return true', () => {
            // Arrange
            const initials = [1, 2, 4];

            const item = 1;

            // Act
            const result1 = someFunction(initials, item);

            // Assert
            expect(result1).toBe(true);
        });
    });
});

describe('Given the function someFunction', () => {
    describe('When recived an element not matching in the array', () => {
        test('it will return false', () => {
            // Arrange
            const initials = [1, 2, 4];
            const item = 3;
            // Act
            const result = someFunction(initials, item);
            // Assert
            expect(result).toBe(false);
        });
    });
});

