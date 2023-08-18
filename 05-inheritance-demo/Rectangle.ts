import { Shape } from "./Shape";

export class Rectangle extends Shape{
private _length: number;
private _width: number;
constructor(theX: number, theY: number, length: number, width: number){
    super(theX, theY);
    this._length = length;
    this._width = width;
    console.log('Rectangle constructor called');   
}

public set setLength(value: number) {
    this._length = value;           
}
public get getLength(): number {
    return this._length;    
}
public set setWidth(value: number) {
    this._width = value;                
}

public get getWidth(): number {
    return this._width;     
}
getInfo(): string {
    return super.getInfo() + `, length=${this._length}, width=${this._width}`;  
}

}