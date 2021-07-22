
interface IPhoneFactory {    
    create(namePhone)
}

class Phone {
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

const factory = new PhoneFactory();

const apple = factory.create('Apple');
const samsung = factory.create('Samsung');

console.log(apple, samsung);
console.log(samsung.specification());