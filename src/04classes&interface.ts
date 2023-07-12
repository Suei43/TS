//SYNTAX FOR INTERFACES USED FOR CLASSES
interface Shape {
    name?: string;
    getArea(): number;
  }
interface polygon {
    side: number;
    sides: number;
}

//SYNTAX FOR CLASSES USING INTERFACES
class Rectangle implements Shape {
public constructor(protected readonly width: number, protected readonly height: number) {}
public getArea(): number {
    return this.width * this.height;
}
}

//NEW CLASS INHERITING FROM RECTANGLE
class Square extends Rectangle{
    constructor(side1: number, side2:number) {
        super(side1, side2);
    }
}


const rectangle = new Rectangle(10, 5);
console.log(rectangle.getArea());

const square = new Square(10, 7);
console.log(square.getArea());

//NEW CLASS USING TWO INTERFACES
class Polygon implements Shape, polygon {
    public constructor(public readonly sides:number, public readonly side: number) {}
    public getArea(): number {
        return Math.pow(this.side,this.sides)
    }
}

const polygon = new Polygon(6,3);
console.log(polygon.getArea());

//OVERRIDING CLASS PROPERTIES
class Triangle extends Polygon {
    public constructor(public readonly sides:number, public readonly side:number, public height:number){
        super(sides,side)
    }
    public override getArea(): number {
        return 0.5 * this.side * this.height
    }
}
const triangle = new Triangle(3,9,8);
console.log(triangle.getArea());