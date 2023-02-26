// example of calling the main function manually and then store the returned function to another variable
/* function add() {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
}

const plus = add();
console.log(plus());
console.log(plus());
console.log(plus()); */

// we can achieve the same result using the self-invoking function as it reduces the use of an extra variable
const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
