function largest(arr){
    let max = arr[0];
    let i;
    for (i = 1; i < arr.length; i++){
        if ( arr[i] > max ) max = arr[i];
    }
    return max;
}

let arr = [10,20,30,40,50,60];
document.write("Largest element in the array is : " , largest(arr));