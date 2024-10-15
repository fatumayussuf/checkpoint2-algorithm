function insertionSort(arr) {
    // Loop through each element in the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element
        let current = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element at its correct position
        arr[j + 1] = current;
    }

    return arr;
}

// Example usage:
const array = [5, 3, 8, 4, 2];
const sortedArray = insertionSort(array);
console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
