"use strict";
function processInput(value) {
    if (typeof value === "string") {
        console.log(`String length: ${value.length}`);
    }
    else if (typeof value === "number") {
        console.log(`Number squared: ${value ** 2}`);
    }
    else {
        console.log("Unsupported type");
    }
}
processInput("I'm Shrenik");
processInput(10);
processInput('++');
