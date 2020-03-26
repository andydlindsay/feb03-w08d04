import React, { Component } from 'react';

const Stateful = class extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      message: 'I hope I don\'t get deleted',
      isStillHere: true,
      random: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('the button was clicked');
    // this.state.counter = this.state.counter + 1;
    this.setState({ counter: this.state.counter + 1, random: 'key' });
  }

  render() {
    return (
      <div>
        <h2>The count is {this.state.counter}</h2>
        <button onClick={this.handleClick}>Increment Counter</button>
        <p>{this.state.message}</p>
        <p>{this.state.random}</p>
      </div>
    );
  }
};

export default Stateful;
