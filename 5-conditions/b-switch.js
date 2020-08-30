// Switch fonctionne comme if mais permet de vérifier la valeur d'une variable parmis une liste de valeurs

let firstUser = {
    name: "Will Alexander",
    age: 33,
    accountLevel: "normal"
};

let secondUser = {
    name: "Sarah Kate",
    age: 21,
    accountLevel: "premium"
};

let thirdUser = {
    name: "Audrey Simon",
    age: 27,
    accountLevel: "mega-premium"
};

switch (thirdUser.accountLevel) { // Pour le niveau du compte du premier utilisateur, 
    case 'normal': // Dans le cas ou ce niveau serait == à 'normal'
        console.log('You have a normal account!'); // Instruction à éxecuter
        break; // Met un terme à l'éxec avant de passer au cas potentiel suivant
    case 'premium':
        console.log('You have a premium account!');
        break;
    case 'mega-premium':
        console.log('You have a mega premium account!');
        break;
    default:
        console.log('Unknown account type!');
}