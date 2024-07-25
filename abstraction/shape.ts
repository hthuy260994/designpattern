// Shapes
// Are, Perimeter
// simple - single function

interface Shape {
    area(): number;
    perimeter(): number;
}

class Circle implements Shape {
    constructor(private radius: number) { }
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) { }
    area(): number {
        return this.width * this.height;
    }
    perimeter(): number {
        return this.width * 2 + this.height * 2;
    }
}

function caculateTotalArea(shape: Shape): number {
    return shape.area();
}

let circle: Circle = new Circle(10);
let rectangle: Rectangle = new Rectangle(12, 1120);

console.log(caculateTotalArea(circle));
console.log(caculateTotalArea(rectangle));