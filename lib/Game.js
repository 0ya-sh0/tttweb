const constants = require('./constants')

class Game {

    constructor(state) {
        if(state) {
            this._state = state;
        } else {
            this._state = new GameState();   
        }
    }

    getState() {
        return this._state;
    }
    
    doMove(move,player) {
        if(this._state.gameComplete)       
            return null;             
        if(this._state.currentPlayer != player)    
            return null;
        if(this._state.board[move] != 0)
            return null;
        this._updateModel(move,player);
        return this._state;
    }
    
    _updateModel(move,player) {
        this._state.board[move] = player;
        var isComplete = this._checkComplete(move,player);
        this._state.gameComplete = isComplete; 
        this._state.moves++;
        this._state.currentPlayer = this._state.moves%2 + 1;
    }
    
    _checkComplete(move,player) {
        return  constants.GAME_ON;        
    } 
}

module.exports = Game;


