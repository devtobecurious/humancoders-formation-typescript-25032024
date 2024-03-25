import {Game} from './game';
import {Player, Player2} from './player';
import Character, {Mandragor} from './character';
import { LightSaberWeapon } from './weapon';

const titre = 'hello';

const game = new Game(1, new Date());

const player = new Player(0, 'plouf', new Date(), 12);
player.addGame(game);

const perso = new Character(0, 'Han');
perso.setDefaultWeapon(new LightSaberWeapon('violet', 'sabre 001'));