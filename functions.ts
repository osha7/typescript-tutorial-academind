// function add(n1: number, n2: number) { 
//     return n1 + n2;
// };

// function printResult(num: number): void { // you don't wan't to return undefined here, TS will throw an error
//     console.log('Result: ' + num); 
// };

// // let combineValues: Function;

// // combineValues = add;
// // //  conbineValues = 5;  // TS throws an error bc 5 is not a function
// // combineValues = printResult; // TS doesn't catch all the errors with this


// // console.log(combineValues(8, 8)); //return is Result: 8  AND!!! undefined (bc there are 2 args)

// let combineValues: (a: number, b: number) => number; //accept any function that takes 2 numbers and returns a number

// // combineValues = printResult; // now TS gives the correct errors
// combineValues = add;

// console.log(combineValues(8, 8));




function add(n1: number, n2: number) { 
    return n1 + n2;
};

function printResult(num: number): void { 
    console.log('Result: ' + num); 
};

// enforcing parameters:
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) { // callback should be a function that might not return anything, but does accept a number
    const result = n1 + n2;
    cb(result); 
};

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number; 

combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => { //anonymous function
    console.log(result);
}); 
