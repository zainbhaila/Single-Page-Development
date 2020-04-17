const EventEmitter = require('events');

class Cook extends EventEmitter {
  constructor(name, id, food, salary, breaks){
    super();
    this.Name = name;
    this.IDNumber = id;
    this.FoodSpeciality = food;
    this.Salary = salary;
    this.Breaks = breaks;
  }

  makeFood(food){
    if (food.toLowerCase() === this.FoodSpeciality.toLowerCase()) { // good meal
      this.emit("Cooked Correctly");
    }
    else { // bad meal
      this.emit("I did my best");
    }
  }

  salaryCut(salaryDecrease){
    if (salaryDecrease < 0) { // can't decrease by a negative, so set to 0
      salaryDecrease = 0;
    }
    if (salaryDecrease > this.Salary) { // decrease can't exceed salary
        salaryDecrease = this.Salary;
    }

    if (this.Salary !== 0 && salaryDecrease/this.Salary > .1) { // strike if decrease is over 10%
      this.emit("Going on Strike");
    }
    else { // cut salary
      this.Salary -= salaryDecrease
      this.emit("fine");
    }
  }

  goOnBreak(milliseconds){ // go on break for milliseconds if any breaks remain
    if (this.Breaks > 0) {
      this.Breaks -= 1; // use a break
      let start = new Date();
	    while ((new Date()) - start < milliseconds) {} // pause system for break
      console.log("Break done!");
    }
    else {
      console.log("No more breaks allowed!");
    }
  }
}

module.exports = Cook
