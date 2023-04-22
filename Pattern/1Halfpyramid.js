let row=5;
let col=5;
let str = '';

for(i = 0; i <= row ; i++) {
    for(j = 1; j <= i; j++) {
       str += '*';
    }
    str += '\n';
}
console.log(str);