// Declare array
const arr = [2, 2, 14, 35, 58, 58, 80, 154, 274, 567, 567, 824];

// Declare a function that will search through binary tree
function binarySearch(arr, value) {
    let high = arr.length - 1;
    let mid = 0;
    let low = 0;

    while (low <= high) {
        mid = Math.floor((high + low) / 2);
        if (arr[mid] === value) {
            return arr[mid];
        } else if (value > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    // Nothing found
    return -1;
}

console.log(`it should print 154: ${binarySearch(arr, 154)}
it should print -1: ${binarySearch(arr, 1)}`);
