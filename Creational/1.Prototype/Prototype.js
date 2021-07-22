;
var Snickers = /** @class */ (function () {
    function Snickers(chocolateName, chocolateWeight, chocolatePrice) {
        this.name = chocolateName;
        this.weight = chocolateWeight;
        this.price = chocolatePrice;
    }
    Snickers.prototype.clone = function () {
        return new Snickers(this.name, this.weight, this.price);
    };
    return Snickers;
}());
var chocolateBar = new Snickers('snickers', 300, 20);
console.log(chocolateBar);
