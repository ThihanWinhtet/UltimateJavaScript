
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

// 4 Demerit Points 
console.log(checkSpeed(100));
function checkSpeed(speed){
    const speedLimitActive = 75;
    const speedLimit = 70;
    const kmPerPoint = 5;
    const limitedPoint = 12;

    if(speed >= speedLimitActive){
        if(Math.floor((speed - speedLimit) / kmPerPoint) >= limitedPoint){
            return 'License Suspended';
        }
        return 'Point ' + Math.floor((speed - speedLimit) / kmPerPoint);
    }
    return 'OK'
}
