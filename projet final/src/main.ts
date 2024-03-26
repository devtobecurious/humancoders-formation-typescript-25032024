// import {Game} from './game';
// import {Player, Player2} from './player';
// import Character, {Mandragor} from './character';
// import { LightSaberWeapon } from './weapon';

// const titre = 'hello';

// const game = new Game(1, new Date());

// const player = new Player(0, 'plouf', new Date(), 12);
// player.addGame(game);

// const perso = new Character(0, 'Han');
// perso.setDefaultWeapon(new LightSaberWeapon('violet', 'sabre 001'));

interface WithPoint {
    point: number;
}

class Life implements WithPoint {
    point = 100;
}

// function afficherLife(life: Life): void {
//     console.info(life.point);
// }
function afficherLife({point}: { point: number }): void { //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    console.info(point);
}

let life: Life = new Life();
life.point = 150;

afficherLife(life); // ça compile !

const lifeLiteral = { // objet literal / objet json / objet singleton
    point : 100
}

const life2: Life = { // objet literal / objet json / objet singleton
    point : 100
}

life = life2;

class DeuxiemeClass {
    point = 18;
}

let deuxieme: DeuxiemeClass = life;

afficherLife(life2);
afficherLife(deuxieme);


