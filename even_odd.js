//This is a function to collect even and odd numbers between 0 and 100.
function collectEvenOdd() {
    const evenNumbers = [];
    const oddNumbers = [];
    
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        } else {
            oddNumbers.push(i);
        }
    }

    return {
        even: evenNumbers,
        odd: oddNumbers
    };
}
