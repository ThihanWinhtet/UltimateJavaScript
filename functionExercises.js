// no1 Sum of Args
console.log(sum([1,2,3,4]));
function sum(...args){
    let sum = 0;
    if(args.length == 1 && Array.isArray(args[0])){
        args = [...args[0]];
    }
    args.forEach(item => sum += item);
    return sum;
}


// no2 Area of Circle
const circle = {
    radius : 2,
    get area(){
        return Math.PI * this.radius * this.radius;
    }
}
console.log(circle.area);


// no3 Error Handling
const number = [1,2,3,4,5,3,3];
try{
    const count = countOccurrences(null, 3);
    console.log(count);
}catch(e){
    console.log(e);
}
function countOccurrences(array, searchElement){
    if(!Array.isArray(array)){
        throw new Error('Invalid Value');
    }
    return  array.reduce((item, current)=>{
        const test = (current === searchElement) ? 1 : 0;
        return item += test;
    }, 0);
}