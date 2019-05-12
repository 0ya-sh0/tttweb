const constants = require('./constants')
const GameState = require('./GameState')
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
    
    doMove(i,j,player) {
        if(this._state.gameComplete)       
            return null;             
        if(this._state.currentPlayer != player)    
            return null;
        if(this._state.board[i][j] != 0)
            return null;
        this._updateModel(i,j,player);
        return this._state;
    }
    
    _updateModel(i,j,player) {
        this._state.board[i][j] = player;
        var isComplete = this._checkComplete(i,j,player);
        this._state.gameComplete = isComplete; 
        this._state.moves++;
        this._state.currentPlayer = this._state.moves%2 + 1;
    }
    
    _checkComplete(i,j,player) {
        return  constants.GAME_ON;        
    } 
}

module.exports = Game;


