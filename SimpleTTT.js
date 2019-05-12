const Game = require('./lib/Game');

class SimpleTTT {
    constructor(socket) {
        this._socket = socket;
        this.game = new Game();

        this._socket.on('move', (data)=>{
            console.log(`move : ${JSON.stringify(data)}`)
            const state = this.game.doMove(data.i, data.j, data.player);
            if(state != null) {
                this._socket.emit('updateView', state)
            } 
        })
    }

    start() {
        this._socket.emit('updateView', this.game.getState())
    }
}

module.exports = SimpleTTT;