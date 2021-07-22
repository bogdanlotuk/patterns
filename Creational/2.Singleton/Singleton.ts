class Hryvnia {
    private static instance: Hryvnia;
    
    public static getPay() {
        if (!Hryvnia.instance) {
            Hryvnia.instance = new Hryvnia();
        }
        return Hryvnia.instance;
    }
}