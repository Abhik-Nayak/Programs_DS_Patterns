// 1>Set the first elemant as minimum
// 2>Compare minimum with the second element .If the second element 
//     is smaller than minimum, assign the second element as minimum.
//   Compare minimum with the third element. Again,if the third element 
//      is smaller,then assign minimum to the third element otherwise do 
//       nothing. The process goes  on unttill the last element.
// 3>after each iteration ,minimum is palced in the front of the unsorted list.
// 4>For each iteration , indexing starts from the first unsorted element.
//   step 1 to 3 are repeated untill allthe elements are placed at their correct positions .
function selectionSort(array, size) {
    for (let i = 0; i < array.length; i++) {
        let min_idx = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min_idx]) {
                min_idx = j
            }
        }
        let temp = array[i];
        array[i] = array[min_idx];
        array[min_idx] = temp;
    }
}

data = [-2, 45, 0, 11, -9];
size = data.length;
selectionSort(data, size);
console.log("Sorted Array in Ascending order = ", data)
