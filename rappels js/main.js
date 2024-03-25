// ES 5

function Jedi(prenom) {
    this.prenom = prenom;
    console.info(this);
}

Jedi('Luke'); // this: Window
const jedi = new Jedi('Leia'); // this: le jedi

function DarkJedi(prenom, energieMal) {
    this.prenom = prenom;
    this.energieMal = energieMal;

    console.info(this);
}

const anakin = DarkJedi.bind(jedi, 'anakin', 100);
anakin();

// ES 6 + > 

// arrow 
const maFunction = () => { // la arrow casse le changement du this, on garde l'appelant, ici le Window
    console.info('this', this); 
}
maFunction();


// Promise 
const callbackAExecuter = (resolve, reject) => {
    // un gros calcul
    // synchrone de base
    setTimeout(() => {
        resolve('ah que johny');    
    }, 0);
}
const promise = new Promise(callbackAExecuter)
                .then(item => console.info(item));

// class Wookiee {

// }

// let wookiee = new Wookiee();
// wookiee = '1';