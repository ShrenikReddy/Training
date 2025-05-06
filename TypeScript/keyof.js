"use strict";
function getCarDetail(car, key) {
    return `Car ${key}: ${car[key]}`;
}
const myCar = { brand: "BMW", model: "M340i", year: 2023 };
console.log(getCarDetail(myCar, "model"));
console.log(getCarDetail(myCar, "year"));
