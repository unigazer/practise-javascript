// Hash Tables using Map

// Hash Tables has 3 operations. Insert, remove and search.
// It takes a string, conerts it to an integer and then maps the hash to the bucket.

// Create new Map object
let map = new Map();

// Set the keys and values
map.set('PersonOne', 'John');
map.set('PersonTwo', 'Ana');
map.set('PersonThree', 'Mike');

// Get the bucket size
console.log('Bucket size is', map.size);

// Get the values by key name
map.get('PersonOne');
map.get('PersonTwo');
map.get('PersonThree');

// Remove the values by key name
map.delete('PersonOne');
map.delete('PersonTwo');
map.delete('PersonThree');

/* --- Object --- */

// Hash Tables using Object as associative array
let persons = {
    'PersonOne': 'John',
    'PersonTwo': 'Ana',
    'PersonThree': 'Mike'
}

// Iterate over the object to get the values
for (let values of Object.keys(persons)) {
    // Print the values
    console.log(persons[values]);
}

// Or access the object values directly
console.log(persons.PersonOne);