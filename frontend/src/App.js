import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import PageLocalGame from './components/PageLocalGame';
import PageAiGame from './components/PageAiGame';
import PageHome from './components/PageHome';

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path = "/" component = {PageHome}></Route>
          <Route path = "/local/" component = {PageLocalGame}></Route>
          <Route path = "/ai/" component = {PageAiGame}></Route>
      </Router>
    </div>
  );
}

export default App;
