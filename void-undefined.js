"use strict";
function add(n1, n2) {
    return n1 + n2;
}
;
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
function add2(n1, n2) {
    return n1 + n2;
}
;
function printResult(num) {
    console.log('Result: ' + num);
}
;
function printResult2(num) {
    console.log('Result: ' + num);
    return;
}
;
console.log(printResult(add(5, 12))); // -> returns undefined type
var someValue; // <- ok, but not useful
