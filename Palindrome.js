// This is function to test if a word is a palindrome.
function isPalindrome(word) {
    const cleanedWord = word.toLowerCase().replace(/[\W_]/g, ''); // Ignore non-alphanumeric characters and case
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
}

// Example usage:
console.log(isPalindrome("racecar"));  // Output: true
console.log(isPalindrome("hello"));    // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
