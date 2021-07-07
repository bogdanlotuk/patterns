class TeslaCar {
    constructor (model, price, interior) {
        this.model = model;
        this.price = price;
        this.interior = interior;
    }
    clone() {
        return new TeslaCar(this.model, this.price, this.interior);
    }
}

const prototypeCar = new TeslaCar('S', 10000, false);
const car1 = prototypeCar.clone();
const car2 = prototypeCar.clone();
car1.interior = true;

console.log(car1, car2);