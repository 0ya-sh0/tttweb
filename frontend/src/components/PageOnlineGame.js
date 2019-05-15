import React from 'react';
import OnlineBoard from './OnlineBoard';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class PageOnlineGame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showBoard : false,
            whoami : null,
            id : ''
        };
        this.onChange = this.onChange.bind(this);
        this.create = this.create.bind(this);
        this.join = this.join.bind(this);
    }

    onChange(event) {
        this.setState({id : event.target.value})
    }

    create() {
        this.setState({whoami:1, showBoard: true})
    }

    join() {
        this.setState({whoami:2, showBoard: true})
    }

    render() {
        const form = (
            <div>
                <input type = "number" onChange = {this.onChange}></input>
                <button onClick = {this.create}>create</button>
                <button onClick = {this.join}>join</button>
            </div>
        );
        
        const board = <OnlineBoard whoami = {this.state.whoami} id = {this.state.id} show = {this.state.showBoard}></OnlineBoard>

        return (
            <div>
                {this.state.showBoard? board:form}
            </div>
        )
    }
}   