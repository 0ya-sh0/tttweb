import React from 'react';
import Cell from './Cell';
import 'bootstrap/dist/css/bootstrap.min.css';
import socketIOClient from "socket.io-client";

export default class Board extends React.Component {

    constructor(props) {
        super(props);
        this.rows = 3;
        this.cols = 3;
        const cells = []
        for(let i=0; i< this.rows; i++) {
            const cols = []
            for(let j=0; j<this.cols; j++) {
                cols.push(0);
            }
            cells.push(cols);
        }
        this.state = {
            cells
        }
        this.onCellClick = this.onCellClick.bind(this);
        this.socket = socketIOClient('http://localhost:4200');
        this.socket.on("connect", ()=>{
            console.log("connected")
            this.socket.emit("test")
        })
    }

    onCellClick(i,j) {
        if(this.state.cells[i][j] !== 0)
            return;
        this.setState(state => {
            const cells = state.cells.map((row, rowIndex)=>{
                if(rowIndex !== i)
                    return row;
                return row.map((col, colIndex)=>{
                    if(colIndex !== j)
                        return col;
                    return (i+j)%2+1;
                })
            })
            return {
                cells
            };
        });
        
    }

    render() {
        let rows = this.state.cells.map((row, i)=>{
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