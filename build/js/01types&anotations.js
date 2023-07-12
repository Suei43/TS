"use strict";
let firstname = 'raphael';
console.log(firstname);
let myname = "folarin";
let myage = 17;
let myarray = ['folarin', 'raphael']; //str can oly have elements of type str
let secarray = ['suei', true, false, 200]; // arr can have only str/num/boolean
let thirdarr = [123]; //only one position is expected of either type str or num
let fourtharr = ['suei', 123]; //tuple - string datatype per position
var days;
(function (days) {
    days[days["Mon"] = 0] = "Mon";
    days[days["Tue"] = 1] = "Tue";
    days[days["Wed"] = 2] = "Wed";
    days[days["Thur"] = 3] = "Thur";
    days[days["Fri"] = 4] = "Fri";
    days[days["Sat"] = 5] = "Sat";
    days[days["Sun"] = 6] = "Sun";
})(days || (days = {}));
console.log(days.Sat);
console.log(myarray);
const student1 = {
    name: 'fola',
    matricno: 29098,
    isPresent: true
};
let user1 = {
    name: 'chris',
    age: 16,
    phone: '2344'
};
console.log([user1, student1]);
let matricnum = 180;
