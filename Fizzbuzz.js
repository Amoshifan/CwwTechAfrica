//This function is to test if a number is divisible by 5 and 3 is fizzbuzz, 
//and divisible by only 5 should Fizz and if divisible by only 3 should be buzz

function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 5 === 0) {
        return "Fizz";
    } else if (number % 3 === 0) {
        return "Buzz";
    } else {
        return number;
    }
}

// Example usage:
console.log(fizzBuzz(15)); // Output: FizzBuzz
console.log(fizzBuzz(10)); // Output: Fizz
console.log(fizzBuzz(9));  // Output: Buzz
console.log(fizzBuzz(7));  // Output: 7
