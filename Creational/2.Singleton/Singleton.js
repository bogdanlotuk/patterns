var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    // private constructor() { }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    return Singleton;
}());
var example1 = Singleton.getInstance();
var example2 = Singleton.getInstance();
function checkResult() {
    if (example1 === example2) {
        console.log('Success');
    }
    else {
        console.log('Fail');
    }
}
console.log(example1);
console.log(example2);
checkResult();
