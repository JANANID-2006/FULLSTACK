let fruits=["apple","watermelon","grapes"];
console.log("Original array");
console.log(fruits);
fruits.push("kivi");
console.log("push operation");
console.log(fruits);
fruits.pop();
console.log("Pop operation");
console.log(fruits[0]);
console.log("1st and last element");
console.log(fruits[0]);
let size=fruits.length;
console.log(fruits[size-1]);
console.log("array unshift operation");
fruits.unshift("cherry");
console.log(fruits);
console.log("array after shift operation");
fruits.shift();
console.log(fruits);
console.log("array after splice operation");
let removedElement = fruits.splice(1,1);
console.log(fruits);

fruits.push("Orange");
fruits.push("Banana");
fruits.push("Mango");
console.log("array accessing using loop");
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}
