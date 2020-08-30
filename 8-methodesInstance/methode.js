// Une méthode d'instance est une fonction dans une classe !

class BankAccount { // Création de la classe
    constructor(owner, balance) { // Création des paramètres attendus par la classe
        this.owner = owner;
        this.balance = balance;
    }
    
    showBalance() { // Création d'une fonction appartenant à la classe
        console.log("Solde: " + this.balance + " EUR");
    }
    
    deposit(amount) {
        console.log("Dépôt de " + amount + " EUR");
        this.balance += amount;
        this.showBalance();
    }
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Retrait refusé !");
        } else {
            console.log("Retrait de " + amount + " EUR");
            this.balance -= amount;
            this.showBalance();
        }
    }
}

const newAccount = new BankAccount("Will Alexander", 500); // Initialisation de la classe

newAccount.withdraw(50); // Utilisation de la méthode withdraw sur la classe newAccount