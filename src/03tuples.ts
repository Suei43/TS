//DESTRUCTURING TUPLES

let myTuple: [string, number] = ['Hello', 123];
const [one, two] = myTuple
console.log(one)

const myTuple2: [string, number] = myTuple;
console.log(myTuple2);

//ENUMS
enum myEnum {
    North,
    South,
    East,
    West
}

let currentDirection: myEnum = myEnum.South;
console.log(currentDirection);