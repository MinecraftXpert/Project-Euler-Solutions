let sum1 = [];
let sum2 = [];

for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0) {
    sum1.push(i);
  } else if (i % 5 === 0) {
    sum2.push(i);
  }
}

const sums1 = sum1.reduce((total, sum) => {
  return total + sum;
});

const sums2 = sum2.reduce((total, sum) => {
  return total + sum;
});

console.log(sum1);
console.log(sum2);
console.log(sums1);
console.log(sums2);
console.log(sums1 + sums2);
