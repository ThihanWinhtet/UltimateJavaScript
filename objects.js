// Factory Function
// -*- like factory producing products, Factory Functions produce objects. 

function createCircle(radius){
    return {
        radius, // if our key and value are the same, we can remove the value and just add key
        draw(){
            console.log("draw me");
        }
    }
}

let circle1 = createCircle(1);
console.log(circle1);

// Constructor Function 

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw me");
    }
}

const circle = new Circle(4);
// -*- when we call the "new" operator three things happen
// -*- create the empty js object
// -*- it will set "this" to the new empty object
// -*- will return new object from the constructor function