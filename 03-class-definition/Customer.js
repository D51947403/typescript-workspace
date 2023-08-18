var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        console.log('Customer constructor called');
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Customer.prototype, "setFirstName", {
        set: function (value) {
            this.firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "getFirstName", {
        get: function () {
            return this.firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "setLastName", {
        set: function (value) {
            this.lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "getLastName", {
        get: function () {
            return this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
//let's create an instance
var myCustomer = new Customer('Devendra', 'Kumar ');
console.log(myCustomer.getFirstName);
console.log(myCustomer.getLastName);
