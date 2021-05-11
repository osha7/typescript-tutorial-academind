let userInput: unknown; // we don't know what the user will enter (string, number, etc)
let userName: string;

userInput = 5;
userInput = 'Osha';
userName = userInput; //ts throws error bc it's not a given that userInput will be type string

// -----------------------------------------------------------------------------------------
let userInput1: any; // we don't know what the user will enter (string, number, etc)
let userName1: string;

userInput1 = 5;
userInput1 = 'Osha';
userName1 = userInput1

// -----------------------------------------------------------------------------------------

let userInput2: unknown;
let userName2: string;

userInput2 = 5;
userInput2 = 'Osha';
if (typeof userInput2 === 'string') { // check type first to assign unknown value to fixed type
    userName2 = userInput2; 
}
