import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

// create an instance of the Circle class
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(10,34,8,8);

// declare an array of shapes ... initially empty
let theShapes: Shape[] = [];
// add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShape of theShapes){    
  console.log(tempShape.getInfo());
  console.log(tempShape.calculateArea());
}
