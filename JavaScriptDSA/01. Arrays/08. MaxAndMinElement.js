function getMinMax(arr, n){

    let min = arr[0];
    let max = arr[0];
    if(n === 0){
        console.log(0);
    }
    if( n === 1){
        min = arr[0];
        max = arr[0];
        console.log(min, max);
    }
    for(let j = 1; j < n; j++){
        if(min>arr[j]){
            min = arr[j];
        }
        if(max<=arr[j]){
            max = arr[j];
        }
    }
    console.log(min,max);
}


getMinMax([3,2,1,56,10000,167], 6);