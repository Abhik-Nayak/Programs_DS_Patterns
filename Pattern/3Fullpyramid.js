//    *
//   ***
//  *****
// *******
const printFullpyramid =(row)=>{
    // Loop through each row
    for( let i =1;i<=row;i++)
    {
        let pattern ="";
        // Add the appropriate number of specs to the front of the row
        for(let j=1; j <= row-i ;j++)
        {
            pattern += " ";
        }
        // Add the appropriate number of stars
        for(let k=1;k <= 2*i-1; k++)
        {
            pattern += "*"
        }
        console.log(pattern)
    }
}
printFullpyramid(5);