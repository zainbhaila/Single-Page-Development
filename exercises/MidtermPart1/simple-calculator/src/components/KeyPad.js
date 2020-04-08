import React, {Component} from 'react';

class KeyPadComponent extends Component {
    send(key) { // return keypress to parent component App
      this.props.keyPress(key)
    }

    render() {
        return (
            <div className="button">
                <button name="(" onClick={() => this.send('(')}>(</button>
                <button name="CE" onClick={() => this.send('CE')}>CE</button>
                <button name=")" onClick={() => this.send(')')}>)</button>
                <button name="C" onClick={() => this.send('C')}>C</button><br/>
                <button name="1" onClick={() => this.send('1')}>1</button>
                <button name="2" onClick={() => this.send('2')}>2</button>
                <button name="3" onClick={() => this.send('3')}>3</button>
                <button name="+" onClick={() => this.send('+')}>+</button><br/>
                <button name="4" onClick={() => this.send('4')}>4</button>
                <button name="5" onClick={() => this.send('5')}>5</button>
                <button name="6" onClick={() => this.send('6')}>6</button>
                <button name="-" onClick={() => this.send('-')}>-</button><br/>
                <button name="7" onClick={() => this.send('7')}>7</button>
                <button name="8" onClick={() => this.send('8')}>8</button>
                <button name="9" onClick={() => this.send('9')}>9</button>
                <button name="*" onClick={() => this.send('*')}>*</button><br/>
                <button name="." onClick={() => this.send('.')}>.</button>
                <button name="0" onClick={() => this.send('0')}>0</button>
                <button name="=" onClick={() => this.send('=')}>=</button>
                <button name="/" onClick={() => this.send('/')}>/</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;
