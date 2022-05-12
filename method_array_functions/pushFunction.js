export const push = (array = [], ...value) => {
    if (!Array.isArray(array)) {
            throw new TypeError('array parameter must be an array');
    }
    if (array.length === 0 && value.length === 0) {
        throw new TypeError('Push of empty array with no initial value');
    }
    for (let i = 0; i < value.length; i++) {
        array[array.length] = value;
    }
    return array.length;
};