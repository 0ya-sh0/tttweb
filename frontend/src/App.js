import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import PageLocalGame from './components/PageLocalGame';
import PageAiGame from './components/PageAiGame';
import PageHome from './components/PageHome';
import PageOnlineGame from './components/PageOnlineGame';

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path = "/app" component = {PageHome}></Route>
          <Route path = "/app/local/" component = {PageLocalGame}></Route>
          <Route path = "/app/ai/" component = {PageAiGame}></Route>
          <Route path = "/app/online/" component = {PageOnlineGame}></Route>
      </Router>
    </div>
  );
}

export default App;
