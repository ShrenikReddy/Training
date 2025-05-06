"use strict";
function processNumbers(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const avg = sum / numbers.length;
    return { sum, avg };
}
let scores = [80, 90, 100, 70, 60];
console.log(processNumbers(scores));
let member = ["Shrenik", 21, "UI Developer"];
console.log(`member: ${member[0]}, Age: ${member[1]}, Role: ${member[2]}`);
