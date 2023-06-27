// Finished June 27th 2023



// Creates an array of multiples of 3
let multiplesOfThree = [];
// Creates an array of multiples of 5
let multiplesOfFive = [];

// Makes a for loop that will run and add multiples of 3 or 5
for (let i = 1; i < 1000; i++) {
  // If the remainder is 0, after dividing i / 3, then it's a multiple of 3 and we can push it into the array
  if (i % 3 === 0) {
    multiplesOfThree.push(i);
    // We have to use else if or it will give us duplicate multiples. But this divides i / 5 and if the remainder is 0, it's a multiple of 5 and we can push it into the array
  } else if (i % 5 === 0) {
    multiplesOfFive.push(i);
  }
}

// Adds up all the numbers in the first array
const sumOfThrees = multiplesOfThree.reduce((total, sum) => {
  return total + sum;
});

// Adds up all the numbers in the second array
const sumOfFives = multiplesOfFive.reduce((total, sum) => {
  return total + sum;
});

// Adds both numbers and gives us our answer :sunglasses:
console.log(sumOfThrees + sumOfFives);
