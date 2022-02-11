function greet(name?:string){
    console.log(`${name!.toUpperCase()}`);
}
// runtime error
greet('')


const myName = 0
// console.log(myName.touppercase());


// double assertion
const myName1 = 0 as any as string
console.log(myName1.toUpperCase());

