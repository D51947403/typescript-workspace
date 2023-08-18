export abstract class Shape {
    // define and assigne the value of x and y
    constructor(private x: number, private y:number) {
        console.log('Shape constructor called');
    }
    public set setX(value: number) {
        this.x = value;
    }
    public get getX(): number {     
        return this.x;
    }
    public set setY(value: number) {
        this.y = value;
    }   
    public get getY(): number { 
        return this.y;
    }
   getInfo(): string {
    //use backtick to use template string
       return `x=${this.x}, y=${this.y}`;
   }
    public abstract calculateArea(): number;
}