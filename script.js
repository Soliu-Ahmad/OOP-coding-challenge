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
myCar1.accelerate();
myCar1.accelerate();
myCar1.accelerate();
myCar1.break();
myCar1.accelerate();
myCar1.accelerate();
myCar1.break();


const myCar2 = new Car2('Mecedes', 95);
myCar2.accelerate();
myCar2.accelerate();
myCar2.accelerate();
myCar2.break();
myCar1.break();
myCar2.accelerate();

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
    // 1. Public fields
    lacale = navigator.language;
    // 2. private fields
    #movements = [];
    #pin

    constructor(owner, currency, pin,) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;


        console.log(`thanks for banking with us ${this.owner}`)
    }

    // 3. public method
    createUsername() {
        return this.owner.toUpperCase().split('').slice(0, 2).join('');
    }

    deposit(value) {
        this.#movements.push(value);
        return this;
    }

    withdraw(value) {
        // return this.movements.push(-value);
        this.deposit(-value);
        return this;
    }
    // 4. private method
    #approvedLoan() {
        return true;
    }

    requestLoan(value) {

        if (this.#approvedLoan()) {
            console.log('loan approved')
            return this.deposit(value)
        } else {
            console.log('get out here!')
        }

        return this;
    }

    get getBalance() {
        return this.#movements.reduce((accum, el) => el + accum, 0)
    }

    get getMovements() {
        return this.#movements
    }
}
const acct1 = new Account('micheal', 'USD', 1111);
console.log(acct1.createUsername());
acct1.deposit(500)
    .deposit(1000)
    .deposit(800)
    .withdraw(200)
    .deposit(2000)
    .withdraw(350)
    .withdraw(280)
    .deposit(400)
    .requestLoan(10000);
// console.log(acct1.#movements);
console.log(acct1.getMovements);
console.log(acct1.getBalance);
console.log(acct1);

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

const bmw = new Car('BMW', 120)
console.log(bmw);

const SUV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

SUV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

SUV.prototype.accelerate = function () {
    this.speed = this.speed + 20;
    this.charge = this.charge - 2;

    console.log(`${this.make} is goint at ${this.speed} with the battery percentage at ${this.charge}%`)
}

const bmwSUV = new SUV('BMW SUV', 140, 46);
console.log(bmwSUV)
bmwSUV.accelerate()
bmwSUV.accelerate()
bmwSUV.accelerate()
bmwSUV.accelerate()

/**
 * ASSIGNMENT
 * 1. Convert the code above (Function Constructor) to ES6 Class
 * 2. Create another instance of volvoSUV with speed of 130 at charge of 58%
 * 3. Write *brake* method in ES6 👇
 *      a. Speed will reduce by 10
 *      b. Charge will increase by 1
 * 4. Chain these two methods together to see the battery charge percentages
 * 
 * HINT: Don't forget to return *this* from each method...😏
 * 
 * You are FREE to create as many additional instances to the two above as you wish.
 * 
 * Goodluck 🍀
 */

// No 1.


class Suv extends Car {
    constructor(make, speed, charge) {
        super(make, speed)
        this.charge = charge;
    }

    accelerate() {
        this.speed += 20;
        this.charge -= 2;

        console.log(`${this.make} is going at ${this.speed} with the battery percentage at ${this.charge}%`)
    }

    break() {
        this.speed -= 10;
        this.charge += 1;

        console.log(`${this.make} is going at ${this.speed} with the battery percentage at ${this.charge}%`)
    }
}

const bmwSuv1 = new Suv('BMW', 140, 46);
console.log(bmwSuv1);
bmwSuv1.accelerate();
bmwSuv1.accelerate();
bmwSuv1.accelerate();
bmwSuv1.break();
bmwSuv1.break();
bmwSuv1.break();

const volvoSuv = new Suv('volvo Suv', 130, 58);
console.log(volvoSuv);
volvoSuv.break();
volvoSuv.break();
volvoSuv.break();
volvoSuv.accelerate();
volvoSuv.accelerate();
volvoSuv.accelerate();
volvoSuv.accelerate();


// No 2.

class Motor extends Car {
    constructor(make, speed, charge) {
        super(make, speed)
        this.charge = charge;
    }

    // methods

    break() {
        this.speed -= 10;
        this.charge += 1
        console.log((`${this.make} is going at ${this.speed} with the battery percentage at ${this.charge}%`))
    }

}

const myMotor1 = new Motor('VOLVO SUV', 130, 58);
console.log(myMotor1);
myMotor1.break();
myMotor1.break();
myMotor1.break();
myMotor1.break();
myMotor1.break();