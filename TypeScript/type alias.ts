type Address = {
    street: string;
    city: string;
    zipCode: number;
};

type User = {
    name: string;
    age: number;
    address: Address;
};

const user: User = {
    name: "Shrenik Reddy",
    age: 21,
    address: {
        street: "DD Colony",
        city: "Hyderabad",
        zipCode: 500013
    }
};

console.log(user);