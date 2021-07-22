interface IMotherboard {
    getPrice()
    getDescription()
}

class MSI implements IMotherboard {
    price
    model
    constructor() {
        this.price = 5000;
        this.model = 'Motherboard'
    }
    getPrice() {
        return this.price;
    }
    getDescription() {
        return this.model;
    }
}

class DecoratorIntelCPU implements IMotherboard{
    price
    model
    motherboard
    constructor (motherboard) {
        this.motherboard = motherboard;
    }

    getPrice() {
        return this.motherboard.getPrice() + 2000;
    }

    getDescription() {
        return `${this.motherboard.getDescription()} with Intel CPU`;
    }
}

let msiMotherboard = new MSI();
msiMotherboard = new DecoratorIntelCPU(msiMotherboard);

console.log(msiMotherboard.getPrice(), msiMotherboard.getDescription());