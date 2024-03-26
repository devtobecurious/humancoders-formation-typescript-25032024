import {Weapon} from './weapon';

class Character {
    private weapon !: Weapon;

    constructor(private id: number, public nickName: string) {}

    setDefaultWeapon(item: Weapon): void {
        this.weapon = item;
    }

}

// export class Mandragor {}

export interface Mandragor { // 80% de votre code, voire 100% : utilisation des interfaces + objets literaux
    label: string;
}

export default Character;