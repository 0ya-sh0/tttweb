import React from 'react';

export default class Cell extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = props.onClick;
        this.height = 100;
        this.width = this.height;
    }

    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        this.drawSquare(ctx)
        switch(this.props.cell) {
            case 0:break;
            case 1:
                this.drawCircle(ctx)
                break;
            case 2:
                this.drawCross(ctx)
                break;
            default:break;
        }
    }

    componentWillReceiveProps(newProps) {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        switch(newProps.cell) {
            case 0:break;
            case 1:
                this.drawCircle(ctx)
                break;
            case 2:
                this.drawCross(ctx)
                break;
            default:break;
        }
    }

    drawSquare(ctx) {
        ctx.strokeRect(0,0,this.height,this.width)
    }

    drawCross(ctx) {
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.width, this.height);
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.width, 0);
        ctx.lineTo(0, this.height);
        ctx.stroke();
    }

    drawCircle(ctx) {
        ctx.beginPath();
        ctx.arc(this.height/2, this.height/2, this.height/3, 0, 2 * Math.PI);
        ctx.stroke();
    }

    render() {
        return(
            <div onClick = {()=>{this.onClick(this.props.i, this.props.j)}}>
                <canvas ref="canvas" width={this.width} height={this.height} />
            </div>
        )
    }
}