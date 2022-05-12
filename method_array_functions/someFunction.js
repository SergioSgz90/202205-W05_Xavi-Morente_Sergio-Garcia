// Some Function

export const someFunction = (array, item) => {
    if (array === undefined) {
        throw new Error("it's not an array");
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return true;
        } else {
            return false;
        }
    }
};
