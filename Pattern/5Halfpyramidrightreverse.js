// *****
//  ****
//   ***
//    **
//     *

function printHalfreverserighttriangle(row){
    // Loop through each row
    for(let i=0 ;i<row; i++)
    {
        let pattern ="";
        for(let k=0; k< i;k++)
        {
            pattern += " "
        }
        for(let j=row-i;j>=1;j--)
        {
            pattern += "*"
        }
        console.log(pattern);
    }
}
printHalfreverserighttriangle(5);
// function printHalfreverserighttriangle(row){
//     // Loop through each row
//     for(let i =row;i>=1;i--)
//     {
//         let pattern ="";
//         for(let k=0; k< row-i;k++)
//         {
//             pattern += " "
//         }
//         for(let j=i;j>=1;j--)
//         {
//             pattern += "*"
//         }
//         console.log(pattern);
//     }
// }
// printHalfreverserighttriangle(5);