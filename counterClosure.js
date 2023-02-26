function add() {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
}

const plus = add();
console.log(plus());
console.log(plus());
console.log(plus());
