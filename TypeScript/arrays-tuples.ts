function processNumbers(numbers: number[]): { sum: number; avg: number } {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const avg = sum / numbers.length;
    return { sum, avg };
}

let scores: number[] = [80, 90, 100, 70, 60];
console.log(processNumbers(scores));

let member: [string, number, string] = ["Shrenik", 21, "UI Developer"];
console.log(`member: ${member[0]}, Age: ${member[1]}, Role: ${member[2]}`);