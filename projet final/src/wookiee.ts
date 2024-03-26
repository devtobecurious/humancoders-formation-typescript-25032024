export type PlanetType = 'Tatooine' | 'Kaahhyyk' | 'Andor';
export type GetAttackValue = (sailor: Sailor) => number; // delegate

// const maMethod: GetAttackValue = (sailor: Sailor) => {
//     return 18;
// }
// const result = maMethod({ planet: 'Andor' });


export interface Sailor {
    planet: PlanetType
}

export interface WithLifePoint {
    point: number;
}

export interface Fighter extends WithLifePoint {
    attack(fighter: Fighter, getCostAttack: GetAttackValue): void;
}

export interface Wookiee extends Fighter, Sailor {
}

const wookiee: Wookiee = {
    point: 100,
    planet: 'Tatooine',
    attack: (fighter, getCostAttack) => {
        fighter.point -= getCostAttack(wookiee);
    }
}

const droide: Fighter = {
    point: 180,
    attack(fighter, getCostAttack: (sailor: Sailor) => number) { // pattern IoC : le but : sortir dans une méthode externe le code qui change
        fighter.point -= 50;
    },
}

//const getCostValue: GetAttackValue = sailor => 18;
const getCostValue: GetAttackValue = sailor => {
    switch(sailor.planet) {
        case 'Andor': {return 0}; break;
        case 'Kaahhyyk': {return 50}; break;
        case 'Tatooine': {return 18}; break;
    }
};

wookiee.attack(droide, getCostValue);