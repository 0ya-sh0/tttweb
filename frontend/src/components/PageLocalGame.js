import React from 'react';
import LocalBoard from './LocalBoard';

export default class PageLocalGame extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LocalBoard></LocalBoard>
            </div>
        )
    }
}