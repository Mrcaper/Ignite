// Class is a blueprint which inherit it property to any other variable
class Car{
    Model='toyota';
    color="red";
    Wheel=4;
}
let a=new Car;
console.log(a);

// Constructor
// It is use to set or modify the values in existing object properties of class
class Car1{
    model='innova';
    color='White';
    Wheel=4;
    seats=6;
    #Engine=1998;
    constructor (model,color,Wheel,seats,Engine){
        this.model=model,
        this.color=color,
        this.Wheel=Wheel,
        this.seats=seats,
        this.#Engine=Engine

    }
}
let car=new Car1('farari','red',4,2,2300);
console.log(car);