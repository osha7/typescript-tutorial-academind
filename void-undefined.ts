

function add(n1: number, n2: number): number { //explicitly define what type will be returned
    return n1 + n2;
};

// ----------------------------------------------------------------------------------

// void return type:

// you should let typescript infer the type, unless you have an explicit reason:
// function add2(n1: number, n2: number) { 
//     return n1 + n2;
// };


// function printResult(num: number) { // returns a type of 'void'
//     console.log('Result: ' + num); //concat to one long string
// };

// printResult(add(5, 12));



//  undefinded type:

function add2(n1: number, n2: number) { 
    return n1 + n2;
};


function printResult(num: number): void { // you don't wan't to return undefined here, TS will throw an error
    console.log('Result: ' + num); 
};

function printResult2(num: number): undefined { // rare use case
    console.log('Result: ' + num); 
    return;
};

console.log(printResult(add(5, 12))); // -> returns undefined type

let someValue: undefined; // <- ok, but not useful


