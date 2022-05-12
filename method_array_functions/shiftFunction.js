export const shift = (array = []) => {
    if (array.length === 0) {
        return undefined;
    } else {
        let dropOut = array[0];
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i + 1];
        };
        array.length = array.length - 1;
        return dropOut;
    }
};