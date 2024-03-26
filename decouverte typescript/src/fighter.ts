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

export default Fighter;