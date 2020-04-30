import React, { Component } from "react";

// const Counter = props => (
//   <div>
//     <h1>{props.counter}</h1>
//     <button onClick={props.handleIncrement}>Increment</button>
//     <button onClick={props.handleDecrement}>Decrement</button>
//   </div>
// );
class Counter extends Component {
  state = {
    counter: 0
  }
  
  handleDecrement = () => {
    this.setState({counter: this.state.counter - 1});
  }
  
  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.state.counter}</h1> 
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick = {this.props.history.goBack}>Go Back</button>
        <button onClick = {() => this.props.history.push('/todos')}> Go to Todos</button>
    </div>
    );
  }
}

export default Counter;
