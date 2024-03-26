import {Game} from './game';

export class Player2 {}

export class Player {
    private _id: number;
    private _prenom: string;
    private games: Game[] = [];

    constructor(id: number, prenom: string, private _date: Date, public taille: number) {
        this._id = id;
        this._prenom = prenom;
    }

    /**
     * Ajoute une partie
     * @param game nouvel item
     */
    addGame(game: Game): void {
        this.games.push(game);
    }

    get successGames(): Game[] {
        return this.games.filter(item => item.isWinner);
    }

    get looserGames(): Game[] {
        return this.games.filter(item => item.isLooser);
    }

    get groupedGames() {
        return this.games;
        // Object.groupBy 
    }

    get id(): number {
        return this._id;
    }
    
    public get prenom(): string {
        return this._prenom;
    }
    public set prenom(value: string) {
        if (! value) {
            throw new Error('Champ obligatoire !');
        }
        this._prenom = value;
    }
}