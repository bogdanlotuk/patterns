interface IDoubleFactory {
    create(type)
}

interface IPhoneFactory {
    create(namePhone)
}

class Phone{
    private model
    private price
    constructor (model, price) {
        this.model = model;
        this.price = price;
    }
    specification(): void {
        console.log (`This is ${this.model}. And it's price ${this.price}`);
    }
};

class PhoneFactory implements IPhoneFactory {
    create(namePhone) {
        if (namePhone === 'Apple'){
            return new Phone(namePhone, 20000);
        } 
        if (namePhone === 'Samsung'){
            return new Phone(namePhone, 10000);
        }
    }
}

interface ITabletFactory {
    create(nameTablet)
}

class Tablet{
    private model
    private price
    constructor (model, price) {
        this.model = model;
        this.price = price;
    }
    specification(): void {
        console.log (`This is ${this.model}. And it's price ${this.price}`);
    }
};

class TabletFactory implements ITabletFactory {
    create(nameTablet) {
        if (nameTablet === 'Ipad'){
            return new Tablet(nameTablet, 40000);
        } 
        if (nameTablet === 'GalaxyTab'){
            return new Tablet(nameTablet, 35000);
        }
    }
}

class DoubleFactory implements IDoubleFactory {
    phone;
    tablet;
    create (type) {
        if (type === 'phone') {
            this.phone = new PhoneFactory();
            return this.phone
        }
        else if (type === 'tablet') {
            this.tablet = new TabletFactory();
            return this.tablet
        }
    }
}

const factory = new DoubleFactory();
const tablet = factory.create('tablet');
