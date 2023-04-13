
function bubbleSortWithSwapsCount(arr) {
    let n = arr.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // swap adjacent elements if they are in the wrong order
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                count++;
            }
        }
    }
    return count;
    // 4,3,1,2
    // >3,4,1,2
    // >3,1,4,2
    // >3,1,2,4
    // 3,1,2,4
    // >1,3,2,4
    // >1,2,3,4
}

// Example usage:
const arr = [4, 3, 1, 2];
const swaps = bubbleSortWithSwapsCount(arr);
console.log(swaps); 