class John {

    public void MowLawn(String neighbor) {
        System.out.println("John is mowing the lawn for " + neighbor + ".");
    }

    public void FixCar(String neighbor, String carModel) {
        System.out.println("John is fixing " + neighbor + "'s " + carModel + ".");
    }

    public void PaintHouse(String neighbor) {
        System.out.println("John is painting the house for " + neighbor + ".");
    }
}

class MainJohn {

    public static void main(String[] args) {

        John john = new John();

        john.MowLawn("Alice");
        john.FixCar("Bob", "Toyota Camry");
        john.PaintHouse("Charlie");
    }
}