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
console.log("-Employees Array");
for (let i = 0; i < employee.length; i++) {
    console.log(`--Employee ${i + 1}: ${employee[i]}`);
}
//Unions
let pid = 22;
pid = "22";
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
    name: "John",
};
// Casting
let cid = 1;
// let customerId = <number>cid //==> This is one way to do type assertion
let customerId = cid; //==> This is another way to do type assertion
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(`addNum(1, 2) = ${addNum(1, 2)}`);
//Void
function voidFunction(msg) {
    console.log(`Message from the function: <<${msg}>>`);
}
voidFunction("Hello Zagaz");
const user1 = {
    id: 1,
    name: "Zagaz",
};
//Changing values
/*user1.id = 1000*/ //==> This is not allowed because id is a readonly property
user1.name = "Zagaz Company";
console.log(`user1: ${user1.id}`);
console.log(`user1: ${user1.name}`);
console.log(`user1: ${user1.age}`); // This will return undefined because age is an optional property
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mult = (x, y) => x * y;
const div = (x, y) => x / y;
const mod = (x, y) => x % y;
console.log(`add(1, 2) = ${add(1, 2)}`);
console.log(`sub(1, 2) = ${sub(1, 2)}`);
console.log(`mult(1, 2) = ${mult(1, 2)}`);
console.log(`div(1, 2) = ${div(1, 2)}`);
console.log(`mod(1, 2) = ${mod(1, 2)}`);
// Classes
class Person {
    constructor(name) {
        // a 5 digits random number
        let randomId = Math.floor(Math.random() * 100000) + 1;
        this.id = randomId;
        this.name = name;
        this.register();
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const zagaz = new Person("LaForge");
const jhondoe = new Person("Worf");
console.log("Classes");
console.log(`-ID: ${zagaz.id}`);
console.log(`-Name: ${zagaz.name}`);
console.log("Jhon Doe Created");
console.log(`${jhondoe.id}: ${jhondoe.name}`);
jhondoe.name = "Johana Doe";
console.log(`John Doe changed to: <<Id:${jhondoe.id}: name: ${jhondoe.name}>>`);
console.log(jhondoe.register());
class Employee extends Person {
    constructor(name, position) {
        super(name);
        this.position = position;
    }
}
const emp = new Employee("Picard", "Captain");
console.log("This is child class extended from person");
console.log(`-ID: ${emp.id}`);
console.log(`-Employee: ${emp.name}`);
console.log(`-Position: ${emp.position}`);
console.log(`-Method: ${emp.register()}`);
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let stringArray = getArray(["Picard", "Data", "Troy", "LaForge", "Worf", "Ricker", "Ro", "Crusher", "Pulaski"]);
let numberArray = getArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
stringArray.push("O'Brien");
numberArray.push(10);
/*numberArray.push("Sisko");*/ //---> ERROR: Argument of type 'string' is not assignable to parameter of type 'number'
console.log(numberArray);
