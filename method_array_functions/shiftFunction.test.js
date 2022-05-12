import { shift } from "./shift.js";

describe('Given a function pop', () => {
    describe('When no receive parameters', () => {
        test('Then should TypeError', () => {
            expect(() => shift().toThrow(
                TypeError('array parameter must be an array')
            ))
        })
    })

    describe('When array.length = 0', () => {
        test('Then should undefined', () => {
            const values = [[]];
            const result = shift(...values);
            expect(result).toBe(undefined);
        });
    });

    describe('When receive [1, 2]', () => {
        test('Then should "1"', () => {
            const values = [[1, 2]];
            const expectedResult = 1;
            const result = shift(...values);
            expect(result).toBe(expectedResult);
        });
    });

    describe('When receive ["a", "b"]', () => {
        test('Then should "a"', () => {
            const values = [['a', 'b']];
            const expectedResult = 'a';
            const result = shift(...values);
            expect(result).toBe(expectedResult);
        });
    });

    describe('When parameters are string or number', () => {
        test('Then should TypeError', () => {
            const values = ['coders'];
            expect(() =>
                shift(...values).toThrow(
                    TypeError('array parameter must be an array')
                )
            );
        });

        test('Then should TypeError', () => {
            const values = [44];
            expect(() =>
                shift(...values).toThrow(
                    TypeError('array parameter must be an array')
                )
            );
        });
    });
})