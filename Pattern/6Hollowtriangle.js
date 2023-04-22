// *
// **
// * *
// *  *
// *   *
// ******
function printHollowTriangle(row) {
    for(let i = 1 ;i<= row ;i++)
    {
        let pattern = "";
        for(let j = 0 ;j< i;j++)
        {
            if(i!= row)
            {
                if( j==0 || j == i-1){
                    pattern += "*"
                }
                else{
                    pattern +=" "
                }
            }
            else{
                pattern += "*"
            }
        }
        console.log(pattern)
    }
}

// Example usage: print a triangle with a height of 5
printHollowTriangle(6);