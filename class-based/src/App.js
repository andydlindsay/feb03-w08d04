import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';

import ClassBased from './components/class-based/ClassBased';
import Stateful from './components/stateful/Stateful';
import Lifecycle from './components/lifecycle/Lifecycle';

const message = 'hello from the parent component';
const counter = 10;

const App = () => {
  return (
    <div className="App">
      <h2>Class-based Components</h2>

      <Router>
        <Link to="/class-based">Class-based </Link>
        <Link to="/stateful">Stateful </Link>
        <Link to="/lifecycle">Lifecycle</Link>

        <Switch>
          <Route path="/class-based">
            <ClassBased message={message} counter={counter}>
              <div>I am the children</div>
            </ClassBased>
          </Route>
          <Route path="/stateful" component={Stateful} />
          <Route path="/lifecycle" component={Lifecycle} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
