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

//Find numbers in an array that add up to a target value
function findNumbersInArrayThatAddToTargetValue(number, array){
    let arrayOfIndices = [];
    for(let i = 0; i < array.length; i++){
        for(let index = 0; index < array.length; index++){
            if(index === i) {
                continue;
            } else if(parseInt(array[i]) + parseInt(array[index]) === number){
                arrayOfIndices.push(i,index);
                return arrayOfIndices;
            }
        }
    }
    return [];
}
let userNumber = parseInt(prompt("Enter a target number"));
let arrayOfNumbers = [2,11,7,21,16,34,6];
alert(findNumbersInArrayThatAddToTargetValue(userNumber, arrayOfNumbers));

//checking if a list of numbers form a sequence
function checkForSequence(listOfNumbers){
    let arrayOfDifferences= [];
    listOfNumbers.sort((a,b) => (a-b));
    for(let i = 0; i < listOfNumbers.length -1; i++){
        let difference = parseInt(listOfNumbers[i+1] - parseInt(listOfNumbers[i]));
        arrayOfDifferences.push(difference);
    }
    for(let i = 0; i < listOfNumbers.length -2; i++){
        if(arrayOfDifferences[i] !== arrayOfDifferences[i+1]){
            return false;
        } 
    }
    return true;
}
let listOfNumbers = [5,7,3,11,9,1,13];
let isSequence = checkForSequence(listOfNumbers);
alert(`Is the array of numbers a sequence: ${isSequence}`);

//Process an array of positive and negative numbers
function processArray(array){
    let count = 0;
    let negativeSum = 0;
    for(let i = 0; i < array.length; i++){
        if(parseInt(array[i]) > 0){
            count++;
        } else if(parseInt(array[i]) < 0){
            negativeSum += parseInt(array[i]);
        }
    }
    return [count,negativeSum];
}
let arrayOfInts = [7,9,-3,-32,107,-1,36,95,-14,-99,21];
let processedArray = processArray(arrayOfInts);
alert(processedArray);

//Highest and lowest number in a string of numbers
function highestLowest(string){
    let highest = "0";
    let lowest = "0";
    let splitString = string.split(" ");
    for(let i = 0; i < splitString.length; i++){
        if(parseInt(splitString[i]) > parseInt(highest)){
            highest = splitString[i];
        }
        if(parseInt(splitString[i]) < parseInt(lowest)){
            lowest = splitString[i];
        }
    }
    return lowest + " " + highest;
}
let highestLowestNumberInString = highestLowest("3 9 0 4 8 10 2");
alert(highestLowestNumberInString);

//Validate email address
function validateEmailAddress(string){
    if(string.includes("@")){
        let emailArray = string.split('@');
        if(emailArray[1].includes(".")){
            return true
        }
    } else {
        return false;
    }
}
function getEmailAddress(){
    let emailAddress = prompt("enter your email address");
    let isEmailValid = validateEmailAddress(emailAddress);
    while(!isEmailValid){
        emailAddress = prompt("You have entered an invalid email address! Please re-enter your email address");
        isEmailValid = validateEmailAddress(emailAddress);
        if(emailAddress === null){
            return;
        }
    }
    alert("Thank you!")
    return
}
getEmailAddress();

//replace each letter in string with alphabet position
function replaceLetterWithAlphabetPosition(string){
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    string = string.toLowerCase();
    let alphabetPositionString = [];
    for(let i = 0; i < string.length; i++){
        if(!alphabet.includes(string[i])){
            continue;
        }else {
  Inner:    for(let index = 0; index < alphabet.length; index++){
                if(string[i] === alphabet[index]){
                    alphabetPositionString.push((index + 1) + " ");
                    break Inner;
                }
            }
        }
    }
    let newString = "";
    for(let i = 0 ; i < alphabetPositionString.length; i++){
        newString += alphabetPositionString[i];
    }
    newString = newString.trimEnd();
    return newString;
}
let userStringAlphabet = prompt("Please enter a string");
let stringWithAlphabetPositions = replaceLetterWithAlphabetPosition(userStringAlphabet);
alert(`The alphabet positions of your string are: ${stringWithAlphabetPositions}`);


//Briefcase with 4-digit lock (smallest number of turns to move numbers from current value to target value)
function smallestNumberOfTurns(numberOne,numberTwo){
    numberOne = numberOne.toString().split("");
    numberTwo = numberTwo.toString().split("");
    let baseNumber = 0;
    let downNumber = 0;
    let upNumber = 0;
    let numberOfTotalTurns = 0;
    for(let i = 0; i < numberOne.length; i++){
       baseNumber = parseInt(numberOne[i]) + 10;
       if(parseInt(numberOne[i]) > parseInt(numberTwo[i])){
            downNumber = baseNumber - (parseInt(numberTwo[i]) + 10);
            upNumber = (parseInt(numberTwo[i]) + 20) - baseNumber;
            if(downNumber > upNumber){
                numberOfTotalTurns += upNumber;
            } else {
                numberOfTotalTurns += downNumber;
            }
            continue;
        } else {
            downNumber = baseNumber - parseInt(numberTwo[i]);
            upNumber = (parseInt(numberTwo[i]) + 10) - baseNumber;
            if(downNumber > upNumber){
                numberOfTotalTurns += upNumber;
            } else {
                numberOfTotalTurns += downNumber;
            }
            continue;
        }
    }
    return numberOfTotalTurns;
}
let currentLockSetting = 3893;
let targetLockSetting = 5296;
//smallestNumberOfTurns(currentLockSetting,targetLockSetting);
let numberOfTurns = smallestNumberOfTurns(currentLockSetting,targetLockSetting);
alert(`Thsi smallest number of turns to change the lock to the target setting is ${numberOfTurns}`);


//return the reciprocal of the reverse of a given number
function reciprocalOfReverse(number){
    let reverseNumberArray = number.toString().split("").reverse();
    let reverseNumber = "";
    for(let i = 0; i < reverseNumberArray.length; i++){
        reverseNumber += reverseNumberArray[i];
    }
    let reciprocalNumber = parseFloat(1 / parseInt(reverseNumber));
    return reciprocalNumber;
}
let number = 17;
let reverseReciprocal = reciprocalOfReverse(number);
alert(reverseReciprocal);

