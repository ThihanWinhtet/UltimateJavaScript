// no1 Array From Range

const number = arrayFromRange(1,-4);
console.log(number);
function arrayFromRange(min, max){
    let array = [];
    for(let i = min; i <= max ; i++){
        array.push(i);
    }
    return array;
}