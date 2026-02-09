// map
let bestBoxers = new Map();
bestBoxers.set("one", "The Champion1");
bestBoxers.set(2, "The Champion2");
bestBoxers.set(3, "The Champion3");

console.log(bestBoxers);
console.log(bestBoxers.get("one")); // The Champion1
console.log(bestBoxers.get(2));// The Champion2

// set: is a collection of unique values.
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);