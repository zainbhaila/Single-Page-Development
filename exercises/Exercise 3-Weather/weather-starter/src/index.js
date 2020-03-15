import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Write your components here!

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.forecast_img = require("./error.png"); // default image for condition
    if (props.conditions.toLowerCase() === "cloudy") {
      this.forecast_img = require("./cloudy.jpg");
    }
    else if (props.conditions.toLowerCase() === "sunny") {
      this.forecast_img = require("./sunny.jpg");
    }
    else if (props.conditions.toLowerCase() === "rain") {
      this.forecast_img = require("./rainy.png");
    }
    else if (props.conditions.toLowerCase() === "snow") {
      this.forecast_img = require("./snowy.png");
    }
  }

  render () {
    return (
      <div>
        <h1> {this.props.day.charAt(0).toUpperCase() + this.props.day.slice(1).toLowerCase()}</h1>
        <img src={this.forecast_img} alt="Failed to load." height="150" width="150" />
        <h2> Temperature: {this.props.temp} degrees fahrenheit </h2>
      </div>
    );
  }
}

class WeekForecast extends React.Component {
  constructor(props) {
    super(props);
    this.day_formatted = this.props.day.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()); // fix days
  }

  image_get(cond) { // used to map array of conditions to image
    let forecast_img = require("./error.png"); // default image

    if (cond.toLowerCase() === "cloudy") {
      forecast_img = require("./cloudy.jpg");
    }
    else if (cond.toLowerCase() === "sunny") {
      forecast_img = require("./sunny.jpg");
    }
    else if (cond.toLowerCase() === "rain") {
      forecast_img = require("./rainy.png");
    }
    else if (cond.toLowerCase() === "snow") {
      forecast_img = require("./snowy.png");
    }

    return forecast_img;
  }

  render () {
    this.conditions_images = this.props.conditions.map(this.image_get); // map images

    let values = []; // store each day in its own div
    for (let i in this.props.temp) {
      values.push(
        <div>
          <h1> {this.day_formatted[i].charAt(0).toUpperCase() + this.day_formatted[i].slice(1).toLowerCase()}</h1>
          <img src={this.conditions_images[i]} alt="Failed to load." height="150" width="150" />
          <h2> Temperature: {this.props.temp[i]} degrees fahrenheit </h2>
        </div>
      );
    }

    return (
      <div>
        {values}
      </div>
    );
  }
}

ReactDOM.render(<WeekForecast day={["MoNDaY", "tuEsDay", "wedNEsday"]} temp={["78", "68", "69"]} conditions={["cloudy", "sunny", "rain"]} />, document.getElementById('root'));
