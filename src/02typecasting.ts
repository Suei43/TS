//Basically youre asserting the type you expect to be returned

type type1 = number
type type2 = string | number

let a:type2 = 'hi'
let b = a as type2
let c = a as 'hi'

console.log(typeof c)

let addNumOrStr = (val1: type2, val2:type2): void => {
    (typeof val1 === 'number' && typeof val2 == 'number')? 
    console.log(val1,val2) : console.log("Inputs are strings")
}
addNumOrStr(6,3)

let x = <boolean> true
console.log(x)