import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorMessage from './ErrorMessage';

class PageHome extends React.Component {

    constructor(props) {
        super(props);
        this.options = ['local', 'ai', 'online']
        this.state = {
            select: this.options[0],
            p1 :'',
            p2 :'',
            room : '',
            ai:'0',
            error:''
        }
    }

    onSelectChange = (event) => {
        this.setState({select: event.target.value})
    }

    onStartLocal = () => {
        this.props.history.push(`/app/local?p1=${this.state.p1}&p2=${this.state.p2}`)
    }

    onStartAi = () => {
        this.props.history.push(`/app/ai?p1=${this.state.p1}&ai=${this.state.ai}`)
    }

    onCreateGame = async () => {
        if(this.state.room == null || this.state.room == '') {
            return
        }
        const res = await fetch(`/api/canCreate/${this.state.room}`)
        const json = await res.json()
        if(json.response) 
            return this.props.history.push(`/app/online?room=${this.state.room}&created=1`);
        this.setState({error:'cannot create room, room already exist'})
    }

    onJoinGame = async () => {
        if(this.state.room == null || this.state.room == '') {
            return
        }
        const res = await fetch(`/api/canJoin/${this.state.room}`)
        const json = await res.json()
        if(json.response) 
            return this.props.history.push(`/app/online?room=${this.state.room}&created=0`);
        this.setState({error:'cannot join room, room is not available'})
    }

    onP1change = (event) => {
        this.setState({p1:event.target.value})
    }

    onP2change = (event) => {
        this.setState({p2:event.target.value})
    }

    onRoomChange = (event) => {
        this.setState({room:event.target.value})
    }

    onAiChange = (event) => {
        console.log(event)
        this.setState({ai:event.target.value})
    }

    render() {
        const formLocal = (
            <div>
                <div className="form-group">
                    <label>Player 1:</label>
                    <input type="text"  className="form-control" value={this.state.p1} onChange={this.onP1change}/>
                </div>
                <div className="form-group">
                    <label>Player 2:</label>
                    <input type="text" className="form-control" value={this.state.p2} onChange={this.onP2change}/>
                </div>
                <button className="btn btn-primary" onClick={this.onStartLocal}>Start game</button>
            </div>
        )

        const formAi = (
            <div>
                <div className="form-group">
                    <label>Your name:</label>
                    <input type="text" className="form-control" value={this.state.p1} onChange={this.onP1change}/>
                </div>
                <div className="form-group">
                    <label>Select Level:</label>
                    <select key="ai" className="form-control" value={this.state.ai} onChange={this.onAiChange} >
                        <option value="0">Dumb</option>
                        <option value="1">Easy</option>
                        <option value="2">Medium</option>
                        <option value="3">Hard</option>
                    </select>
                </div>
                <button className="btn btn-primary" onClick={this.onStartAi}>Start game</button>
            </div>
        )

        const formOnline = (
            <div>
                <div className="form-group">
                    <label>Room id:</label>
                    <input type="number" className="form-control" value={this.state.room} onChange={this.onRoomChange}/>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <button className="btn btn-primary" onClick={this.onCreateGame}>Create Game</button>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary" onClick={this.onJoinGame}>Join Game</button>
                    </div>
                </div>
            </div>
        )

        const form = (
            <div className="form-horizontal">
                <div className="form-group">
                    <label>Select Option:</label>
                    <select className="form-control" onChange={this.onSelectChange} value={this.state.select}>
                        <option value={this.options[0]}>Play Locally</option>
                        <option value={this.options[1]}>Play againts Computer</option>
                        <option value={this.options[2]}>Play againts Friend Online</option>
                    </select>
                </div>
                {this.state.select=== this.options[0]?formLocal:null}
                {this.state.select=== this.options[1]?formAi:null}
                {this.state.select=== this.options[2]?formOnline:null}

            </div>
        )
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 style={{textAlign:"center"}}>TIC TAC TOE</h1>
                    </div>  
                </div>  
                <ErrorMessage msg={this.state.error}></ErrorMessage>
                <div className="row">
                    <div className="col-md-12">
                        {form}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(PageHome);