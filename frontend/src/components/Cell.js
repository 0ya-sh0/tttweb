import React from 'react';

export default class Cell extends React.Component {

    constructor(props) {
        super(props);
        this.height = 100;
        this.width = this.height;
    }

    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        ctx.strokeRect(0,0,this.height,this.width)
        ctx.beginPath();
        ctx.arc(this.height/2, this.height/2, this.height/3, 0, 2 * Math.PI);
        ctx.stroke();
    }

    render() {
        return(
            <div>
                <canvas ref="canvas" width={this.width} height={this.height} />
            </div>
        )
    }
}