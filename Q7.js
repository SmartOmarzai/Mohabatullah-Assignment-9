function Car(name, make, year) {
    this.name = name;
    this.make = make;
    this.year = year;
}

Car.prototype.color = 'black';

const myCar = new Car('BMW', 'Toyota', 2020);
console.log(myCar.color);