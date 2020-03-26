import React, { Component } from 'react';

const ClassBased = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      internalCounter: props.counter * 2
    };
  }

  render() {
    return (
      <div className="class-based">
        <h2>hello there</h2>
        <p>Count: {this.state.count}</p>
        <p>Message: {this.props.message}</p>
        <p>Internal Counter: {this.state.internalCounter}</p>
        {this.props.children}
      </div>
    );
  }
};

export default ClassBased;
