import React, { Component } from 'react';

const Lifecycle = class extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      interval: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  componentDidMount() {
    // fetch data from an external API, talk to the database
    // establish a socket connection, set up timers
    console.log('the component has mounted');
    const interval = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
      console.log('interval fired');
    }, 1000);
    this.setState({ interval });
  }

  componentDidUpdate() {
    // listen for updates to the component
    if (this.state.counter === 10) {
      alert('you win! enter your credit card to play again');
    }
    console.log('component has updated');
  }

  componentWillUnmount() {
    // cleanup
    clearInterval(this.state.interval);
    console.log('component will be removed from the DOM');
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Methods</h2>
        <button onClick={this.handleClick}>Increment!</button>
        <h2>Counter: {this.state.counter}</h2>
      </div>
    );
  }
};

export default Lifecycle;
