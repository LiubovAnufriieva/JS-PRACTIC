// Необхідно створити клас Hero, який представляє героя з гри. Клас повинен мати публічні властивості 
// name, level та health, що дозволить герою атакувати та відновлювати здоров'я видповідно. 
// Також створити функціонал для підрахунку створених героїв. 
// Властивість name має зберігати ім'я героя.
// Властивість level має зберігати рівень героя.
// Властивість health має зберігати поточний рівень здоров'я героя.
// Метод attack наносить пошкодження в розмір 10 одиниць.
// Метод heal додає до здоров'я героя 10 одиниць.

// class Hero {
//     static counter = 0; 
//     static addHero() {
//         Hero.counter += 1;
//         console.log(`Кількість створених регоїв ${Hero.counter}`);
//     }
//     #level;
//     constructor(name) {
//         this.name = name;
//         this.#level = 1;
//         this.health = 200;
//         Hero.addHero();
//     } 
//     attack() {
//         console.log(`Attack with 10 damage`);
//     }
//     heal() {
//         this.health += 10;
//     }
// }

// const bloodseker = new Hero('Bloodseker');
// const bloodseker1 = new Hero('Bloodseker');
// // bloodseker.attack();
// // console.log(bloodseker);
// // console.log(bloodseker.heal());
// // console.log(bloodseker);
// console.log('counter', Hero.counter);

// необхідно створити клас BankAccount, який представляє банківський рахунок. Клас повинен мати приватну властивість balance, яка представляє баланс рахунку. Клас повинен також мати публічні методи deposit та withdraw, які дозволяють здійснювати операції з депозитом та зняттям коштів з рахунку. При цьому balance повинна бути доступна ляше в межах класу BankAccount та його приватних методів. 

class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
 


}

const instance = new BankAccount() 
instance.deposit(100)
instance.deposit(200)
instance.withdraw(1000)
console.log(instance);