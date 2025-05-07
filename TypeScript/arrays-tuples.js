"use strict";
function processingNumbers(...numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const avg = sum / numbers.length;
    return { sum, avg };
}
let scores1 = [80, 90, 100, 70, 60];
console.log(processingNumbers(...scores1));
let member1 = ["Shrenik", 21, "UI Developer"];
let member2 = [...member1, "Senior"];
console.log(`member: ${member2[0]}, Age: ${member2[1]}, Role: ${member2[2]}, Title: ${member2[3]}`);
