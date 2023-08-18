"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    calculateArea() {
        return Math.PI * Math.pow(this._radius, 2);
    }
    constructor(theX, theY, _radius) {
        super(theX, theY);
        this._radius = _radius;
        console.log('Circle constructor called');
    }
    set setRadius(value) {
        this._radius = value;
    }
    get getRadius() {
        return this._radius;
    }
    getInfo() {
        return super.getInfo() + `, radius=${this._radius}`;
    }
}
exports.Circle = Circle;
