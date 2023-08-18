"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(theX, theY, length, width) {
        super(theX, theY);
        this._length = length;
        this._width = width;
        console.log('Rectangle constructor called');
    }
    set setLength(value) {
        this._length = value;
    }
    get getLength() {
        return this._length;
    }
    set setWidth(value) {
        this._width = value;
    }
    get getWidth() {
        return this._width;
    }
    getInfo() {
        return super.getInfo() + `, length=${this._length}, width=${this._width}`;
    }
}
exports.Rectangle = Rectangle;
