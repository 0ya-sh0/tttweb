import React from 'react';
import AiBoard from './AiBoard';

export default class PageAiGame extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AiBoard></AiBoard>
            </div>
        )
    }
}