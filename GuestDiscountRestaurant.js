// Dishes Data
const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
];

// Tax Value
const tax = 1.20;

// Task 1: Implement getPrices()
function getPrices(taxBoolean) {
    // WRITE YOUR CODE HERE
   
    for (i = 0; i < dishData.length; i++) {
        let finalPrice = 0;
        if (taxBoolean === true) {
            finalPrice = dishData[i].price * tax;
        }
        if (taxBoolean === false) {
            finalPrice = dishData[i].price
        }
        console.log("Dish: " + dishData[i].name + "Price: $" + finalPrice)
    }

}

// Task 2: Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    // WRITE YOUR CODE HERE
}

// Call getDiscount() with sample arguments
getDiscount(true, 2);
getDiscount(false, 10);