import {Enemy, State} from './enemy'
import Fighter from './fighter';
import {Wookiee} from './wookiee'

const enemy = new Enemy('', 0, new State());
enemy.size = undefined;
// enemy.size = null;
enemy.size = 1;
// enemy.size = 'coucou'; // ça compile pas

const fighter: Fighter = new Wookiee('chewie');

fighter.life = undefined;


