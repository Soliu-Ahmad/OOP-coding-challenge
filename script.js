'use strict';
// 1. Use a constructor function to implement a Car.
// A car has a make and a speed property.
// The speed property is the current speed of the car in km / h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5,
// and log the new speed to the console;
// 4. Create 2 car objects and experiment with
//  calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km / h
// DATA CAR 2: 'Mercedes' going at 95 km / h

// GOOD LUCK 😀 
class Car1 {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    // methods

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    break() {
        this.speed -= 5;
        console.log((`${this.make} is going at ${this.speed} km/h`))
    }
}

class Car2 {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }


    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    break() {
        this.speed -= 5;
        console.log((`${this.make} is going at ${this.speed} km/h`))
    }

    get getSpeedUS() {
        return `${this.speed / 1.6} mi/h`;
    }

    set setSpeedUS(newSpeed) {
        return `${newSpeed * 1.6} mi/h`;
    }
}

const myCar1 = new Car1('BMW', 120);
// myCar1.accelerate();
// myCar1.accelerate();
// myCar1.accelerate();
// myCar1.break();
// myCar1.accelerate();
// myCar1.accelerate();
// myCar1.break();


// const myCar2 = new Car2('Mecedes', 95);
// myCar2.accelerate();
// myCar2.accelerate();
// myCar2.accelerate();
// myCar2.break();
// myCar1.break();
// myCar2.accelerate();

console.log(myCar1.getSpeedUS);
myCar1.setSpeedUS = 140;
console.log(myCar1);

// CHALLENGE 2
/***
 * 1. create class for account
 * 2. parameters: owner, pin, movement
 * 3. then with three (3) methods.
 */

class Account {
    constructor(owner, pin,) {
        this.owner = owner;
        this.pin = pin;
        this.movement = [];
    }

} 