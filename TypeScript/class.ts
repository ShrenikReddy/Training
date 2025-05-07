class Animal {
    constructor(public name: string) {}

    speak(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name);
    }

    speak(): void {
        console.log(`${this.name} barks! Breed: ${this.breed}`);
    }
}

let myPet = new Dog("Buddy", "Golden Retriever"); 
myPet.speak(); 