// simulates basic banking operations such as creating an account, depositing money, and withdrawing money using functions in js


let bankAccount = {
    id: "",
    name: "",
    balance: 0,
};


function createAccount(id, name, initialDeposit) {
    bankAccount.id = id;
    bankAccount.name = name;
    bankAccount.balance = initialDeposit;
    console.log(`Account holder id is: ${id}`);
    console.log(`Account Holder name is: ${name}`);
    console.log(`Initial Balance is: ${initialDeposit}`)
}

function checkBalance() {
    console.log(`Account balance: ${bankAccount.balance}`);
}


function deposit(amount) {
    if (amount > 0) {
        bankAccount.balance += amount;
        console.log(`Deposited amount is: ${amount}`);
        console.log(`New balance is: ${bankAccount.balance}`)
    } else {
        console.log("Deposit amount must be greater than zero.");
    }
}


function withdraw(amount) {
    if (amount > 0 && amount <= bankAccount.balance) {
        bankAccount.balance -= amount;
        console.log(`Withdrew amount is: ${amount}`);
        console.log(`New remaining balance is: ${bankAccount.balance}`);
    } else {
        console.log("Insufficient funds or invalid amount.");
    }
}




createAccount("01", "Aanand", 1000);
checkBalance();
deposit(500);
withdraw(200);



