
// no1
// const address = {
//     street : 'BelAir',
//     city : 'Zonamia',
//     zipCode : '198zC'
// }

// showAddress(address);
// function showAddress(obj){
//     for(let item in address){
//         console.log(item, address[item]);
//     }
// }

// no2
// function createAddress(){
//     return {
//         street : 'BelAir',
//         city : 'Zonamia',
//         zipCode : '198zC'
//     }
// }

// showAddress(createAddress);
// function showAddress(obj){
//     for(let item in address){
//         console.log(item, address[item]);
//     }
// }

// no3
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');


console.log(areEqual(address1,address2));

function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areSame(address1, address2){
    return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode;
}

function areEqual(address1, address2){
    return address1.street == address2.street && address1.city == address2.city && address1.zipCode == address2.zipCode;
}