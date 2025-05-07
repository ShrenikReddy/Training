"use strict";
const employee = {
    name: "Shrenik",
    role: "UI Developer",
    experience: 1,
    work() {
        console.log(`${this.name} is working as a ${this.role} with ${this.experience} year(s) of experience.`);
    }
};
employee.work();
