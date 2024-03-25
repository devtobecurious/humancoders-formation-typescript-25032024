// S.O.L.I.D

export abstract class Weapon {
    constructor(protected label: string) {}
}

export class ArbaletWeapon extends Weapon {
    constructor(label: string) {
        super(label);
    }

    tirer(): void {
        console.info('pioooooo');
    }
}

export class LightSaberWeapon extends Weapon {
    constructor(public color: 'red' | 'blue' | 'violet' | 'green', label: string) {
        super(label);
    }
}

const weapon: Weapon = new ArbaletWeapon('arbalet XII');
// weapon. tirer n'est pas visible, car j'ai utilisé la classe abstract