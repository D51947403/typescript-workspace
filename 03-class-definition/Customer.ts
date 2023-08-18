class Customer{
   private firstName: string;
   private lastName: string;
   private address: string;


    constructor(firstName: string, lastName: string){
        console.log('Customer constructor called');
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public set setFirstName(value: string){
        this.firstName = value;
    }
    public get getFirstName(): string{
     return this.firstName;
    }
    public set setLastName(value: string){
        this.lastName = value;
    }   
    public get getLastName(): string{        
        return this.lastName;
    }
    public get getAddress(): string {
        return this.address;
    }
    public set setAddress(value: string) {
        this.address = value;
    }

}
//let's create an instance
let myCustomer = new Customer('Devendra', 'Kumar ');
console.log(myCustomer.getFirstName);
console.log(myCustomer.getLastName);