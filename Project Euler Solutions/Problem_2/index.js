/*

    Finished June 29th

    The formula for the fibonacci sequence is
    Fn = Fn-1 + Fn-2, where n > 1

    Example (starting with the first terms 1 and 2)
    1, 2, 3, 5, 8, 13, 21, 34, 55, 89...

*/

// When to stop adding in the fibonacci sequence
const number = 4000000;

// Sum of even all numbers
let sum = 0;

// Variables for our fibonacci sequence
let newTerm;
let firstTerm = 1;
let secondTerm = 2;

// First it logs out the first term
console.log(firstTerm);

// This logs out the second term and I have this other console.log() so I know that it's finding the right numbers
console.log("This is an even number");
console.log(secondTerm);

// Makes the third term which in this case is 3
newTerm = firstTerm + secondTerm;

// Makes a while loop that will create our fibonacci sequence
while (newTerm < number) {
  // This consoles all the remaining terms
  console.log(newTerm);

  // This will make the "firstTerm" Fn-2
  firstTerm = secondTerm;
  // Makes the "secondTerm" Fn-1 just like the formula above
  secondTerm = newTerm;
  // Takes our new term and applies the new first and second terms
  newTerm = firstTerm + secondTerm;

//   Checks if the new term is even and if so adds that term to the sum
  if (newTerm % 2 === 0) {
    // This lets me know if the term is even and will only print above an even number
    console.log("This is an even number");
    // Adds the sum to the new term
    sum += newTerm;
  }
}

// This gives us our sum :sunglasses: (btw the sum + 2 is there to account for the first "secondTerm" because that isn't taken into account yet)
console.log("The sum of all even numbers are: " + (sum + 2));