/*

*/

// This was code from my second problem
const numForPrime = 120000;

let lastPrime = 0;

// Stores them all in an array so I can divide the large number by each prime number
const primeNumList = [];

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

  if (primeNumList[10000]) {
    console.log(`The prime is ${primeNumList[10000]}`);
    break;
  }
}

