import React from 'react';
import {Link} from "react-router-dom";
import PageGame from './PageGame';
export default class PageHome extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                home page
                <Link to={"/ai"}>Game</Link>
            </div>
        )
    }
}