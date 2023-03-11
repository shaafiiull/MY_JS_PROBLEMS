let current = 0;
let next = 1;
let temp;
let fibonacciPattern = "";

// print first 15 number of fibonacci series
for (let i = 0; i < 15; i++) {
  temp = current;
  fibonacciPattern += current + " ";
  current = next;
  next += temp;
}
console.log(fibonacciPattern);
