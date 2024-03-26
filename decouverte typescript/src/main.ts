// import {Enemy, State} from './enemy'
// import Fighter from './fighter';
// import {Wookiee} from './wookiee'

// const enemy = new Enemy('Anakin', 0, new State());
// enemy.size = undefined;
// // enemy.size = null;
// enemy.size = 1;
// // enemy.size = 'coucou'; // ça compile pas

// const fighter: Fighter = new Wookiee('chewie');

// fighter.life = undefined;

import Fighter, {FighterWithDefense, IBelieveICanFly} from './fighter';


interface WithPoint {
    point: number;
}

class Life implements WithPoint {
    point = 100;
}

// function afficherLife(life: Life): void {
//     console.info(life.point);
// }
type WithPointT = {
    point: number
}

type WithPointWithPower = WithPointT & {
    power: number
}

const pointBis: WithPointWithPower = {
    point: 12,
    power: 20
}

// function afficherLife({point}: { point: number }): void { //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//     console.info(point);
// }

function afficherLife({point}: WithPointT): void { //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
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




/// Heritage d'interfaces
const bestFighter: FighterWithDefense = {
    defense: () => {
        console.info('je me defends');
    },
    attack: (enemy: Fighter) => {
        enemy.lifePoints -= 50;
    },
    fly: () => {
        console.info('je volllllleee');
    },
    life: 10,
    lifePoints: 150
}

const plane: IBelieveICanFly = bestFighter;
plane.fly();

