"use strict";
class Wookiee {
    constructor(prenom) {
        this.taille = 150;
        this._prenom = prenom;
    }
    get prenom() {
        return this._prenom;
    }
    get isHappy() {
        return true;
    }
    set prenom(value) {
        this._prenom = value;
    }
}
let wookiee = new Wookiee('chewie');

wookiee.taille = 250;
wookiee.prenom = 25;

wookiee.prenom = 'Chewie';
console.info(wookiee.prenom);
//wookiee.
// // wookiee = '1';
// let prenom = 'chewie';
// let prenomBis: string;
// prenomBis = 'Leia';
// // prenom = 1;
