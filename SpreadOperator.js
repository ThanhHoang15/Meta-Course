
//Spread Operator:
//Expands arrays, objects, or strings into individual elements or properties.
//Used for concatenation, copying, or passing arguments.

const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // outputs a single array
//['apple', 'pear', 'plum', 'blueberry', 'strawberry'];

const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = {...flying, ...car};
console.log(flyingCar); // {wings: 2, wheels: 4}

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);
//['onion', 'parsley', 'carrot', 'beetroot'];

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']



// how to copy Object:
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1};
car1.speed = 201;
console.log(car2);//{ speed: 200, color: 'yellow' }
console.log(car1.speed, car2.speed);//201 200
