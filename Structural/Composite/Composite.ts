interface Metal {
    getPrice()
    getMetalName()
    setMetalName(metalName)
    setPrice(price)
}


class ScrapMetal implements Metal {
    price;
    metalName;
    getPrice() {
        return this.price;
    }
    getMetalName(){
        return this.metalName
    }
    setMetalName(metalName) {
        this.metalName = metalName;
    }
    setPrice(price) {
        this.price = price;
    }
}

class AmountAluminium extends ScrapMetal {
    constructor(){
        super();
        this.setMetalName('Aluminium');
        this.setPrice(30);
    }
};

class AmountIron extends ScrapMetal {
    constructor(){
        super();
        this.setMetalName('Iron');
        this.setPrice(5);
    }
};

class AmountCuprum extends ScrapMetal {
    constructor(){
        super();
        this.setMetalName('Cuprum');
        this.setPrice(100);
    }
};

class CompositeMetal extends ScrapMetal {
    sumOfMetal
    constructor(){
        super();
        this.sumOfMetal = [];
    }
    add(metal) {
        this.sumOfMetal.push(metal);
    }
    getPrice() {
        return this.sumOfMetal
        .map(metal => this.sumOfMetal.getPrice())
        .reduce((a, b) => a + b);
    }
}

class NewScrap extends CompositeMetal {
    constructor() {
        super();
        this.setMetalName('Scrap1');
    }
}

const myScrap = new NewScrap();

myScrap.add(new AmountAluminium());
myScrap.add(new AmountIron());
myScrap.add(new AmountCuprum());

console.log(`${myScrap.getMetalName()} price is ${myScrap.getPrice()}grn`);