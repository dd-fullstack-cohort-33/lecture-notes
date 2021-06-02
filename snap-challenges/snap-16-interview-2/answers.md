1.
JS version:
```JavaScript
//  Write a function that takes a string and returns it with all vowels (not including y) removed.
function removeVowels (myString) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let filteredString = '';

    // Split our string into an array of characters and iterate over each character.
    let myArray = myString.split('');
    myArray.forEach(letter => {

        // Check if our character is in the vowels array.
        if (!vowels.includes(letter)){
            // If not, add it to our filtered string.
            filteredString = filteredString + letter;
        }
    });

    return filteredString;
}

console.log(removeVowels("hello world"));
// Result: hll wrld
```
Pseudocode version:
```
Problem: Write a function that takes a string and returns it with all vowels (not including y) removed.

function removeVowels (myString) {
    declare filteredString = '';
    declare array vowels = [a, e, i, o, u]

    convert myString into an array

    loop over our array character by character {
        if our current character is not in the vowels array, add it to the end of filteredString
    }

    return filteredString
}
```

2.
```JavaScript
// Write a function that takes an array of numbers and returns the greatest number in the array.
function findGreatestNumber (myNumbers) {

    // Set our initial number.
    let greatestNumber = Number.NEGATIVE_INFINITY;

    // Iterate over our array.
    myNumbers.forEach(number => {

        // Compare our current number against the greatest number so far.
        if (number > greatestNumber) {
            greatestNumber = number;
        }
    });

    // Return our greatest number
    return greatestNumber;
}

console.log(findGreatestNumber([2, 40, -3]));
// Result: 40

console.log(findGreatestNumber([-3, -10, -1]));
// Result -1
```  

3.
```JavaScript
// Write a function that computes the first 100 numbers in the Fibonacci sequence.
function fibonacciHundred () {

    // Declare our array and some helper values.
    let fibonacciArray = [0, 1];
    let previousNumber = 0;
    let thisNumber = 1;

    // Loop over our array until we get 100 values.
    for (i=3; i<=100; i++) {

        // Calculate our next value in the sequence and add it to our array.
        let nextNumber = previousNumber + thisNumber;
        fibonacciArray.push(nextNumber);

        // Set our numbers to the last known numbers.
        previousNumber = thisNumber;
        thisNumber = nextNumber;
    }

    // Return our Fibonacci sequence.
    return fibonacciArray;
}

console.log(fibonacciHundred());
```
