import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    //your code here
    this.state = {
      num1: "",
      num2: "",
      result: 0
    };

    this.input1 = this.input1.bind(this);
    this.input2 = this.input2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  //your code here
  input1(e){
    const input = parseInt(e.target.value);
    this.setState({num1: input})
  }
  input2(e){
    const input = parseInt(e.target.value);
    this.setState({num2: input})
  }
  add(e){
    e.preventDefault();
    const addition = this.state.num1 + this.state.num2;
    this.setState({result: addition})
  }
  subtract(e){
    e.preventDefault();
    const subtraction = this.state.num1 - this.state.num2;
    this.setState({result: subtraction})
  }
  multiply(e){
    e.preventDefault();
    const multiply = this.state.num1 * this.state.num2;
    this.setState({result: multiply})
  }
  divide(e){
    e.preventDefault();
    const divide = this.state.num1 / this.state.num2;
    this.setState({result: divide})
  }
  clear(e){
    e.preventDefault();
    this.setState({result: 0, num1: "", num2: ""})
  }
  render(){
    return (
      <div>
        <h1>{this.state.result}</h1><br />
        <input onChange={this.input1}/>
        <input onChange={this.input2}/><br />
        <button onClick={this.add}>Add</button><br />
        <button onClick={this.subtract}>Subtract</button><br />
        <button onClick={this.multiply}>Multiply</button><br />
        <button onClick={this.divide}>Divide</button><br />
        <button onClick={this.clear}>Clear</button><br />

      </div>
    );
  }
}

export default Calculator;
