class Phone {
    getDescription() {
        console.log('I am a broken phone')
    }
}

class Laptop {
    getDescription() {
        console.log('I am a broken laptop')
    }
}

class PhoneRepairman {
    getDescription() {
        console.log("I'm repairer and I can repair only phones")
    }
}

class LaptopRepairman {
    getDescription() {
        console.log("I'm repairer and I can repair only laptops")
    }
}

interface IAbstractFactory {
    makeDevice()
    makeRepairman()
}

class PhoneWorkshop implements IAbstractFactory {
    makeDevice(){
        return new Phone()
    }

    makeRepairman() {
        return new PhoneRepairman()
    }
}

class LaptopWorkshop implements IAbstractFactory {
    makeDevice(){
        return new Laptop()
    }

    makeRepairman() {
        return new LaptopRepairman()
    }
}

let abstractFactory = new PhoneWorkshop()
let device = abstractFactory.makeDevice()
let expert = abstractFactory.makeRepairman()

console.log(device.getDescription(), expert.getDescription())
