"use strict";
// const person = {
//     name: 'Osha',
//     age: 43
// };
// // console.log(person.nickname);
// console.log(person.name);
// not optimal, but just to see what's going on for object type:
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Osha',
//     age: 43
// };
// console.log(person.name);
// const person = {
//     name: 'Osha',
//     age: 43,
//     hobbies: ['Sports', 'Cooking'] // typescript infers that this hobbies array is type: string
// };
// // if you need to have more than 1 type in an array, use type: any 
// let favoriteThings: any[];
// favoriteThings = ['Sports', 1]
// console.log(person.name);
// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
//     console.log(hobby.map()) // map does not exist on type: string 
//     // and Typescript inference lets us know with an error, 
//     // if it was hobbies (type: array) TypeScript would know it was alright
// };
// explicit type assignment":
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // tuple -> 
//     // array of exactly 2 elements, [0] -> number, [1] -> string
// } = {
//     name: 'Osha',
//     age: 43,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };
// person.role.push('admin') // -> BEWARE TypeScript can't catch this error -> 
// doesn't know to throw error when .push() on to a tuple
// const person = {
//     name: 'Osha',
//     age: 43,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'] // implicitly knows that role is number | string but not that it is a tuple
// };
// let favoriteThings: any[];
// favoriteThings = ['Sports', 1]
// console.log(person.name);
// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; // with enums values are typically all uppercase
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR };
// enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200 };
var person = {
    name: 'Osha',
    age: 43,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
var favoriteThings;
favoriteThings = ['Sports', 1];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
;
if (person.role === Role.ADMIN) {
    console.log('Person is admin');
}
;
