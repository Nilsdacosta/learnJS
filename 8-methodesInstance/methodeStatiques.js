// Il éxiste des méthodes natives à JS

const randomNumber = Math.random(); // crée un nombre aléatoire sur l'intervalle [0, 1]

const roundMeDown = Math.floor(495.966); // arrondit vers le bas à l'entier le plus proche, renvoie 495

// On peut créer ses propres méthodes

class BePolite { // Ici pas besoin d'un constructeur puisque cette classe ne sera jamais instancié
    static sayHello() {
        console.log("Hello!");
    }
    static sayHelloTo(name) {
        console.log("Hello " + name + "!");
    }
    static add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
}

BePolite.sayHello(); // imprime "Hello!""
BePolite.sayHelloTo("Will"); // imprime "Hello Will!""
const sum = BePolite.add(2, 3); // sum = 5