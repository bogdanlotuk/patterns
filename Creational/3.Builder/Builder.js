var Computer = /** @class */ (function () {
    function Computer() {
    }
    return Computer;
}());
;
var ComputerBuilder = /** @class */ (function () {
    function ComputerBuilder() {
        this.computer = new Computer;
    }
    ComputerBuilder.prototype.addMonitor = function (monitor) {
        this.computer.monitor = monitor;
        return this;
    };
    ComputerBuilder.prototype.addKeyboard = function (keyboard) {
        this.computer.keyboard = keyboard;
        return this;
    };
    ComputerBuilder.prototype.addMouse = function (mouse) {
        this.computer.mouse = mouse;
        return this;
    };
    ComputerBuilder.prototype.build = function () {
        return this.computer;
    };
    return ComputerBuilder;
}());
;
var myComputer = new ComputerBuilder()
    .addMonitor('LG')
    .addKeyboard('Logitech')
    .addMouse('A4tech')
    .build();
var myComputer2 = new ComputerBuilder()
    .addMonitor('Samsung')
    .build();
console.log(myComputer);
console.log(myComputer2);
