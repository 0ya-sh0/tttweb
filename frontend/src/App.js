import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import PageGame from './components/PageGame';
import PageHome from './components/PageHome';

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path = "/" component = {PageHome}></Route>
          <Route path = "/ai/" component = {PageGame}></Route>
      </Router>
    </div>
  );
}

export default App;
