//Bsaic Types
let id: number = 5;
let company: string = "Zagaz";
let isPublished: boolean = true;

let x: any = "Hello Zagaz";
x = true; // This is allowed because x is of type any

let ids: number[] = [1, 2, 3, 4, 5];

/* ids.push('Hello') */ //==> This is not allowed because ids is of type number[]
ids.push(6); // This is allowed because ids is of type number[]
console.log(`ids: ${ids}`);

let arr: any[] = [1, true, "Hello"];
console.log(`arr: ${arr}`);

// Tuple
let person: [number, string, boolean] = [1, "Zagaz", true];
/* let person: [number, string, boolean] = [1, 'Zagaz', 'error'] */ //==> This is not allowed because the third element should be of type boolean

//Tuple array
let employee: [number, string][];
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
let pid: string | number = 22;
pid = "22";
pid = 22;
console.log(`pid: ${pid}`);
//Enums
enum DirectionsNumbers {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(`DirectionsNumbers.Up: ${DirectionsNumbers.Up}`); //==> 1

enum DirectionsStrings {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(`DirectionsStrings.Up: ${DirectionsStrings.Up}`); //==> UP

//Objects
// Define the type of the object properties
type User = {
  id: number;
  name: string;
};
// Create an object of type User
const user: User = {
  id: 1,
  name: "John",
};

// Casting
let cid: any = 1;
// let customerId = <number>cid //==> This is one way to do type assertion
let customerId = cid as number; //==> This is another way to do type assertion

//Functions

function addNum(x: number, y: number): number /* Return */ {
  return x + y;
}

console.log(`addNum(1, 2) = ${addNum(1, 2)}`);

//Void

function voidFunction(msg: string | number): void {
  console.log(`Message from the function: <<${msg}>>`);
}

voidFunction("Hello Zagaz");

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number; // Optional property
}

const user1: UserInterface = {
  id: 1,
  name: "Zagaz",
};

//Changing values
/*user1.id = 1000*/ //==> This is not allowed because id is a readonly property
user1.name = "Zagaz Company";

console.log(`user1: ${user1.id}`);
console.log(`user1: ${user1.name}`);
console.log(`user1: ${user1.age}`); // This will return undefined because age is an optional property

// Interface with functions
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
const mult: MathFunc = (x: number, y: number): number => x * y;
const div: MathFunc = (x: number, y: number): number => x / y;
const mod: MathFunc = (x: number, y: number): number => x % y;

console.log(`add(1, 2) = ${add(1, 2)}`);
console.log(`sub(1, 2) = ${sub(1, 2)}`);
console.log(`mult(1, 2) = ${mult(1, 2)}`);
console.log(`div(1, 2) = ${div(1, 2)}`);
console.log(`mod(1, 2) = ${mod(1, 2)}`);

// Classes

class Person implements PersonInterface {
  name: string;
  id: number;

  constructor(name: string) {
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
//interfaces
interface PersonInterface {
  readonly id: number;
  name: string;
  age?: number;
  register(): string;
}

class Employee extends Person {
  position: string;

  constructor(name: string, position: string) {
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

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let stringArray = getArray<string>(["Picard" , "Data", "Troy", "LaForge", "Worf", "Ricker" , "Ro" , "Crusher", "Pulaski"]);
let numberArray = getArray<number>([1, 2, 3, 4, 5, 6, 7, 8, 9 ]);

stringArray.push("O'Brien");
numberArray.push(10);

/*numberArray.push("Sisko");*/ //---> ERROR: Argument of type 'string' is not assignable to parameter of type 'number'
console.log(numberArray);

