var Trip = /** @class */ (function () {
    function Trip() {
    }
    Trip.prototype.setTicket = function () {
        console.log('We already have ticket');
    };
    Trip.prototype.setInsurance = function () {
        console.log('This is good insurance for us');
    };
    Trip.prototype.setClothes = function () {
        console.log('And we also by clothes for relax');
    };
    Trip.prototype.setMoney = function () {
        console.log('In our portmone we have 2000 dollars');
    };
    Trip.prototype.ready = function () {
        console.log('We are ready to the trip');
    };
    return Trip;
}());
var TripFacade = /** @class */ (function () {
    function TripFacade(trip) {
        this.trip = trip;
    }
    TripFacade.prototype.assembleForTrip = function () {
        this.trip.setTicket();
        this.trip.setInsurance();
        this.trip.setClothes();
        this.trip.setMoney();
        this.trip.ready();
    };
    return TripFacade;
}());
;
var tripAgency = new TripFacade(new Trip());
var ourTrip = tripAgency.assembleForTrip();
console.log(ourTrip);
