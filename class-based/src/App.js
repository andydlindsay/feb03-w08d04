import React from 'react';
import './App.css';

// import ClassBased from './components/class-based/ClassBased';
import Stateful from './components/stateful/Stateful';

// const message = 'hello from the parent component';
// const counter = 10;

const App = () => {
  return (
    <div className="App">
      <h2>Class-based Components</h2>
      {/* <ClassBased message={message} counter={counter}>
        <div>I am the children</div>
      </ClassBased> */}
      <Stateful />
    </div>
  );
};

export default App;
