/*
  So... this was kinda easy. I my code from the second problem and applied it here with some changes

  Btw, this took like 3 seconds to run cause I'm a noob like that :)
*/

// I overshot the number and then I just did some code to get the exact
const numForPrime = 120000;

// All this code is from another problem I did

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


  // I added this line to find the exact prime number and end the program so it didn't run everything :sunglasses:
  if (primeNumList[10000]) {
    console.log(`The prime is ${primeNumList[10000]}`);
    break;
  }
}

