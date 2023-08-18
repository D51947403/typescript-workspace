"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
// create an instance of the Circle class
let myCircle = new Circle_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(10, 34, 8, 8);
// declare an array of shapes ... initially empty
let theShapes = [];
// add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
}
