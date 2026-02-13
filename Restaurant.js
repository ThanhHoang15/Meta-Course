
function restaurant (arg){

const dishWithTax = {
    "Italian pasta" : 11.46,
    "Rice with veggies" : 11.46,
    "Chicken with potatoes" : 11.46,
    "Vegetarian Pizza " : 11.46
}
const dishWithNoTax = {
    "Italian pasta Price (excl.tax)" : 9.55,
    "Rice with veggies Price (excl.tax)" : 8.65,
    "Chicken with potatoes Price (excl.tax)" : 15.55,
    "Vegetarian Pizza Price (excl.tax)" : 6.45
}
if (arg){
    console.log(dishWithTax);
}
else{
    console.log(dishWithNoTax)
}
}
restaurant (true);