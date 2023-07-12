"use strict";
//Basically youre asserting the type you expect to be returned
let a = 'hi';
let b = a;
let c = a;
console.log(typeof c);
let addNumOrStr = (val1, val2) => {
    (typeof val1 === 'number' && typeof val2 == 'number') ?
        console.log(val1, val2) : console.log("Inputs are strings");
};
addNumOrStr(6, 3);
let x = true;
console.log(x);
