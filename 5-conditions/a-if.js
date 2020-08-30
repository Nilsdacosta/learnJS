// Les conditions nous permettent de décider grâce à un programme si le script suit tel ou tel voie
let userIsLogIn = false;

if(userIsLogIn){
    console.log('Utilisateur bien connecté !')
}else{
    console.log('Attention ! Utilisateur non connecté !')
}

// Le scope des variables !! Jusqu'où accéder aux différentes variables existantes

let userIsLogOut = true;

if(UserIsLogOut){
    let welcomeMessage = "Utilisateur non connecté";
}else{
    let welcomeMessage = 'Bienvenue'
}

console.log(welcomeMessage); // On aura ici une erreur puisque welcomeMessage n'éxiste que dans la condition. Il faut déclarer la variable avant le bloc if.