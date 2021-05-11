var userInput2;
var userName2;
userInput2 = 5;
userInput2 = 'Osha';
if (typeof userInput2 === 'string') {
    userName2 = userInput2;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An Error Occurred!', 500);
