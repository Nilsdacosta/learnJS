// Pour stocker un nombre important d'informations nous pouvons utiliser les arrays

let guests = [
    'Pierre',
    'Paul',
    'Jack'];

console.log(guests);
console.log(guests[1]);


// Type valeur = type primitif / type référence = objet et tableau

let guest = {
    name:"Nils Da Costa"
};

let guestStar = [guest];

guest.name = 'Sarah Connor';

console.log(guest);

// Il éxiste différent outil utile 

console.log(guests.length); // connaitre le nombre d'éléments dans le tableau

guests.push('Thomas'); // ajouter élément dans le tableau à la fin
guests.unshift('Chris'); // Ajouter élément au début
guests.pop(); // retirer le dernier élément

console.log(guests);