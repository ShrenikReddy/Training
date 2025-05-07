type ID = string | number;

function findUser(id: ID): string {
    if (typeof id === "string") {
        return `Searching by username: ${id}`;
    } else {
        return `Searching by user ID: ${id}`;
    }
}

console.log(findUser("Shrenik123"));
console.log(findUser(101));