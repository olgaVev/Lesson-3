
let myShoppingList = ["milk", "bread", "candies"]
//console.log(myShoppingList[0]);
console.log(myShoppingList.length)
console.log(myShoppingList[myShoppingList.length - 1]);
myShoppingList.sort();
console.log(myShoppingList);

//object
const cat = {
    name: "Barsik",
    gender: "Male",
    age: 5,
    color: "brown",
    food: ["fish", "meat", "mouse"],
    say_may: function (){
        return this.name + " said mya";
    }
}

console.log(cat.name);
console.log(cat.food[1]);
console.log(cat.say_may())