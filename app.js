"use strict"
//Happy Numbers
let happyNumber = "Happy Number!";
let sadNumber = "Not a Happy Number.";
let newNumber = 0;

function happyNumberchecker(number){
    if(number === 1){
        return happyNumber;
    }
    let numberString = number.toString();
    while(numberString.length > 1){
        for(let i = 0; i < numberString.length; i++){
        newNumber += Math.pow(parseInt(numberString[i]),2);
        }
        numberString = newNumber.toString();
        newNumber = 0;
    }
    if(parseInt(numberString) === 1){
        return happyNumber;
    } else {
        return sadNumber;
    }
}
let userNumber = happyNumberchecker(prompt("Enter a number to check if it is happy!"));
alert(userNumber);

//Prime Numbers
let prime = "Prime Number";
let notPrime = "Non-Prime Number"
function checkIfNumberPrime(number){
    if(number > 1 && (number === 2 || number === 3 )){
        return prime;
    } else if(number%2 === 0 || number%3 === 0 || number%5 === 0){
        return notPrime
    } else if(number <= 1){
        return notPrime;
    }
    for(let i = 7; i<number;i++){
        if(number%i === 0){
            return notPrime
        }
    } 
    return prime;
}
let userInput = checkIfNumberPrime(prompt("Enter a number to check if prime"));
alert(userInput);

//Fibonacci 
function fibonacciSequence(number){
    let fibonacciArray = [1,1]
        for(let i =0; fibonacciArray.length<number; i++){
            fibonacciArray.push(parseInt(fibonacciArray[i]) + parseInt(fibonacciArray[i+1]));
        }
        return fibonacciArray;
}
let sequence = fibonacciSequence(prompt("Enter number of numbers in Fibonacci sequence to display"));
alert(sequence);

