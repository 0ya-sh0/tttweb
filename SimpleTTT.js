const Game = require('./lib/Game');

class SimpleTTT {
    constructor(socket) {
        this._socket = socket;
        this.game = new Game();

        this._socket.on('move',data, ()=>{
            const state = this.game.doMove(data.move, data.player);
            if(state != null) {
                this._socket.emit('updateView', state)
            } 
        })
    }
}

module.exports = SimpleTTT;