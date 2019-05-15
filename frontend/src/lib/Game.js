import constants from './constants'
import GameState from './GameState'
export default class Game {

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
    
    _checkComplete(row,col,player) {
        let connect  = 3;
        const won = player === 1? constants.P1_WON:constants.P2_WON;
        if(this._getCoinsCountInDir(row,col,1)+ this._getCoinsCountInDir(row,col,5)>= connect-1){
            return won;
        }  
        else if(this._getCoinsCountInDir(row,col,2)+ this._getCoinsCountInDir(row,col,6)>= connect-1){
            return won ;
        }
        else if(this._getCoinsCountInDir(row,col,3)+ this._getCoinsCountInDir(row,col,7)>= connect-1){
            return won ;
        }  
        else if(this._getCoinsCountInDir(row,col,4)+ this._getCoinsCountInDir(row,col,8)>= connect-1){
            return won ;
        }  
        else if(this._state.moves >= this._state.maxMoves-1){
            return constants.TIE;
        }
        else
        return constants.GAME_ON ;        
    } 
    
    _getCoinsCountInDir(r  , c  , dir )  {
        let player  = this._state.board[r][c];
        let count  = 0;
        dir -= 1;
        let dirRow = [-1,-1,-1,0,1,1,1,0];
        let dirCol = [-1,0,1,1,1,0,-1,-1];
        let changeCol  = dirCol[dir];
        let changeRow  = dirRow[dir];

        r += changeRow ;
        c += changeCol ; 

        while(r>=0&&r<this._state.rows&&c>=0&&c<this._state.cols){
        if(player == this._state.board[r][c]){
                count++;
                r += changeRow ;
                c += changeCol ; 
            }
            else{
                break ;
            }
        }
        return count;
    }

}


