//05_unshiftFunction (adds a new element in the beginning of an Array)
export const unshiftFunction = (array, addvalue) => {
    const newArray = [...addvalue, ...array];
    return newArray;
};
