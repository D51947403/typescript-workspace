"use strict";
class Customer {
    constructor(firstName, lastName) {
        console.log('Customer constructor called');
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = 'Bangalore';
    }
    set setFirstName(value) {
        this.firstName = value;
    }
    get getFirstName() {
        return this.firstName;
    }
    set setLastName(value) {
        this.lastName = value;
    }
    get getLastName() {
        return this.lastName;
    }
    get getAddress() {
        return this.address;
    }
    set setAddress(value) {
        this.address = value;
    }
}
//let's create an instance
let myCustomer = new Customer('Devendra', 'Kumar ');
console.log(myCustomer.getFirstName);
console.log(myCustomer.getLastName);
