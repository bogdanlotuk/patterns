class Trip {
    setTicket() {
        console.log('We already have ticket');
    }
    setInsurance() {
        console.log('This is good insurance for us');
    }
    setClothes() {
        console.log('And we also by clothes for relax');
    }
    setMoney() {
        console.log('In our portmone we have 2000 dollars');
    }
    ready() {
        console.log('We are ready to the trip');
    }
}

class TripFacade {
    private trip
    constructor(trip) {
        this.trip = trip;
    }

    assembleForTrip() {
        this.trip.setTicket();
        this.trip.setInsurance();
        this.trip.setClothes();
        this.trip.setMoney();
        this.trip.ready();   
    }
};

const tripAgency = new TripFacade(new Trip());
const ourTrip = tripAgency.assembleForTrip();
console.log(ourTrip);