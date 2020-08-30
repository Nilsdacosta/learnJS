// En JS nous déclarons une variable grâce à Let

let age = 26;

let name = "Nils";

// On peut réaffecter une variable en l'appellant de nouveau mais sans la redéclarer avec let

age = 27;

// Nous pouvons effectuer des opérations sur les variables

let totalCDs = 12;
let totalVinyls = 6;
let totalMusics = totalCDs + totalVinyls;

let cookiesInJar = 10;
let cookiesRemoved = 2;
let cookiesLeftInJar = cookiesInJar - cookiesRemoved;

// Pour effectuer directement une opération sur une variable, il suffit de mettre l'operateur souhaité juste avant le =

cookiesInJar += 2; // Il y aura donc 12 cookiesInJar

// Il existe un raccourci pour ajouter ou soustraire 1 ( incrément ou décrement)

cookiesInJar++;
cookiesInJar--;