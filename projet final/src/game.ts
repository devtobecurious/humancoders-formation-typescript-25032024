enum GameStateU {
    alancer,
    encours,
    winner = 18,
    looooser = 'LOOSER'
}

/**
 * Ceci commente ma partie
 */
export class Game {
    private state: 'ADEMARRER' | 'DEMARRE' | 'WINNER' | 'LOOSER';

    constructor(private id: number, public date: Date) {
        this.state = 'ADEMARRER';
    }

    get isWinner() : boolean {
        return this.state === 'WINNER';
    }

    get isLooser() : boolean {
        return this.state === 'LOOSER';
    }
}