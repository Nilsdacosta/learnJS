// Une classe nous permet de créer par la suite plusieurs objet à partir d'une liste d'attributs

class Book {
    constructor(newTitle, newAuthor, newPages){ // constructor est un mot clé ou l'on va déclarer le nom de nos parametres (nos variables de la classe)
        this.title = newTitle; // this fait référence au titre du livre que l'on créera et qui sera donc égal au parametre qui sera déclaré au moment de l'initialisation de l'objet
        this.author = newAuthor;
        this.page = newPages;
    }
}

let myBook = new Book(
    "Ellana",
    "Pierre Bottero",
    250
);

let myOtherBook = new Book(
    "Eragon",
    "Unknown",
    450
);

console.log(myBook);
console.log(myOtherBook);