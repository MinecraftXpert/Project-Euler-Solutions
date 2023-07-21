/*

    First I gotta find the sum of the squares of the first 100 natural numbers...

    For example 1^2 + 2^2 + 3^2... etc.

    Then I gotta find the square of the sum of the first 100 natural numbers...

    For example (1 + 2 + 3... etc.)^2

    Yay me :)

    EDIT: This was way easier than I thought lol...

*/

// Initializes it to 0 at first
let sum1 = 0;

// Gets the sum of the squares of the first 100 numbers
for (let i = 0; i < 101; i++) {
    sum1 += i * i;
}

// This one is a little different. This is the sum of 1 + 2 + 3 etc...
let sum2 = 0;

// Gets the square of the sum of the first 100 numbers
for (let i = 0; i < 101; i++) {
    // Gets our sum of i
    sum2 += i;
    // Then we can take that sum and just multiply it twice to get our new sum
    var newSum;
    newSum = sum2 * sum2;
}

// Then just subtract each sums and gets our total :sunglasses:
console.log(newSum - sum1);