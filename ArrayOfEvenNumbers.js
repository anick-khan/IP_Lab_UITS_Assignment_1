let arr = [ 10,11,12,13,14,15,16,17,18,19];

let even_arr = [];

let i = 0;
while (i<arr.length){
    if (arr[i] % 2 == 0) even_arr.push(arr[i]);
    i++; 
}
document.write(even_arr);