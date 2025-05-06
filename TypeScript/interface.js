"use strict";
const person = {
    name: "Shrenik",
    age: 21,
    greet() {
        console.log(`I'm ${this.name} and I'm ${this.age} years old.`);
    }
};
person.greet();
