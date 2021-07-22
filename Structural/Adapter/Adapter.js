var MemoryHdd = /** @class */ (function () {
    function MemoryHdd() {
    }
    MemoryHdd.prototype.interfaceHDD = function () {
        console.log('This computer has HDD');
    };
    return MemoryHdd;
}());
;
var MemorySsd = /** @class */ (function () {
    function MemorySsd() {
    }
    MemorySsd.prototype.interfaceSSD = function () {
        console.log('This computer has SSD');
    };
    return MemorySsd;
}());
;
var AdapterSsd = /** @class */ (function () {
    function AdapterSsd(memory) {
        this.memory = memory;
    }
    AdapterSsd.prototype.interfaceHdd = function () {
        this.memory.interfaceSsd();
    };
    return AdapterSsd;
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
var oldMemory = new MemoryHdd();
console.log(myComputer.startComputer(oldMemory));
// const myComputer2 = new Comp();
// const memoryAdapter1 = new AdapterSsd(new MemorySsd());
// console.log(myComp2.startComputer(memoryAdapter));
