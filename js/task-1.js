

// Типів транзакції всього два.
// Можна покласти чи зняти гроші з рахунку.



const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
};

// Кожна транзакція - це обєкт із властивостями: id, type, amount

const account = {
    // Поточний баланс рахунку
    balance: 0,

    // історія транзакцій
    transactions: [],

    // Метод створює та повертає обєкт транзакції.
    // Приймає суму та тип транзакції.
    createTransaction(amount, type) {
        const obj = { id: amount, amount, type };
        this.transactions.push(obj);
     },
    
    // Метод, що відповідає за додавання суми до балансу.
    // Приймає суму транзакції.
    // Викликає createTransaction для створення обєкта транзакції
    // після чого додає його до історії транзакцій.
    deposit(amount) {
        this.balance += amount;
        this.createTransaction(amount, Transaction.DEPOSIT);
    },
    
    // Метод, що відповідає за зняття суми з балансу.
    // Приймає суму транзакції.
    // Викликає createTransaction для створення обєкта транзакції
    // після чого додає його до історії транзакцій.
    // якщо amount більше ніж поточний баланс, виводить повідомлення "недостатньо коштів"
    withdraw(amount) { 
        if (this.balance < amount) {
            console.log("недостатньо коштів");
            return;
        }
        this.balance -= amount;
        this.createTransaction(amount, Transaction.WITHDRAW);
    },
    
    // Метод повертає поточний баланс.
    getBalance() { 
        return this.balance;
    },
    
    // Метод, який шукає та повертає обєкт транзакції по id.
    getTransactionDetails(id) { 
        for (const element of this.transactions) {
            if (element.id === id) {
                return element;
            }
        }
    },
    
     // Метод повертає кількість коштів певного типу транзакції 
    // з усієї історії транзакцій.
    getTransactionTotal(type) {
        const res = [];
        for (const element of this.transactions) {
            if (element.type === type) {
                res.push(element);
             }
        }
        return res;
    },

};

account.deposit(200);
account.deposit(500);
account.deposit(1200);
account.withdraw(100);
account.withdraw(500);

//console.log(account.getTransactionDetails(100));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));

console.log(account.balance);
console.log(account);