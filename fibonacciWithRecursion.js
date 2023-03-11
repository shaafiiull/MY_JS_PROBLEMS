function printFibonacci(numbersToPrint, current, next) {
  if (numbersToPrint < 0) return;
  console.log(current);
  let temp = current;
  current = next;
  next += temp;
  numbersToPrint--;
  printFibonacci(numbersToPrint, current, next);
}

printFibonacci(10, 0, 1);
