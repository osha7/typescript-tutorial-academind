// function add(n1, n2) {
//     return n1 + n2;  // will concatinate if either of our variables is a string
// }

// const number1 = 5;
// const number2 = 10.8;

// console.log(add(number1, number2));



// better written as:

// function add(n1: number, n2: number) {
//     return n1 + n2;  // will concatinate if either of our variables is a string
// }

// const number1 = 5;
// const number2 = 10.8;

// console.log(add(number1, number2));




// Javascript 'typeof' Operator:
// not necessary with typescript:

// function add(n1: number, n2: number) {
//     // checking outputs in just JavaScript:
//     if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//         throw new Error('Incorrect input!');
//     }
//     return n1 + n2;  // will concatinate if either of our variables is a string
// }

// const number1 = '5';
// const number2 = 10.8;

// console.log(add(number1, number2));


function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2
    if (showResult) {
        // console.log(phrase + n1 + n2) // can't do this bc it will concat all to a string again
        console.log(phrase + result)
    } else {
        return result;  // will concatinate if either of our variables is a string
    }
}

const number1 = 5;
const number2 = 10.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);  //--> Result is: 15.8
