import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      dealership: [],
      tempBrand: "",
      tempModel: "",
      tempYear: "",
      delBrand: "",
      delModel: "",
      delYear: "",
      success: true
    }
  }
  componentDidMount() {
    fetch('/dealership')
      .then(res => res.json())
      .then((dealer) => {this.setState({ dealership: dealer.info }) });

  }
  getData() {
    fetch('/dealership')
      .then(res => res.json())
      .then((dealer) => { this.setState({ dealership: dealer.info}) });

  }
  putData(){
    let data =  {brand: this.state.tempBrand, model: this.state.tempModel, year: this.state.tempYear};
    let options ={
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('/dealership', options);
  }
  delData(){
    let data =  {brand: this.state.delBrand, model: this.state.delModel, year: this.state.delYear};
    let options ={
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('/dealership', options);
    
  }
  
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  //<button onClick={() => { this.getData()}}>Get</button>
  render() {
    return (
      <div className="App">
        <button onClick={() => { this.putData() }}>Put Test</button>
        <button onClick={() => { this.getData() }}>Get Data</button>
        <form onSubmit={()=>{this.putData()}}>

          Enter Brand:
          <input type="text" name="tempBrand" value={this.state.tempBrand} onChange={this.handleChange}></input>
          Enter Model:
          <input type="text" name="tempModel" value={this.state.tempModel} onChange={this.handleChange}></input>
          Enter Year:
          <input type="text" name="tempYear" value={this.state.tempYear} onChange={this.handleChange}></input>
          <input type="submit" value="Submit"></input>

        </form>
        <h1>Delete a Record</h1>
        <form onSubmit={()=>{this.delData()}}>
          
          Enter Brand:
          <input type="text" name="delBrand" value={this.state.delBrand} onChange={this.handleChange}></input>
          Enter Model:
          <input type="text" name="delModel" value={this.state.delModel} onChange={this.handleChange}></input>
          Enter Year:
          <input type="text" name="delYear" value={this.state.delYear} onChange={this.handleChange}></input>
          <input type="submit" value="Submit"></input>

        </form>
        <ol>
          {this.state.dealership.map(cars =>
            <li key={cars.year}>Brand: {cars.brand}, Model: {cars.type}, Year: {cars.year} </li>)}
        </ol>
      </div>
    );
  }
}

export default App;
