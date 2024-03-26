import {Enemy, State} from './enemy'

const enemy = new Enemy('', 0, new State());
enemy.size = undefined;
// enemy.size = null;
enemy.size = 1;
// enemy.size = 'coucou'; // ça compile pas