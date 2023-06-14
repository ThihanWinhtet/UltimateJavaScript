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