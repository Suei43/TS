"use strict";
//SYNTAX FOR CLASSES USING INTERFACES
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
//NEW CLASS INHERITING FROM RECTANGLE
class Square extends Rectangle {
    constructor(side1, side2) {
        super(side1, side2);
    }
}
const rectangle = new Rectangle(10, 5);
console.log(rectangle.getArea());
const square = new Square(10, 7);
console.log(square.getArea());
//NEW CLASS USING TWO INTERFACES
class Polygon {
    constructor(sides, side) {
        this.sides = sides;
        this.side = side;
    }
    getArea() {
        return Math.pow(this.side, this.sides);
    }
}
const polygon = new Polygon(6, 3);
console.log(polygon.getArea());
//OVERRIDING CLASS PROPERTIES
class Triangle extends Polygon {
    constructor(sides, side, height) {
        super(sides, side);
        this.sides = sides;
        this.side = side;
        this.height = height;
    }
    getArea() {
        return 0.5 * this.side * this.height;
    }
}
const triangle = new Triangle(3, 9, 8);
console.log(triangle.getArea());
