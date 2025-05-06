type Car = {
    brand: string;
    model: string;
    year: number;
};

function getCarDetail(car: Car, key: keyof Car): string {
    return `Car ${key}: ${car[key]}`;
}

const myCar: Car = { brand: "BMW", model: "M340i", year: 2023 };
console.log(getCarDetail(myCar, "model"));
console.log(getCarDetail(myCar, "year"));