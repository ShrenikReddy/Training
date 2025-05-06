interface Person {
    name: string;
    age: number;
    greet(): void;
}

const person: Person = {
    name: "Shrenik",
    age: 21,
    greet() {
        console.log(`I'm ${this.name} and I'm ${this.age} years old.`);
    }
};

person.greet();