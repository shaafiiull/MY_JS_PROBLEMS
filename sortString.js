const fruits = ["Orange", "Mango", "apple", "Banana", "Guava"];
fruits.sort(function (a, b) {
  let x = a.toLowerCase();
  let y = b.toLowerCase();
  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
});
console.log(fruits);
