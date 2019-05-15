const Game = require('./lib/Game');

class OnlineGame {
    constructor(id, socket) {
        this.id = id;
        this.p1socket = socket;
        this.p1socket.tttId = this.id;
        this.p2socket = null;
        this.gameStarted = false;
        this.doMove = this.doMove.bind(this);
    }

    start(socket) {
        if(this.p1socket.id === socket.id) {
            return;
        }
        this.p2socket = socket;
        this.p2socket.tttId = this.id;
        this.game = new Game();
        this.gameStarted = true;
        this.p1socket.on('move', (move) => this.doMove(1,move))
        this.p2socket.on('move', (move) => this.doMove(2,move))
        this.updateView();
    }

    updateView() {
        this.p1socket.emit('updateView', this.game.getState());
        this.p2socket.emit('updateView', this.game.getState());
    }

    doMove(player, move) {
        const state = this.game.doMove(move.i, move.j, player);
        if(state == null)
            return;
        this.updateView();
    }
}

module.exports = OnlineGame;