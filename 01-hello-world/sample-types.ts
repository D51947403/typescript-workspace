let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Anup";
let lastName: string = "Kumar"

console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
// backtick (`) is used to define template strings
console.log(`Hi ${firstName} ${lastName}`);
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i); // this will give error as i is not defined outside the for loop
let reviews: number[] = [5, 5, 4.5, 1, 3];
let total: number = 0;
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total +=reviews[i];
}
console.log("total review "+total);
