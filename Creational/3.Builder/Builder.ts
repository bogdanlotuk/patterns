interface IComputer {
    build(): Computer;
}
class Computer {
    monitor: string;
};
class ComputerBuilder implements IComputer {
    private computer;
    constructor (){
        this.computer = new Computer;
    }

    addMonitor(monitor: string) {
        this.computer.monitor = monitor;
        return this;
    }
    addKeyboard(keyboard: string) {
        this.computer.keyboard = keyboard;
        return this;
    }
    addMouse(mouse:string) {
        this.computer.mouse = mouse;
        return this;
    }
    build() {
        return this.computer;
    }
};

const myComputer = new ComputerBuilder()
                    .addMonitor('LG')
                    .addKeyboard('Logitech')
                    .addMouse('A4tech')
                    .build();

const myComputer2 = new ComputerBuilder()
                    .addMonitor('Samsung')
                    .build();


console.log(myComputer);
console.log(myComputer2);
