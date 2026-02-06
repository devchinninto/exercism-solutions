public class Lasagna {
    public int expectedMinutesInOven() {
        return 40;
    }

    public int remainingMinutesInOven(int actualMinutes) {
     int total = expectedMinutesInOven() - actualMinutes;
        return total;
    }

    public int preparationTimeInMinutes(int layersAdded) {
        int total = layersAdded * 2;
            return total;
    }

    public int totalTimeInMinutes(int layersAdded, int actualMinutes) {
        int total = preparationTimeInMinutes(layersAdded) + actualMinutes;
        return total;
        }
}
