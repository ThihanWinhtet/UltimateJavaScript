
// Control Flow Exercises

// 1 Max of Two Numbers
// var maxNum;
// function maxOf(int1 , int2){
//     if(int1 > int2){
//         maxNum = int1;
//     }else{
//         maxNum = int2;
//     }
// }
// maxOf(5,4);
// console.log(maxNum, "testing the branch");

// 2 Landscape or Portrait
// console.log(isLandscape(12,40));
// function isLandscape(width , height){
//     return(width > height);
// }

// 3 FizzBuzz
// console.log(FizzBuzz(15));
// function FizzBuzz(input){
//     if(typeof(input) !== 'number')
//         return 'Not a number';
//     if(input % 3 == 0 && input % 5 == 0)
//         return 'FizzBuzz'
//     else if(input % 3 == 0)
//         return 'Fizz';
//     else if(input % 5 == 0)
//         return 'Buzz';
    
//     return input;    
// }

// 4 Demerit Point 
// console.log(checkSpeed(100));
// function checkSpeed(speed){
//     const speedLimitActive = 75;
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     const limitedPoint = 12;

//     if(speed >= speedLimitActive){
//         if(Math.floor((speed - speedLimit) / kmPerPoint) >= limitedPoint){
//             return 'License Suspended';
//         }
//         return 'Point ' + Math.floor((speed - speedLimit) / kmPerPoint);
//     }
//     return 'OK'
// }

// 5 Even and Odd Numbers
// showNumbers(11);
// function showNumbers(limit){
//     for(let i = 0; i <= limit; i++){
//         console.log(i , (i % 2 == 0) ? 'EVEN' : 'ODD');
//     }
// }

// 6 Count Truthy
// '' false NaN undefined null
// let arr = [1,2,3,'', undefined, null];
// console.log(countTruthy(arr));
// function countTruthy(array){
//     let count = 0;
//     for(let item of arr){
//         if(item){
//             count += 1;
//         }
//     }
//     return count;
// }

// 7 String Properties
// const people = {
//     name : 'Steve',
//     age : 24,
//     sex : 'male'
// }

// showProperties(people);
// function showProperties(obj){
//     for(let item in people){
//         let type = typeof(people[item])
//         if(type === 'string'){
//             console.log(item,  people[item]);
//         }
//     }
// }

// 8 Sum of Multiples
// console.log(sum(11));;
// function sum(input){
//     let result = 0;

//     for(let i = 0 ; i <= input ; i++){
//         if(i % 3 == 0 || i % 5 == 0){
//             result += i;
//         }
//     }

//     return result;
// }


// 9 Grade
let marks = [80, 100, 100];
console.log(calculateGrade(marks));;
function calculateGrade(marks){
    let sumMark = 0;
    let averageMark = 0;

    for(let mark of marks){
        sumMark += mark;
    }

    averageMark = sumMark / marks.length;
    if(averageMark < 60)
        return 'F';
    if(averageMark < 70)
        return 'D';
    if(averageMark < 80)
        return 'C';
    if(averageMark < 90)
        return 'B';

    return 'A';

}
