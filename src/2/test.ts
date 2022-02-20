import { sampletext, sampleFunction } from "./sample.js";

export function test1() {
  return "test1";
}

export function test2() {
  return { value: "test2" };
}

const a = sampleFunction();
const b = sampletext;

let flag: boolean = false;
let decimal: number = 256;
let binary: number = 0b0000;
let octal: number = 0o123;

let color: string = "white";
color = "Black";

let list1: number[] = [1];
let list2: Array<number> = [1];

let x: [string, number];
x = ["1", 1];

// error
// x =[10,'1']
x[0].substring(1);

// error
// x[1].substring(1)

// x[3] = 'world'
// console.log(x[5].to);

let whatever: any = 0;
whatever = "1";
whatever = false;

// const certainlyNumbers : number[] = ['1']
const maybeNumber: any = ["1"];
const probablyNumber: unknown = ["1"];

// certainlyNumbers[0].toFixed(1)
maybeNumber[0].toFixed(1);
probablyNumber[0].toFixed(1);

function logger(m: string): void {
  console.log(m);
}

let log: void = undefined;

let u: undefined = undefined;
let n: null = null;

function error(m: string): never {
  throw new Error(m);
}

function infiniteLoop(): never {
  while (true) {}
}

let obj: {};
let objType: object;

type Tail = "Tail";
type Wing = "Wing";

type Dog = { tail: Tail; bard: () => void };
type Bird = { wing: Wing; fly: () => void };
type Kimera = Dog & Bird;

function returnNever(): never {
  throw new Error();
}

let unexistence: string & number & boolean = returnNever();

// error
// let problematicNumber: string & number = "1";

let value: boolean | number | string;
value = false;
value = 1;
value = "";

let numberOrStrings: (number | string)[];
numberOrStrings = [0, "1"];
numberOrStrings = [0];

// let nullableString: string | null;
// nullableString = null;
// nullableString = "1";

let nullableString: (string | null)[];
nullableString.push("");
nullableString.push(null);
// error
// nullableString.push(false);

let myName: "Taro";
myName = "Taro";
myName.toLowerCase();
// error
// myName = '1'

let zero: 0;
zero = 0;
// error
// zero = 1

let bit: 8 | 16 | 32 | 64;
bit = 8;

let truth: true;
truth = true;

let asString: string = "";
let value1: typeof asString;
value1 = "";
// error
// value1 = 0;

let myObject = { foo: "foo" };
let anotherObject: typeof myObject = { foo: "" };
myObject.foo = "";
anotherObject.foo = "";

type SomeType = {
  aa: string;
  bar: string;
  baz: string;
};

let someKey: keyof SomeType;
someKey = "aa";

const myObject1 = {
  foo: "foo",
  bar: "bar",
  baz: "baz",
};

let myObjectKey: keyof typeof myObject1;
myObjectKey = "foo";
// error
// myObjectKey = "aaa";

const objectmMock = { aa: "aa", bb: 22, cc: true };
const objectTest: typeof objectmMock = { aa: "11", bb: 33, cc: false };

const indexedObject = {
  0: 0,
  1: 1,
};

let indexedKey: keyof typeof indexedObject;
indexedKey = 1;

// let someValue: any = "this is any";
// let strLength: number = (<string>someValue).length;

let someValue: any = "this is any";
let strLength: number = (someValue as string).length;
