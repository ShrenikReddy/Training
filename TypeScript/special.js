"use strict";
let dynamicVar = "Hello";
dynamicVar = 42;
dynamicVar = { key: "value" };
let uncertainVar = "Hello";
if (typeof uncertainVar === "string") {
    console.log(uncertainVar.toUpperCase()); // Safe 
}
function throwError(message) {
    throw new Error(message);
}
function logMessage(message) {
    console.log(message);
}
let emptyValue = null;
let missingValue = undefined;
let objVar = { name: "TypeScript" };
console.log(dynamicVar, emptyValue, missingValue, objVar);
