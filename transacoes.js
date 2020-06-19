const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction (operation) {
    user.transactions.push(operation)
    if (operation.type.toLowerCase() === "credit") {
        user.balance = user.balance + operation.value;
    } else if(operation.type.toLowerCase() === "debit") {
        user.balance = user.balance - operation.value;
    } else {
        console.log("Invalid Operation! Nothing added to the balance.")
    }
}

function getHigherTransactionByType (typeOfTransaction) {
    let higherTransaction = 0;
    if (typeOfTransaction.toLowerCase() === "credit") {
        for (let transaction of user.transactions) {
            if (transaction.value > higherTransaction && transaction.type.toLowerCase() === "credit") {
                higherTransaction = transaction.value; 
            }
        }
        return {type: typeOfTransaction, value: higherTransaction} 
    } else if(typeOfTransaction.toLowerCase() === "debit") {
        for (let transaction of user.transactions) {
            if (transaction.value > higherTransaction && transaction.type.toLowerCase() === "debit") {
                higherTransaction = transaction.value;
            }
        }
        return {type: typeOfTransaction, value: higherTransaction}
    } else {
        return console.log("Invalid transaction.")
    }
}

function getAverageTransactionValue() {
    let sum = 0;
    for(let transaction of user.transactions) {
        sum = sum + transaction.value
    }
    return sum / user.transactions.length
}

function getTransactionsCount() {
    let creditCounter = 0;
    let debitCounter = 0;
    for (let transaction of user.transactions) {
        if (transaction.type.toLowerCase() === "credit") {
            creditCounter = creditCounter + 1;
        } else {
            debitCounter = debitCounter + 1;
        }
    }
    return { credit: creditCounter, debit: debitCounter}
}


createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance);

getHigherTransactionByType("credit");
getHigherTransactionByType("debit"); 

getAverageTransactionValue();

getTransactionsCount();