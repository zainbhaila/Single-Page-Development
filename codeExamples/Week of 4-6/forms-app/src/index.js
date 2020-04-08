import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ""
    }
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (<div>
      <form onSubmit={this.handleSubmit}>
        
          Enter Something:
        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        <input type="submit" value="Submit"></input>

      </form>
      <h1>{this.state.value}</h1>
    </div>

    );
  }


}



ReactDOM.render(<NameForm />, document.getElementById('root'));
