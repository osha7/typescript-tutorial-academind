"use strict";
var userInput; // we don't know what the user will enter (string, number, etc)
var userName;
userInput = 5;
userInput = 'Osha';
userName = userInput; //ts throws error bc it's not a given that userInput will be type string
// -----------------------------------------------------------------------------------------
var userInput1; // we don't know what the user will enter (string, number, etc)
var userName1;
userInput1 = 5;
userInput1 = 'Osha';
userName1 = userInput1;
// -----------------------------------------------------------------------------------------
var userInput2;
var userName2;
userInput2 = 5;
userInput2 = 'Osha';
if (typeof userInput2 === 'string') { // check type first to assign unknown value to fixed type
    userName2 = userInput2;
}
