let dynamicVar: any = "Hello";
dynamicVar = 42;
dynamicVar = { key: "value" };

let uncertainVar: unknown = "Hello";
if (typeof uncertainVar === "string") {
    console.log(uncertainVar.toUpperCase()); // Safe 
}

function throwError(message: string): never {
    throw new Error(message);
}

function logMessage(message: string): void {
    console.log(message);
}

let emptyValue: null = null;
let missingValue: undefined = undefined;

let objVar: object = { name: "TypeScript" };

console.log(dynamicVar, emptyValue, missingValue, objVar);