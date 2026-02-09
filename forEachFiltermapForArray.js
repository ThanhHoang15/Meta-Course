
//forEach only accept function
//format of forEach (element, currentIndex, array)

const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index, array) {
    console.log(`${index}. ${fruit} / ${array}`)
}
fruits.forEach(appendIndex);

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

const nums = [0,10,20,30,40,50];
const result = nums.filter( function(num) {
    return num > 20;
})
console.log (result);

const array = [2,4,6,8]
const result1 = array.map(f => f/2);
console.log (result1);
