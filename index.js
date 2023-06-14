// Four PILLARS OF OOP
// 1 - Encapsulation
// We group related variables and functions that operate on them into objects.  
// - reduce complexity + increase resuability
// eg ..

// (Procedural)
let baseSalary = 3000;
let overtime = 10;
let rate = 20;

function getWag(salary, overtime, rate){
    return baseSalary + (overtime * rate);
}
// (OOP)
const employee = {
    baseSalary : 3000,
    overtime : 10,
    rate : 20,
    getWag(){
        return this.baseSalary + (this.overtime * this.rate);
    }
}


// 2 - Abstraction
// We can hide some of the properties and methods from the outside. So that will make the interface of the objects simpler.
// - reduce complexity + Reduce the impact of change.


// 3 - Inheritance
// Inheritance is a mechanism that allows you to eliminate the redundant code.


// 4 - Polymorphish
// Ploy - many 
//  Morphish - form
// - refactor ugly switch/case statements

