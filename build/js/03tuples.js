"use strict";
//DESTRUCTURING TUPLES
let myTuple = ['Hello', 123];
const [one, two] = myTuple;
console.log(one);
const myTuple2 = myTuple;
console.log(myTuple2);
//ENUMS
var myEnum;
(function (myEnum) {
    myEnum[myEnum["North"] = 0] = "North";
    myEnum[myEnum["South"] = 1] = "South";
    myEnum[myEnum["East"] = 2] = "East";
    myEnum[myEnum["West"] = 3] = "West";
})(myEnum || (myEnum = {}));
let currentDirection = myEnum.South;
console.log(currentDirection);
