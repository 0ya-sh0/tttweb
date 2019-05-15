import React from 'react';
import { Link } from 'react-router-dom';
export default class PageHome extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/app/local">Local Game</Link></li>
                    <li><Link to="/app/ai">Ai Game</Link></li>
                </ul>
            </div>
        )
    }
}