"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    // define and assigne the value of x and y
    constructor(x, y) {
        this.x = x;
        this.y = y;
        console.log('Shape constructor called');
    }
    set setX(value) {
        this.x = value;
    }
    get getX() {
        return this.x;
    }
    set setY(value) {
        this.y = value;
    }
    get getY() {
        return this.y;
    }
    getInfo() {
        //use backtick to use template string
        return `x=${this.x}, y=${this.y}`;
    }
}
exports.Shape = Shape;
