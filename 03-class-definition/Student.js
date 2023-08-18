var Student = /** @class */ (function () {
    // this is shorthand of declaring and initializing class properties
    // if we have tsconfig.json file then we don't need to write each file name 
    // in command line to compile the typescript file
    function Student(name, age) {
        this.name = name;
        this.age = age;
        console.log('Student constructor called');
    }
    Object.defineProperty(Student.prototype, "setName", {
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setAge", {
        set: function (value) {
            this.age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "getAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
// let's create an instance
var myStudent = new Student('Devendra', 30);
console.log(myStudent.getName);
console.log(myStudent.getAge);
console.log(myStudent);
