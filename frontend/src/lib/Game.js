const P1_WON = 1
const P2_WON = 2
const TIE = 3
const GAME_ON = 0

class GameState {
    constructor() {
        this.currentPlayer = 1;
        this.moves = 0;
        this.rows = 3;
        this.cols = 3;
        this.board = this._generateBoard();
        this.maxMoves = this.rows * this.cols;
        this.gameComplete = GAME_ON;
    }
    
    _generateBoard() {
        var rows = [];
        for(var row = 0; row < this.rows; row++) {
            //var c = [];
            for(var col = 0; col < this.cols; col++) {
                //c.push(0);
                rows.push(0);
            }
            //rows.push(c);
        }
        return rows;
    }
}

class Game {

    constructor(updateView, state) {
        if(state) {
            this.model = state;
        } else {
            this.model = new GameState();   
        }
        this._updateView = updateView;
    }
    
    start() {
        this._updateView(this.model);
    }
    
    doMove(move,player) {
        if(this.model.gameComplete)       
            return;             
        if(this.model.currentPlayer != player)    
            return;
        if(this.model.board[move] != 0)
            return;
        this._updateModel(move,player);
        this._updateView(this.model);
    }
    
    _updateModel(move,player) {
        this.model.board[move] = player;
        var isComplete = this._checkComplete(move,player);
        this.model.gameComplete = isComplete; 
        this.model.moves++;
        this.model.currentPlayer = this.model.moves%2 + 1;
    }
    
    _checkComplete(move,player) {
    // i am lazy....
        return GAME_ON;        
    }
    
}

function consoleView(model) {
    console.log(JSON.stringify(model));
}

var game = new Game(consoleView);
game.start();

game.doMove(0,1)

game.doMove(1,2)

game.doMove(2,1)

game.doMove(3,2)

game.doMove(4,1)


