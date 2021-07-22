
interface IChocolate {
    clone(): object;
};

class Snickers implements IChocolate {
    private name: string;
    private weight: number;
    private price: number;
    constructor(chocolateName: string, chocolateWeight: number, chocolatePrice: number) {
        this.name = chocolateName;
        this.weight = chocolateWeight;
        this.price = chocolatePrice;
    }
    clone() {
        return new Snickers(this.name, this.weight, this.price);
    }
}

const chocolateBar = new Snickers('snickers', 300, 20);

console.log(chocolateBar);


