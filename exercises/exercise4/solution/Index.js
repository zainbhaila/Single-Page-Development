const Cook = require('./Cook.js');

let c = new Cook("Ratatouille", "23451", "Curry", 60000, 2);

c.on("Cooked Correctly", (e) => {
  console.log("Delicious! Put a review in yelp, my ID number is: " + c.IDNumber);
});

c.on("I did my best", (e) => {
  c.salaryCut(5999);
});

c.on("Going on Strike", (e) => {
  c.Salary *= 1.1;
});

c.on("fine", (e) => {
  console.log("I'll raise your wage next paycheck, I promise");
});

/*
// testing
c.goOnBreak(1000);
c.goOnBreak(10);
c.goOnBreak(1000);

c.makeFood("Curry");
c.makeFood("curRy");
c.makeFood("chinese");
console.log("Salary after cut: " + c.Salary)
c.makeFood("burger");
console.log("Salary at strike: " + c.Salary)
*/
