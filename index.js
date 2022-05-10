import {
    lengthFunction,
    popFunction,
    pushFunction,
    unshiftFunction,
} from './method_functions.js';

// Variables

const array01 = [12, 13, 12, 14];
console.log('array = ' + array01);

// 01_lengthFunction
console.log('01_lengthFunction = ' + lengthFunction(array01));

//02_pushFunction

//03_popFunction

console.log('03_popFunction = ' + popFunction(array01));

//04_shiftFunction

//05_unshiftFunction
const array02 = [11, 12, 13, 14];
console.log('05_unshiftFunction = ' + unshiftFunction(array02));
