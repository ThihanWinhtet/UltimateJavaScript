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