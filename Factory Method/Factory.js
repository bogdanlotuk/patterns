class Phone {
    constructor (model, price) {
        this.model = model;
        this.price = price;
    }
};

class PhoneFactory {
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