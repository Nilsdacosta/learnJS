// la boucle for sert a savoir "combien de fois ?"

let numberOfPassengers = 10;

for (let i = 0; i < numberOfPassengers; i++){
    console.log('Passager embarqué !');
}

console.log('Tous les passagers sont à bord !');


// pour utiliser for avec un tableau

const passengers = [
    "Will Alexander",
    "Sarah Kate'",
    "Audrey Simon",
    "Tao Perkington"
]

// Avec for ... in

for (let i in passengers) { // La boucle lira automatiquement le tableau passengers et i qui sera initié à 0 s'incrémentera automatiqueemnt de 1
    console.log("Embarquement du passager " + passengers[i]);
}

// Avec for ... of

for (let passenger of passengers) { // Ici passenger prendra directement la valeur de l'index de passengers
    console.log("Embarquement du passager " + passenger);
}

// Cette boucle est très utile pour les tableaux type objet

const passengerrs = [
    {
        name: "Will Alexander",
        ticketNumber: 209542
    },
    {
        name: "Sarah Kate",
        ticketNumber: 169336
    },
    {
        name: "Audrey Simon",
        ticketNumber: 779042
    },
    {
        name: "Tao Perkington",
        ticketNumber: 703911
    }
]

for (let passenger of passengerrs) {
    console.log('Embarquement du passager ' + passenger.name + ' avec le ticket numéro ' + passenger.ticketNumber);
}