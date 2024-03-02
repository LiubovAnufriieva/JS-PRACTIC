// "use strict";

// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello.bind(customer);

// greet(); // "Hello, Jacob!"
    


const cruiseControl = {
    speed: 0,
    brand: "Audi",
    accelerate() {
        this.speed += 10;
        console.log(`Автомобіль ${this.brand} прискорюється. Швидкість ${this.speed}`);
    },
    decrease() {
        if(this.speed <= 0) {
            console.log('Авто зупинилось');
            return;
        }
        this.speed -= 10;
        console.log(`Автомобіль ${this.brand} гальмує. Швидкість ${this.speed}`);
    }
}

cruiseControl.accelerate()
cruiseControl.accelerate()

cruiseControl.decrease()
cruiseControl.decrease()
cruiseControl.decrease()

console.log(cruiseControl);

