class Singleton {
    private static instance: Singleton;
    
    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const example1 = Singleton.getInstance();
const example2 = Singleton.getInstance();

function checkResult() {
    if (example1 === example2) {
        console.log('Success');
    } else {
        console.log('Fail');
    }
}

checkResult();