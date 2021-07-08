class MemoryHDD {
    interfaceHDD() {
        console.log('This computer has HHD');
    }
};

class MemorySSD {
    interfaceSSD() {
        console.log('This computer has SSD');
    }
};

class AdapterSSD {
    constructor(memory) {
        this.memory = memory;
    }
    interfaceHDD() {
        this.memory.interfaceSSD();
    }
};

class Computer {
    startComputer(memory) {
        memory.interfaceHDD();
    }
};

const myComp = new Computer();
const oldMemory = new MemoryHDD();
console.log(myComp.startComputer(oldMemory));

const myComp2 = new Computer();
const memoryAdapter = new AdapterSSD(new MemorySSD());
console.log(myComp2.startComputer(memoryAdapter));

// const myComp3 = new Computer();
// const memoryAdapter = new MemorySSD();
// console.log(myComp3.startComputer(AdapterSSD));