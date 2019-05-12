import React from 'react';
import Cell from './Cell';
import 'bootstrap/dist/css/bootstrap.min.css';
import socketIOClient from "socket.io-client";

export default class Board extends React.Component {

    constructor(props) {
        super(props);
        this.onCellClick = this.onCellClick.bind(this);
        this.socket = socketIOClient('http://localhost:4200');
        this.socket.on("connect", ()=>{
            console.log("connected")
            this.socket.emit("test")
        })
        this.socket.on('updateView',(state)=>{
            this.setState({...state})
        })
    }

    onCellClick(i,j) {
        console.log(`${i},${j}`)
        this.socket.emit('move', {i,j, player: this.state.currentPlayer})
    }

    render() {
        console.log(this.state)
        let rows = this.state == null?[]: this.state.board.map((row, i)=>{
            let cols = row.map((col, j)=>
                <div className="col-md-1"  key={j} style = {{marginLeft:"5px", marginRight:"5px"}}>
                        <Cell cell = {col} i = {i} j = {j} onClick = {this.onCellClick}></Cell>
                </div>
            )
            return (
                <div className="row" key={i}>
                    <div className="col-md-3"></div>
                    {cols}
                    <div className="col-md-3"></div>
                </div>
            )
        })
        return (<div className="container">{rows}</div>);
    }
}