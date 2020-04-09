import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import KeyPad from "./components/KeyPad";

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {inputs: "", calculated: false};
    }

    keyPress(key) {
      let string = this.state.inputs;

      if (key === "CE") { // clear single entry unless empty or Error
        if (string === "" || string === "Error") {
          this.setState({inputs: "", calculated: false});
        }
        else {
          this.setState({inputs: string.slice(0, -1), calculated: false});
        }
      }
      else if (key === "C") { // clear all
        this.setState({inputs: "", calculated: false});
      }
      else if (key === "=") { // calculate answer
        if (this.state.calculated !== true) { // no '=' twice in a row
          for (let i = 0; i < string.length; i++) { // make sure every '.' is followed by a number
            if (string.charAt(i) === ".") {
              if (i === string.length - 1 || string.charAt(i+1).search(/\d/) === -1) {
                string = "Error";
                break;
              }
            }
          }

          if (string.slice(0,2) === "++" || string.slice(0,2) === "--"
              || string.search(/([+\-*/]{3,})|([*/]{2,})/) !== -1) { // invalid operators
            string = "Error";
          }

          if (string !== "Error") {
            try { // try to evaluate expression
              string = "" + eval(string.replace('--', '+').replace('++', '+'));
            }
            catch { // Error if eval fails
              string = "Error";
            }
          }

          this.setState({inputs: string, calculated: true});
        }
      }
      else { // numerical, parentheses, or operator input
        if ((this.state.calculated === true && key.search(/[+\-*/]/) !== 0) || string === "Error") {
          this.setState({inputs: key, calculated: false});
        }
        else {
          this.setState({inputs: string + key, calculated: false});
        }
      }
    }

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Basic Calculator</h1>
                    <Result value={this.state.inputs}/>
                    <KeyPad keyPress={(key) => this.keyPress(key)}/>
                </div>
            </div>
        );
    }
}

export default App;
