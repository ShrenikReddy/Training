"use strict";
function findUser(id) {
    if (typeof id === "string") {
        return `Searching by username: ${id}`;
    }
    else {
        return `Searching by user ID: ${id}`;
    }
}
console.log(findUser("Shrenik123"));
console.log(findUser(101));
