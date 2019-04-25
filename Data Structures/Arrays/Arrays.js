// Working with arrays (Data structures)

// Declare an array of objects
var arr = [1, 'Name', true, { age: 20 }];
var arrTwo = [14, 12, 15, 13, 11];

// Check if the array is empty
if (arr.length !== 0) {
    console.log(`The array is not empty, it contains ${arr.length} objects.`);
} else {
    throw new Error('The array is empty!');
}

// Concatenate the arrays
console.log('Concatenating 2 arrays returns a new array with values:', arr.concat(...arrTwo));

// Add new object to the existing array
arr.push(2);
console.log('Adding a number 2 to the array returns:', ...arr);

// See what element is at the specific index number
console.log(`The object at the index of num. 2 of the array is ${typeof arr[1]} and its value is ${arr[1]}`);

// Sort the second array
console.log(`Sorting the second array [${arrTwo}] in ascending order returns: ${arrTwo.sort()}`);

// Add new item in array at index number
arr.splice(3, 0, 'New object');
console.log('Adds a new object at the existing array at index number 3:', ...arr);

// Remove the first object from array
console.log(`Remove the first object from the array and return its value: ${arr.shift()}`);

// Remove the last object from array
console.log(`Remove the last object from the array and return its value: ${arr.pop()}`);
