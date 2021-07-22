var MSI = /** @class */ (function () {
    function MSI() {
        this.price = 5000;
        this.model = 'Motherboard';
    }
    MSI.prototype.getPrice = function () {
        return this.price;
    };
    MSI.prototype.getDescription = function () {
        return this.model;
    };
    return MSI;
}());
var DecoratorIntelCPU = /** @class */ (function () {
    function DecoratorIntelCPU(motherboard) {
        this.motherboard = motherboard;
    }
    DecoratorIntelCPU.prototype.getPrice = function () {
        return this.motherboard.getPrice() + 2000;
    };
    DecoratorIntelCPU.prototype.getDescription = function () {
        return this.motherboard.getDescription() + " with Intel CPU";
    };
    return DecoratorIntelCPU;
}());
var msiMotherboard = new MSI();
msiMotherboard = new DecoratorIntelCPU(msiMotherboard);
console.log(msiMotherboard.getPrice(), msiMotherboard.getDescription());
