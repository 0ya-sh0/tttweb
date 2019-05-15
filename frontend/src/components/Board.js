import React from 'react';
import Cell from './Cell';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.onCellClick = this.onCellClick.bind(this);
        this.onUpdateView = this.onUpdateView.bind(this);
    }

    onCellClick(i,j) {}
    onUpdateView(state) {}
    getMessage() {}

    render() {
        let rows = this.state.board == null?[]: this.state.board.map((row, i)=>{
            let cols = row.map((col, j)=>
                <div key={j} style = {{marginLeft:"5px", marginRight:"5px"}}>
                        <Cell cell = {col} i = {i} j = {j} onClick = {this.onCellClick}></Cell>
                </div>
            )
            return (
                <div key={i}>
                    {cols}
                </div>
            )
        })
        
        return (
            <div>
                <h3 style={{textAlign:"center"}}>Tic Tac Toe</h3>
                <h3 style={{textAlign:"center"}}>{this.getMessage()}</h3>
                <div className="row">   
                    <div className="col-md-5 col-sm-5"></div>
                    {rows}
                </div>
            </div>);
    }
}

/*
import React from 'react';
import Cell from './Cell';
import 'bootstrap/dist/css/bootstrap.min.css';
import socketIOClient from "socket.io-client";

const constants = {
    P1_WON : 1,
    P2_WON : 2,
    TIE : 3,
    GAME_ON : 0
}

export default class Board extends React.Component {

    constructor(props) {
        super(props);
        this.onCellClick = this.onCellClick.bind(this);
        this.socket = socketIOClient('http://localhost:4300');
        this.socket.on("connect", ()=>{
            console.log("connected")
            this.socket.emit("test")
        })
        this.socket.on('updateView',(state)=>{
            this.setState({...state}, () => {
                if(this.state.currentPlayer === 2) {
                    const move = findBestMove(this.state);
                    this.socket.emit('move', {i:move[0],j:move[1], player: this.state.currentPlayer})
                }
            })
        })
    }

    onCellClick(i,j) {
        if(this.state.currentPlayer === 2)
            return;
        this.socket.emit('move', {i,j, player: this.state.currentPlayer})
    }

    render() {
        let rows = this.state == null?[]: this.state.board.map((row, i)=>{
            let cols = row.map((col, j)=>
                <div key={j} style = {{marginLeft:"5px", marginRight:"5px"}}>
                        <Cell cell = {col} i = {i} j = {j} onClick = {this.onCellClick}></Cell>
                </div>
            )
            return (
                <div key={i}>
                    {cols}
                </div>
            )
        })
        let message;
        if(this.state == null) {
            message = "loading"
        } else if(this.state.gameComplete === constants.GAME_ON) {
            message = this.state.currentPlayer === 1?"Player 'O's turn": "Playe 'X's turn"
        } else if(this.state.gameComplete === constants.TIE) {
            message = "Its a Tie"
            this.socket.disconnect();
        } else {
            message = "Player " + this.state.gameComplete === 1? "O":"X" + " won"
            this.socket.disconnect();
        }
        return (
            <div>
                <h3 style={{textAlign:"center"}}>Tic Tac Toe</h3>
                <h3 style={{textAlign:"center"}}>{message}</h3>
                <div className="row">   
                    <div className="col-md-5 col-sm-5"></div>
                    {rows}
                </div>
            </div>);
    }
}
*/
