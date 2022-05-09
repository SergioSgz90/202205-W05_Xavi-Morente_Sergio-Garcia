import { lengthFunction } from './method_functions.js';

test('should show the lenght of the Array', () => {
    const initials = [1, 2];
    const result = lengthFunction(...initials);
    expect(result).toBe(true);
});
