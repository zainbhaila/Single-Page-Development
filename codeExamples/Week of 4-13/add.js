class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    toString(){
        return "Name is: " + this.name + " age is " +this.age;
    }

}

class Student{
    constructor(name, gpa){
        this.name = name;
        this.gpa = gpa;
    }

    toString(){
        return "Name is: " + this.name + " gpa is " +this.gpa;
    }

}

module.exports.Person = Person;
module.exports.Stu = Student;

