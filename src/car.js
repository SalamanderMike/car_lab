// car.js
// Michael McClure

var lot = {	make: "Toyota",
				model: "Corolla",
				year: 1995,
				color: "Blue",
				state: "off",
				prevOwners: [],
				currOwner: "Manufacturer"
			};

// ******** Car CONSTRUCTOR ********
function Car (make, model, year, color) {
	this.make = make,
	this.model = model,
	this.year = year,
	this.color = color,
	this.state = "off",
	this.prevOwners = [],
	this.currOwner = "Manufacturer",
	this.passengers = [];
}

// ******** ADD PROTOTYPES TO Car ********
Car.prototype.sale = owner1;
Car.prototype.paint = function(paint){
	return this.color = paint;
}
Car.prototype.start = function(){
		return this.state = "on";
	}
Car.prototype.off = function(){
	return this.state = "off";
}
Car.prototype.driveTo = function(destination){
	if (this.state === "on") {
		return "Driving to " + destination;
	};
}
Car.prototype.park = function(){
	if (this.state === "off") {
		return "Parked!!";
	};
}
Car.prototype.pickUp = function(name){
	if (this.state === "on") {
		this.passengers.push(name);
		return "Driving to pick up, " + this.passengers;
	};
}
Car.prototype.dropOff = function(name){
	if (this.state === "on") {
		var drop;
		this.passengers.forEach(function(element) { 
			if (element === name) {
				drop = "dropped off " + name;
			}
		});
		this.passengers.shift();
		return drop;
	};
}

// ******** NEW INSTANCE OF Car ********
var owner1 = new Car(lot.make, lot.model, lot.year, lot.color);

// ******** OUTPUT ********
owner1.sale = "Peter";

console.log(owner1.sale, "drives a", owner1.paint("Red"), "car");
console.log(owner1.sale, "turns the car", owner1.start());
console.log(owner1.sale, "is", owner1.driveTo("Helsinki, Finland"));
console.log(owner1.pickUp("Michael"));
console.log("He", owner1.dropOff("Michael"));

// check to see who's in passengers array
console.log(owner1.passengers, "is in the car, now ((check))");
// set state to "off"
owner1.state = "off";
console.log("He turned the car off, then ", owner1.park());

