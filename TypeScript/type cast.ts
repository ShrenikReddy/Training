function processInput(value: unknown) {
    if (typeof value === "string") {
        console.log(`String length: ${(value as string).length}`);
    } else if (typeof value === "number") {
        console.log(`Number squared: ${(value as number) ** 2}`);
    } else {
        console.log("Unsupported type");
    }
}
processInput("I'm Shrenik");
processInput(10);
processInput('++');