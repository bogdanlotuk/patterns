class MemoryHdd {
    interfaceHDD() {
        console.log('This computer has HDD');
    }
};

class MemorySsd {
    interfaceSSD() {
        console.log('This computer has SSD');
    }
};

class AdapterSsd {
    private memory
    constructor(memory) {
        this.memory = memory;
    }
    interfaceHdd() {
        this.memory.interfaceSsd();
    }
};

class Computer {
    private memory
    startComputer(memory) {
        this.memory = memory.interfaceHDD();
        return this.memory
    }
};

const myComputer = new Computer();
const oldMemory = new MemoryHdd();
console.log(myComputer.startComputer(oldMemory));

// const myComputer2 = new Comp();
// const memoryAdapter1 = new AdapterSsd(new MemorySsd());
// console.log(myComp2.startComputer(memoryAdapter));