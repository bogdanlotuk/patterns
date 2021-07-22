var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ScrapMetal = /** @class */ (function () {
    function ScrapMetal() {
    }
    ScrapMetal.prototype.getPrice = function () {
        return this.price;
    };
    ScrapMetal.prototype.getMetalName = function () {
        return this.metalName;
    };
    ScrapMetal.prototype.setMetalName = function (metalName) {
        this.metalName = metalName;
    };
    ScrapMetal.prototype.setPrice = function (price) {
        this.price = price;
    };
    return ScrapMetal;
}());
var ScrapAluminium = /** @class */ (function (_super) {
    __extends(ScrapAluminium, _super);
    function ScrapAluminium() {
        var _this = _super.call(this) || this;
        _this.setMetalName('Aluminium');
        _this.setPrice(30);
        return _this;
    }
    return ScrapAluminium;
}(ScrapMetal));
;
var ScrapIron = /** @class */ (function (_super) {
    __extends(ScrapIron, _super);
    function ScrapIron() {
        var _this = _super.call(this) || this;
        _this.setMetalName('Iron');
        _this.setPrice(5);
        return _this;
    }
    return ScrapIron;
}(ScrapMetal));
;
var ScrapCuprum = /** @class */ (function (_super) {
    __extends(ScrapCuprum, _super);
    function ScrapCuprum() {
        var _this = _super.call(this) || this;
        _this.setMetalName('Cuprum');
        _this.setPrice(100);
        return _this;
    }
    return ScrapCuprum;
}(ScrapMetal));
;
var CompositeMetal = /** @class */ (function (_super) {
    __extends(CompositeMetal, _super);
    function CompositeMetal() {
        var _this = _super.call(this) || this;
        _this.sumOfMetal = [];
        return _this;
    }
    CompositeMetal.prototype.add = function (metal) {
        this.sumOfMetal.push(metal);
    };
    CompositeMetal.prototype.getPrice = function () {
        var _this = this;
        return this.sumOfMetal
            .map(function (metal) { return _this.sumOfMetal.getPrice(); })
            .reduce(function (a, b) { return a + b; });
    };
    return CompositeMetal;
}(ScrapMetal));
var NewScrap = /** @class */ (function (_super) {
    __extends(NewScrap, _super);
    function NewScrap() {
        var _this = _super.call(this) || this;
        _this.setMetalName('Scrap1');
        return _this;
    }
    return NewScrap;
}(CompositeMetal));
var myScrap = new NewScrap();
myScrap.add(new ScrapAluminium());
myScrap.add(new ScrapIron());
myScrap.add(new ScrapCuprum());
console.log(myScrap.getMetalName() + " price is " + myScrap.getPrice() + "grn");
