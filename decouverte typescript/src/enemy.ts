export class State {
    public label ='';
}

export class Enemy {
    private surname : string;
    private power !: number; //je prends la responsabilité de ne pas controler à la compilation si undefined potentiel    // size: number | undefined;// à préférer ;
    size ?: number;
    state2 ?: State;

    constructor(surname: string, public lifePoints: number, public state: State) {
        this.surname = surname;
    }

    attack(enemy: Enemy): void {
        let result: string | undefined = 'coucou';
        
        result = this.power.toPrecision();

        const sizePrecision = this.size?.toPrecision();
    }
}