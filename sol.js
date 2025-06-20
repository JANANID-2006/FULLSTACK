let animals = ["dog", "cat", "rabbit"];
console.log("Original array:");
console.log(animals);

// Push operation (add to end)
animals.push("elephant");
console.log("After push:");
console.log(animals);

// Pop operation (remove from end)
animals.pop();
console.log("After pop:");
console.log(animals);

// First and last element
console.log("First element:", animals[0]);
let lastAnimal = animals[animals.length - 1];
console.log("Last element:", lastAnimal);

// Unshift operation (add to beginning)
animals.unshift("lion");
console.log("After unshift:");
console.log(animals);

// Shift operation (remove from beginning)
animals.shift();
console.log("After shift:");
console.log(animals);

// Splice operation (remove 1 element at index 1)
let removed = animals.splice(1, 1);
console.log("After splice:");
console.log("Removed animal:", removed);
console.log("Updated animals:", animals);

// Add more animals
animals.push("deer");
animals.push("tiger");
animals.push("bear");

// Looping through the array
console.log("Accessing with loop:");
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// Spread operator to create a new array
let newAnimals = [...animals, "fox", "wolf"];
console.log("New array with spread:");
console.log(newAnimals);

// Confirm original array remains unchanged
console.log("Original array:");
console.log(animals);
