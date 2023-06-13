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
// const number = [1,2,3,4,5,6];
// const output = except(number, [1,2,3]);
// console.log(output);
// function except(number , excluded){
//     for(let num of excluded){   
//         number = number.filter(item => item != num);
//     }
//     return number;
// }


// no4 Moving an Element
// const number = [1,2,3,4,5];
// const output = move(number, 0, 3);
// console.log(output);
// function move(array , index, offset){
//     if(offset < 0){
//         offset = index + offset;
//         if(offset < 0){
//             console.error("Invalid Offset")
//             return;
//         }
//     }
//     let newarray = array.filter(item => item != array[index]);
//     newarray.splice(offset, 0, array[index]);
//     return newarray;
// }


// no5 Count Occurrences
// const number = [1,2,3,4,5,3,3];
// const count = countOccurrences(number, 5);
// console.log(count);
// function countOccurrences(array, searchElement){
//     // let count = 0;
//     // for(let item of array){
//     //     if(item === searchElement){
//     //         count += 1;
//     //     }
//     // }
//     // return count;

//     return  array.reduce((item, current)=>{
//         const test = (current === searchElement) ? 1 : 0;
//         return item += test;
//     }, 0);
// }


// no6 Get Max
const number = [1,2,3,4,5];
const max = getMax(number);
console.log(max);
function getMax(array){
    return array.reduce((item , current)=>{
        return (current > item) ? current : item;
    }, 0);
}