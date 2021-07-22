var MemoryHDD = /** @class */ (function () {
    function MemoryHDD() {
    }
    MemoryHDD.prototype.interfaceHDD = function () {
        console.log('This computer has HDD');
    };
    return MemoryHDD;
}());
;
var MemorySSD = /** @class */ (function () {
    function MemorySSD() {
    }
    MemorySSD.prototype.interfaceSSD = function () {
        console.log('This computer has SSD');
    };
    return MemorySSD;
}());
;
var AdapterSSD = /** @class */ (function () {
    function AdapterSSD(memory) {
        this.memory = memory;
    }
    AdapterSSD.prototype.interfaceHDD = function () {
        this.memory.interfaceSSD();
    };
    return AdapterSSD;
}());
;
var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.startComputer = function (memory) {
        this.memory = memory.interfaceHDD();
        return this.memory;
    };
    return Computer;
}());
;
var myComputer = new Computer();
var oldMemory = new MemoryHDD();
console.log(myComputer.startComputer(oldMemory));
var myComputerWithSSD = new Computer();
var memoryAdapter = new AdapterSSD(new MemorySSD());
console.log(myComputerWithSSD.startComputer(memoryAdapter));
