"use strict";
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
function add(n1, n2) {
    return n1 + n2;
}
;
function printResult(num) {
    console.log('Result: ' + num);
}
;
// enforcing parameters:
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
;
printResult(add(5, 12));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
