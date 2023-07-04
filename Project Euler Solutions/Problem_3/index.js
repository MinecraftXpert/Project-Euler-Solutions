/*
600851475143

List of prime numbers are

2, 3, 5, 7 11, 13, 17, 19 23, 29 31, 37 41, 43, 47 53, 59, 61, 67, 71, 73, 79, 83, 89, 97... etc.

*/


// This was actually just a guess but this gets 50k prime numbers lol...
let numForPrime = 50000;

// Stores them all in an array so I can divide the large number by each prime number
let primeNumList = [];

// This creates the list of prime numbers from 2 - numForPrime
for (let i = 0; i < numForPrime; i++) {
  // This will be zero if the number is a prime number
  let flag = 0;

  // Loop from 2 to the number
  for (let j = 2; j < i; j++) {
    // If a number can be divisible by any other number, it's not a prime number and the flag is 1
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }

  // If the flag is 0, it's a prime numebr
  if (i > 1 && flag == 0) {
    // Push that number into the array
    primeNumList.push(i);
  }
}

// The *big* number
let number = 600851475143;

// Determines what the largest prime number is
let largestPrimeFactor = 0;

// Using a forEach loop to loop through all the prime numbers is much easier
primeNumList.forEach((prime) => {
  // Divides the huge number by each prime number and if the remainder is zero, it's a prime factor
  if (number % prime === 0) {
    // This was just for testing
    console.log(`This is a prime factor of ${number}`);
    // Update the largestPrimeFactor
    largestPrimeFactor = prime;
  }
});

// Consoles the largest prime factor and gives us the answer :sunglasses:
console.log(`The largest prime factor of ${number} is ${largestPrimeFactor}`);
