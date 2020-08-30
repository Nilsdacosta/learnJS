// while pour continuer jusqu'à ce qu'on dise d'arrêter

// Tant qu'une condition est vraie, elle continue

let seatsLeft = 10;
let passengersStillToBoard = 11;

let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
    passengersBoarded++; // un passager embarque
    passengersStillToBoard--; // donc il y a un passager de moins à embarquer
    seatsLeft--; // et un siège de moins
}

console.log(passengersBoarded); // imprime 8, car il y a 8 passagers pour 10 sièges
console.log(passengersStillToBoard);