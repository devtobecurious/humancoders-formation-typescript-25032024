/**
 * 
 */
interface Fighter {
    //readonly life: number; // reaonly pas pris en compte
    life: number | undefined;

    /**
     * 
     */
    attack(enemy: Fighter): void;

    /**
     * 
     */
    lifePoints: number;
}

export interface IBelieveICanFly {
    fly(): void;
}

export interface FighterWithDefense extends Fighter, IBelieveICanFly {
    defense(): void;
}

export default Fighter;