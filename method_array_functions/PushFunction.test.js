import { push } from "./push.js";

describe('Given a function push', () => {
    describe('When no receive parameters', () => {
        test('Then should TypeError', () => {
            const values = [];
            expect(() => push()).toThrow(
                TypeError('Push of empty array with no initial value')
            );
        })
    })

    describe('When first element hasnt value', () => {
        test('Then should second element', () => {
            const values = [, [4]];
            const expectedResult = 1;
            const result = push(...values);
            expect(result).toBe(expectedResult);
        })
    })

    describe('When receive null', () => {
        test('Then should TypeError', () => {
            const values = [null];
            expect(() => push(...values)).toThrow(
                TypeError('array parameter must be an array')
            );
        });
    });

    describe('When receive [1, 2], 3', () => {
        test('Then should [1, 2, 3]', () => {
            const values = [[1, 2], 3];
            const expectedResult = 3
            const result = push(...values);
            expect(result).toBe(expectedResult);
        });
    });

    describe('When receive ["a", "b"], ["c"]', () => {
        test('Then should ["a", "b", "c"]', () => {
            const values = [["a", "b"], ["c"]];
            const expectedResult = 3
            const result = push(...values);
            expect(result).toBe(expectedResult);
        });
    });
});