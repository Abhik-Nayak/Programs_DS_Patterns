// function insertionSort(array){
//     let length = array.length;
//     for(let i=0;i<length;i++)
//     {
//         let key =array[i];
//         let j=i-1;
//         while(j>=0 && key < array[j])
//         {
//             array[j+1]= array[j];
//             j= j-1;
//         }
//         array[j+1] = key;
//     }
// }
// function insertionSort(array)
// {
//     let length = array.length;
//     for(let i=0;i<length;i++)
//     {
//         let key = array[i];
//         let j=i-1;
//         while(j>=0 && key<array[j])
//         {
//             array[j+1] = array[j];
//             j = j-1;
//         }
//         array[j+1]=key;
//     }
// }
// function insertionSort(array)
// {
//     let len = array.length;
//     for(let i=0;i<len;i++)
//     {
//         let key=array[i];
//         let j=i-1;
//         while(j>=0 && key<array[j])
//         {
//             array[j+1] = array[j];
//             j=j-1;
//         }
//         array[j+1]= key;
//     }
// }
function insertionSort(array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        let key = array[i];
        let j = i - 1;
        while (i >= 0 && key < array[j]) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
}

let data = [9, 5, 1, 4, 3];
insertionSort(data);
console.log(data);