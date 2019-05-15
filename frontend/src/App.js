import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import PageLocalGame from './components/PageLocalGame';
import PageAiGame from './components/PageAiGame';
import PageHome from './components/PageHome';
import PageOnlineGame from './components/PageOnlineGame';
import ParticlesContainer from './components/ParticlesContainer';

function App() {
  const style = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  }
  return (
    <div className="App">
      <Router>
        <div style={style}>
          <ParticlesContainer/>
          <div style={style}>
            <Route exact path = "/app" component = {PageHome}></Route>
            <Route path = "/app/local/" component = {PageLocalGame}></Route>
            <Route path = "/app/ai/" component = {PageAiGame}></Route>
            <Route path = "/app/online/" component = {PageOnlineGame}></Route>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
