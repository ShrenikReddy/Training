class Person {
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }

    getDetails(): string {
        return `Person: ${this.name}`;
    }
}

class Directory {
    readonly category: string;
    private readonly people: Person[] = [];
    constructor(category: string) {
        this.category = category;
    }

    addPerson(name: string): void {
        const newPerson = new Person(name);
        this.people.push(newPerson);
    }

    listPeople(): void {
        console.log(`People in "${this.category}" Directory:`);
        this.people.forEach((person, index) => {
            console.log(`${index + 1}. ${person.getDetails()}`);
        });
    }
}
const myDirectory = new Directory("Friends List");
myDirectory.addPerson("Shrenik");
myDirectory.addPerson("Raju");
myDirectory.addPerson("Amit");
myDirectory.listPeople();