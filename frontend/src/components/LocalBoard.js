import Board from './Board';
import Game from'../lib/Game';
import constants from '../lib/constants'

export default class LocalBoard extends Board {
    constructor(props) {
        super(props);
        this.game = new Game();
        this.state = this.game.getState();
    }

    onCellClick(i,j) {
        const newState = this.game.doMove(i,j,this.game._state.currentPlayer);
        this.onUpdateView(newState);
    }

    onUpdateView(state) {
        this.setState({...state});
    }

    getMessage() {
        let message;
        console.log(this.state);
        if(this.state == null) {
            message = "loading"
        } else if(this.state.gameComplete === constants.GAME_ON) {
            message = this.state.currentPlayer === 1?"Player 'O's turn": "Playe 'X's turn"
        } else if(this.state.gameComplete === constants.TIE) {
            message = "Its a Tie"
        } else {
            message = "Player " + this.state.gameComplete === constants.P1_WON ? "O":"X" + " won"
        }
        return message;
    }
}