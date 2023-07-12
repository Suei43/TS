let firstname = 'raphael';
console.log(firstname);
let myname: string = "folarin";
let myage: number = 17

let myarray: string[] = ['folarin','raphael'] //str can oly have elements of type str
let secarray: (string | number | boolean)[] = ['suei', true, false, 200] // arr can have only str/num/boolean
let thirdarr: [string | number] = [123] //only one position is expected of either type str or num
let fourtharr: [string, number] = ['suei', 123] //tuple - string datatype per position

enum days{
    Mon,Tue,Wed,Thur,Fri,Sat,Sun
}

console.log(days.Sat)
console.log(myarray)

interface Student{
    name: string,
    matricno: number,
    dob?: string,
    isPresent?: boolean
}

const student1: Student = {
    name: 'fola',
    matricno: 29098,
    isPresent: true
}

type User = {
    name: string,
    age: number,
    phone: string
}

let user1: User = {
    name: 'chris',
    age: 16,
    phone: '2344'
}
console.log([user1, student1])


//TYPE ALIASES
type stringOrNumber = string | number
let matricnum: stringOrNumber = 180
