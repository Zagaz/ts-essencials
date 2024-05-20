"use strict";
//Bsaic Types
let id = 5;
let company = "Zagaz";
let isPublished = true;
let x = "Hello Zagaz";
x = true; // This is allowed because x is of type any
let ids = [1, 2, 3, 4, 5];
/* ids.push('Hello') */ //==> This is not allowed because ids is of type number[]
ids.push(6); // This is allowed because ids is of type number[]
console.log(`ids: ${ids}`);
let arr = [1, true, "Hello"];
console.log(`arr: ${arr}`);
// Tuple
let person = [1, "Zagaz", true];
/* let person: [number, string, boolean] = [1, 'Zagaz', 'error'] */ //==> This is not allowed because the third element should be of type boolean
//Tuple array
let employee;
employee = [
    [0, "Ana"],
    [1, "Bruna"],
    [2, "Carlos"],
];
console.log('-Employees Array');
for (let i = 0; i < employee.length; i++) {
    console.log(`--Employee ${i + 1}: ${employee[i]}`);
}
//Unions 
let pid = 22;
pid = '22';
pid = 22;
console.log(`pid: ${pid}`);
//Enums 
var DirectionsNumbers;
(function (DirectionsNumbers) {
    DirectionsNumbers[DirectionsNumbers["Up"] = 1] = "Up";
    DirectionsNumbers[DirectionsNumbers["Down"] = 2] = "Down";
    DirectionsNumbers[DirectionsNumbers["Left"] = 3] = "Left";
    DirectionsNumbers[DirectionsNumbers["Right"] = 4] = "Right";
})(DirectionsNumbers || (DirectionsNumbers = {}));
console.log(`DirectionsNumbers.Up: ${DirectionsNumbers.Up}`); //==> 1
var DirectionsStrings;
(function (DirectionsStrings) {
    DirectionsStrings["Up"] = "UP";
    DirectionsStrings["Down"] = "DOWN";
    DirectionsStrings["Left"] = "LEFT";
    DirectionsStrings["Right"] = "RIGHT";
})(DirectionsStrings || (DirectionsStrings = {}));
console.log(`DirectionsStrings.Up: ${DirectionsStrings.Up}`); //==> UP
// Create an object of type User
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion 
let cid = 1;
// let customerId = <number>cid //==> This is one way to do type assertion
let customerId = cid; //==> This is another way to do type assertion
