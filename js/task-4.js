
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return `Знято ${amount} грн. Залишок на рахунку: ${this.balance} грн.`
        } else {
           return 'Недостатньо коштів на рахунку';
        }
    }
    deposit(amount) {
        this.balance += amount;
        return `Поповнено ${amount} грн. Залишок на рахунку: ${this.balance} грн.` 
    }
    checkBalance() {
        return  `Залишок на рахунку: ${this.balance} грн.`
    }
}
    const myAccount = new BankAccount('123', 2000);
    console.log(myAccount.withdraw(500)); // Знято 500 грн. Залишок на рахунку: 1500 грн.
    console.log(myAccount.withdraw(2000)); // Недостатньо коштів на рахунку
    console.log(myAccount.deposit(1000)); // Поповнено 1000 грн. Залишок на рахунку: 2500 грн.
    console.log(myAccount.checkBalance()); // Залишок на рахунку: 2500 грн.

