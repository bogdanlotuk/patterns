class Motherboard {
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

class MSI extends Motherboard {
    constructor() {
        super();
        this.price = 7000;
        this.model = 'MSI';
    }
}

class IntelCPU {
    constructor(motherboard) {
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
msiMotherboard = new IntelCPU(msiMotherboard);

console.log(msiMotherboard.getPrice(), msiMotherboard.getDescription());