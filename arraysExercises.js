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
// const number = [1,2,33,4];
// 
// console.log(includes(number,33));
// 
// function includes(array , searchElement){
//     for(let item of array){
//         if(item === searchElement){
//             return true;
//         }
//     }
//     return false;
// }


// no3 Except

const number = [1,2,3,4,5,6];
const output = except(number, [1,2,3]);
console.log(output);
function except(number , excluded){
    for(let num of excluded){   
        number = number.filter(item => item != num);
    }
    return number;
}