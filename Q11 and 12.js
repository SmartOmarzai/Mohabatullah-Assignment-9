class Shape {
    constructor(color) {
        this.color = color;
    }

    area(a, b) {
        return a * b;

    }
}

class Circle extends Shape{

}

const myshape = new Shape('red');
console.log(myshape.area(2, 5));