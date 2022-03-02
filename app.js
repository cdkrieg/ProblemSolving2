"use strict"
//Happy Numbers
// let happyNumber = "Happy Number!";
// let sadNumber = "Not a Happy Number.";
// let newNumber = 0;

// function happyNumberchecker(number){
//     if(number === 1){
//         return happyNumber;
//     }
//     let numberString = number.toString();
//     let count = 1;
//     while(numberString.length > 1){
//         for(let i = 0; i < numberString.length; i++){
//         newNumber += Math.pow(parseInt(numberString[i]),2);
//         console.log(`for loop newNumber is ${newNumber}`);
//         }
//         console.log(newNumber);
//         numberString = newNumber.toString();
//         newNumber = 0;
//         count++ ;
//         if(count > 100){
//             break;
//         }
//     }
//     if(parseInt(numberString) === 1){
//         return happyNumber;
//     } else {
//         return sadNumber;
//     }
// }
// let userNumber = happyNumberchecker(prompt("Enter a number to check if it is happy!"));
// alert(userNumber);

//Prime Numbers
let prime = "Prime Number";
let notPrime = "Non-Prime Number"
function checkIfNumberPrime(number){
    if(number === 1 || number === 3 || number === 5){
        return prime;
    } else {
        for(let i = 0; 6*i+1 < number ; i++){
            if(number === (6*i+1) || number === (6*i-1)){
                return prime;
            }
        }
        return notPrime;
    }
}
let userInput = checkIfNumberPrime(prompt("Enter a number to check if prime"));
alert(userInput);