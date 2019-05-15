import Board from './Board';
import constants from '../lib/constants'
import socketIOClient from "socket.io-client";

export default class OnlineBoard extends Board {
    constructor(props) {
        super(props);
        this.socket = socketIOClient('http://localhost:4300');
        if(this.props.whoami === 1) {
            this.socket.emit('create', this.props.id);
        } else {
            this.socket.emit('join', this.props.id);
        }
        this.socket.on('updateView', this.onUpdateView)
    }

    onCellClick(i,j) {
        if(this.props.whoami === this.state.currentPlayer) {
            this.socket.emit('move', {i,j});
        }
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