import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num1: "",
      num2: "",
      result: 0
    }

    this.changeNum1 = this.changeNum1.bind(this);
    this.changeNum2 = this.changeNum2.bind(this);
    this.add = this.add.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);

    //your code here
  }

  //your code here
  changeNum1(e){
    const number = parseInt(e.target.value);
    this.setState({num1: number})
  }
  changeNum2(e){
    const number = parseInt(e.target.value);
    this.setState({num2: number})
  }
  add(e){
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({result})
  }
  multiply(e){
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({result});
  }
  divide(e){
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({result});
  }
  clear(e){
    e.preventDefault();
    this.setState({result: 0, num1: "", num2: ""})
  }
  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange={this.changeNum1}/>
        <input onChange={this.changeNum2}/><br />
        <button onClick={this.add}>Add me</button><br />
        <button onClick={this.multiply}>Multiply</button><br />
        <button onClick={this.divide}>Divide</button><br />
        <button onClick={this.clear}>clear</button>

      </div>
    );
  }
}

export default Calculator;
