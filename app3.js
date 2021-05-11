// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//     var result = n1 + n2;
//     if (showResult) {
//         console.log(phrase + result);
//     }
//     else {
//         return result; 
//     }
// }
// union types:
// function combine(input1: number | string | boolean , input2: number | string) { //allows flexibility of parameters
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number') { //runtime check
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString()
//     }
//         return result; 
// };
// // const combinedAges = combine(30, 26);
// const combinedAges = combine('Max', 'Anna');
// console.log(combinedAges);
// literal types:
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2; // + --> adding this before the variable name CONVERTS THE VALUE TO A NUMBER
    }
    else {
        result = input1.toString() + input2.toString();
    }
    ;
    return result;
    // if (resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }; 
}
;
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
