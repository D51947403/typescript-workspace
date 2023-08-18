import { Shape } from "./Shape";

export class Circle extends Shape {
    public calculateArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }
   constructor(theX: number, theY: number, private _radius: number) {
       super(theX, theY);
       console.log('Circle constructor called');
   }
    public set setRadius(value: number) {
        this._radius = value;
    }   
    public get getRadius(): number { 
        return this._radius;
    }
    getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}`;
    }

}