let userInput2: unknown;
let userName2: string;

userInput2 = 5;
userInput2 = 'Osha';
if (typeof userInput2 === 'string') { 
    userName2 = userInput2; 
}

function generateError(message: string, code: number) { //utility function
    throw {message: message, errorCode: code}; 
} // this function returns never / never returns anything
//  the inferred type is void, but it is actually never

// to explicitly set type as never:
function generateError2(message: string, code: number): never { 
    throw {message: message, errorCode: code}; 
}

generateError('An Error Occurred!', 500);