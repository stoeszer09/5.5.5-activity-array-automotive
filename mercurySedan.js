//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage, maxPassengers, passenger, numberOfWheels, maxSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage)
        this.maxPassengers = maxPassengers
        this.passenger = passenger
        this.numberOfWheels = numberOfWheels
        this.maxSpeed = maxSpeed
        this.fuel = fuel
        this.scheduleService = scheduleService
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((this.passenger + num) <= this.maxPassengers){
                this.passenger += num
                return this.passenger
            } else {
                console.log(`Not enough room to add $(num) more passengers. There is only enough room for $(this.maxPassengers - this.passenger)`)
            }
        } else {
            console.log("This care is already full.")
        }
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }

    scheduleService(miles) {
        if (miles > 30000) {
            this.scheduleService = true
            return this.scheduleService
        }
    }
}

let newMercury = new Car("Mercury", "Sedan", "1965", "color", "mileage", 6, 0, 4, 200, 100, false)

console.log(newMercury)