// Objects Literals
// {} refers to the Object literal syntax 
// An object in JS is essentially a collection of key value pairs.

const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 2
    },
    draw(){
        console.log('draw');
    }
};
circle.draw();


// Factory Function
// eg...
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw factory');
        }
    }
}
createCircle(1).draw();


// Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function draw(){
        console.log("constructor draw");
    }
}

let circle1 = new Circle(1);