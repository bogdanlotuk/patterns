var Phone = /** @class */ (function () {
    function Phone() {
    }
    Phone.prototype.getDescription = function () {
        console.log('I am a broken phone');
    };
    return Phone;
}());
var Laptop = /** @class */ (function () {
    function Laptop() {
    }
    Laptop.prototype.getDescription = function () {
        console.log('I am a broken laptop');
    };
    return Laptop;
}());
var PhoneRepairman = /** @class */ (function () {
    function PhoneRepairman() {
    }
    PhoneRepairman.prototype.getDescription = function () {
        console.log("I'm repairer and I can repair only phones");
    };
    return PhoneRepairman;
}());
var LaptopRepairman = /** @class */ (function () {
    function LaptopRepairman() {
    }
    LaptopRepairman.prototype.getDescription = function () {
        console.log("I'm repairer and I can repair only laptops");
    };
    return LaptopRepairman;
}());
var PhoneWorkshop = /** @class */ (function () {
    function PhoneWorkshop() {
    }
    PhoneWorkshop.prototype.makeDevice = function () {
        return new Phone();
    };
    PhoneWorkshop.prototype.makeRepairman = function () {
        return new PhoneRepairman();
    };
    return PhoneWorkshop;
}());
var LaptopWorkshop = /** @class */ (function () {
    function LaptopWorkshop() {
    }
    LaptopWorkshop.prototype.makeDevice = function () {
        return new Laptop();
    };
    LaptopWorkshop.prototype.makeRepairman = function () {
        return new LaptopRepairman();
    };
    return LaptopWorkshop;
}());
var abstractFactory = new PhoneWorkshop();
var device = abstractFactory.makeDevice();
var expert = abstractFactory.makeRepairman();
console.log(device.getDescription(), expert.getDescription());
