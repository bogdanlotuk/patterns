var Phone = /** @class */ (function () {
    function Phone(model, price) {
        this.model = model;
        this.price = price;
    }
    Phone.prototype.specification = function () {
        console.log("This is " + this.model + ". And it's price " + this.price);
    };
    return Phone;
}());
;
var PhoneFactory = /** @class */ (function () {
    function PhoneFactory() {
    }
    PhoneFactory.prototype.create = function (namePhone) {
        if (namePhone === 'Apple') {
            return new Phone(namePhone, 20000);
        }
        if (namePhone === 'Samsung') {
            return new Phone(namePhone, 10000);
        }
    };
    return PhoneFactory;
}());
var factory = new PhoneFactory();
var apple = factory.create('Apple');
var samsung = factory.create('Samsung');
console.log(apple, samsung);
console.log(samsung.specification());
