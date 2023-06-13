// no1 Array From Range
// const number = arrayFromRange(1,-4);
// 
// console.log(number);
// function arrayFromRange(min, max){
//     let array = [];
//     for(let i = min; i <= max ; i++){
//         array.push(i);
//     }
//     return array;
// }


// no2 Includes
const number = [1,2,33,4];

console.log(includes(number,33));

function includes(array , searchElement){
    for(let item of array){
        if(item === searchElement){
            return true;
        }
    }
    return false;
}