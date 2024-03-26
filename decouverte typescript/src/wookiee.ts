import Fighter from "./fighter";

export class Wookiee implements Fighter {
    private _prenom: string;
    lifePoints = 150;
    life = 150;
    
    taille = 150;

    constructor(prenom: string) {
        this._prenom = prenom;
    }

    attack(enemy: Fighter): void {
        throw new Error("Method not implemented.");
    }

    get prenom(): string {
        return this._prenom;
    }

    get isHappy(): boolean {
        return true;
    }

    set prenom(value: string) {
        this._prenom = value;
    }
}

// let wookiee = new Wookiee('chewie');
// wookiee.taille = 250;
// wookiee.prenom = 'Chewie';
// console.info(wookiee.prenom);
//wookiee.
// // wookiee = '1';

// let prenom = 'chewie';
// let prenomBis: string;
// prenomBis = 'Leia';
// // prenom = 1;

