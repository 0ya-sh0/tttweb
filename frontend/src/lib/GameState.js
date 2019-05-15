const constants = require('./constants')

class GameState {
    constructor() {
        this.currentPlayer = 1;
        this.moves = 0;
        this.rows = 3;
        this.cols = 3;
        this.board = this._generateBoard();
        this.maxMoves = this.rows * this.cols;
        this.gameComplete = constants.GAME_ON;
    }
    
    _generateBoard() {
        var rows = [];
        for(var row = 0; row < this.rows; row++) {
            var c = [];
            for(var col = 0; col < this.cols; col++) {
                c.push(0);
                //rows.push(0);
            }
            rows.push(c);
        }
        return rows;
    }
}

module.exports = GameState;