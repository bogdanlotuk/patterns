class Computer {
    constructor() {
        this.monitor = false;
        this.keyboard = false;
    }
}
class ComputerBuilder {
    constructor() {
        this.computer = new Computer();
    }
    addMonitor(monitor) {
        this.computer.monitor = monitor;
        return this;
    }
    addKeyboard(keyboard) {
        this.computer.keyboard = keyboard;
        return this;
    }
    addMouse(mouse) {
        this.computer.mouse = mouse;
        return this;
    }
    build() {
        return this.computer;
    }
};

const myComputer = new ComputerBuilder()
                    .addMonitor(true)
                    .addKeyboard(true)
                    .addMouse('A4tech')
                    .build();

console.log(myComputer);