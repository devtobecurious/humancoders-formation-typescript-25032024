import {Weapon} from './weapon';

class Character {
    private weapon !: Weapon;

    constructor(private id: number, public nickName: string) {}

    setDefaultWeapon(item: Weapon): void {
        this.weapon = item;
    }

}

export class Mandragor {}

export default Character;