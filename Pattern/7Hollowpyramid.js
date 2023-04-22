// 1234*6789 //5
// 123*5*789 //4, 6
// 12*456*89 //3, 7
// 1*34567*9 //2, 8
// *********
function printHollowpyramid(rows) {
    for(let i=0; i< rows ;i++)
    {
        let pattern = "";
        for(let j=0; j< rows-i-1 ; j++)
        {
            pattern += " "
        }
        for(let k=0;k<2*i+1;k++)
        {
            if(i == 0 || i == 2*i)
            {
                pattern += "*";
            }
            else{
                if( k== 0 || k == 2*i)
                {
                    pattern += "*"
                }
                else{
                    pattern += " "
                }
            }
        }
        console.log(pattern);
    }

}

// Example usage: print a triangle with a height of 5
printHollowpyramid(5);