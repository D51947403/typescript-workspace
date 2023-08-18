"use strict";
class Student {
    // this is shorthand of declaring and initializing class properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Student constructor called');
    }
    set setName(value) {
        this.name = value;
    }
    get getName() {
        return this.name;
    }
    set setAge(value) {
        this.age = value;
    }
    get getAge() {
        return this.age;
    }
}
// let's create an instance
let myStudent = new Student('Devendra', 30);
console.log(myStudent.getName);
console.log(myStudent.getAge);
console.log(myStudent);
