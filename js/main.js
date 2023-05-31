import * as init from './init.js';
import Game from './Game.js';

const initComponents = () => {
    init.playerButtons.forEach(button => {
        button.addEventListener('click', event => {
            new Game(event);
        });
    });
}

(function () {
    initComponents();
})();


