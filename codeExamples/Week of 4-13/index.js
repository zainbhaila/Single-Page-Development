const modules = require('./add');

let p1 = new modules.Person("Jessica", 35);
let s1 = new modules.Stu("Amy", 3.5);

console.log(p1.toString());

console.log(s1.toString());