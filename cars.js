 // Parent class
class Vehicle{

    constructor (make, model, year){
        this.make = make;
        this.model = model;
        this.year =year;
    }

    Information(){
        console.log("Make : " + this.make );
        console.log("Model : " + this.model );
        console.log("Year  :"  + this.year );
    }
}

//Child Class inherit data from Vehicle class

//Extends -- used in class declarations or class expressions to create a class that is a child of another class.
//Super -- is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.

class Car extends Vehicle{

    constructor(make,model, year, doors){
        super(make, model, year);
        this.doors = doors
    }

    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`)
    }
}

let y = new Car("Toyota", "Yaris", 2022, 2);

y.Information();