import React from 'react';
import Board from './Board';

export default class PageGame extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Board></Board>
            </div>
        )
    }
}