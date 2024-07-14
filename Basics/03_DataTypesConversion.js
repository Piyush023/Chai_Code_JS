const accountId = 10 // This will be Number.
let accountEmail = 'xyz@gmail.com'; // This will be String.
let accountPassword = 0; // This will be Number.
var isAccountActive = true; // This will be Boolean.
var accountType; // This will be undefined.
let accountStatus = null // This will be Object.

/*

DataType Conversion In JS -

Number - 
    '33' => 33
    '33abc' =>  NaN
    true => 1
    false => 0
    null => 0

Boolean - 
    1 => true
    0 => false
    '' => false
    'abc' => true
*/

console.table([Boolean(accountId), Number(accountEmail), Boolean(accountPassword), Number(isAccountActive), Number(accountType), Number(accountStatus)])

console.log(1+'2')
// This will result into the output of 12
console.log(1+2+'2')
// This will result into the output of 32 because the JS will execute this code from left to right and will add 1 and 2 first and then update the value of '2' and convert it into a string 
console.log(+true)
// This will output 1 becoz due + operator it will convert this into number.
console.log(+'')
// This will output 0 becoz due + operator it will convert this into number.