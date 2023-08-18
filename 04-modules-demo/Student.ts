import { Customer } from "./Customer";  // import statement

class Student {
    // this is shorthand of declaring and initializing class properties
    // if we have tsconfig.json file then we don't need to write each file name 
    // in command line to compile the typescript file
    constructor(private name: string, private age: number) {
        console.log('Student constructor called');
    }

    public set setName(value: string) {
        this.name = value;
    }
    public get getName(): string {      
        return this.name;
    }
    public set setAge(value: number) {
        this.age = value;
    }
    public get getAge(): number {     
        return this.age;
    }

}

// let's create an instance
let myStudent = new Student('Devendra', 30);
console.log(myStudent.getName);
console.log(myStudent.getAge);
console.log(myStudent);

// let's create an instance of Customer class
let myCustomer = new Customer('Ashoke', 'Chowdhury');
console.log(myCustomer.getFirstName);
console.log(myCustomer.getLastName);
console.log(myCustomer.getAddress);
console.log(myCustomer);
