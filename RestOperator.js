function sum(...numbers) {
  return numbers.reduce((total, num) => total * num, 1);
}
console.log(sum(1, 2, 3)); // 6


const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]