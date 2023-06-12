
// no1
const address = {
    street : 'BelAir',
    city : 'Zonamia',
    zipCode : '198zC'
}

showAddress(address);
function showAddress(obj){
    for(let item in address){
        console.log(item, address[item]);
    }
}

// no2