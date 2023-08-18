var found = true;
var grade = 88.6;
var firstName = "Anup";
var lastName = "Kumar";
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
// backtick (`) is used to define template strings
console.log("Hi ".concat(firstName, " ").concat(lastName));
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i); // this will give error as i is not defined outside the for loop
var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("total review " + total);
