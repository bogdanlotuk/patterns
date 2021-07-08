function deviceProducer(type) {
    return type === 'tablet' ? tabletFactory : phoneFactory;
};

function tabletFactory() {
    return new Tablet();
};

function phoneFactory() {
    return new Phone();
};

class Tablet {
    info() {
        return "This is Galaxy Tab";
    }
};

class Phone {
    info() {
        return "This is Ipone X";
    }
};

const produce = deviceProducer('tablet');
const myTablet = new produce();
console.log(myTablet.info());