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


    accelerate() {
        const acc = this.speed + 10;
        console.log('For ' + this.make + ' ' + ' Accelerate increase by ' + acc);
    }

    break() {
        const br = this.speed - 5;
        console.log('For ' + this.make + ' Break Decrease by ' + br)
    }
}

class Car2 {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }


    accelerate() {
        const acc = this.speed + 10;
        console.log('For ' + this.make + " " + " Accelerate increase by " + acc);
    }

    break() {
        const br = this.speed - 5;
        console.log('For ' + this.make + ' Break Decrease by ' + br)
    }
}

const myCar1 = new Car1('BMW', 120);
myCar1.accelerate();
myCar1.break();

const myCar2 = new Car2('Mecedes', 95);
myCar2.accelerate();
myCar2.break();