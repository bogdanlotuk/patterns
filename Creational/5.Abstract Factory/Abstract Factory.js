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
var Tablet = /** @class */ (function () {
    function Tablet(model, price) {
        this.model = model;
        this.price = price;
    }
    Tablet.prototype.specification = function () {
        console.log("This is " + this.model + ". And it's price " + this.price);
    };
    return Tablet;
}());
;
var TabletFactory = /** @class */ (function () {
    function TabletFactory() {
    }
    TabletFactory.prototype.create = function (nameTablet) {
        if (nameTablet === 'Ipad') {
            return new Tablet(nameTablet, 40000);
        }
        if (nameTablet === 'GalaxyTab') {
            return new Tablet(nameTablet, 35000);
        }
    };
    return TabletFactory;
}());
var DoubleFactory = /** @class */ (function () {
    function DoubleFactory(type) {
        if (type === 'phone') {
            this.phone = new PhoneFactory();
            return this.phone;
        }
        if (type === 'tablet') {
            this.tablet = new TabletFactory();
            return this.tablet;
        }
    }
    return DoubleFactory;
}());
var item = new DoubleFactory('tablet');
console.log(item);
