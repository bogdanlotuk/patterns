class MemoryHDD {
    interfaceHDD() {
        console.log('This computer has HDD');
    }
};

class MemorySSD {
    interfaceSSD() {
        console.log('This computer has SSD');
    }
};

class AdapterSSD {
    private memory
    constructor(memory) {
        this.memory = memory;
    }
    interfaceHDD() {
        this.memory.interfaceSSD();
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
const oldMemory = new MemoryHDD();
console.log(myComputer.startComputer(oldMemory));

const myComputerWithSSD = new Computer();
const memoryAdapter = new AdapterSSD(new MemorySSD());
console.log(myComputerWithSSD.startComputer(memoryAdapter));
