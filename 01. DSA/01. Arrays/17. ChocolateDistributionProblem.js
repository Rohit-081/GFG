// function MinDiff(arr, n, m){
//     if( m === 0 || n === 0 )
//         console.log(0);
    
//     arr.sort((a,b) => a - b);
    
//     if(n < m)
//          console.log(-1);
    
//     let min_diff = Number.MAX_VALUE;

//     for(let i = 0; i+m-1 < n; i++){
//         let diff = arr[i+m-1] - arr[i];
//         if(diff < min_diff)
//             min_diff = diff;
//     }
//     console.log(min_diff);
// }

// MinDiff([3, 4, 1, 9, 56, 7, 9, 12], 8, 5);


function MinDiff(arr, n, m){
    if( m === 0 || n === 0)
        console.log(0);
    if(n < m)
        console.log(-1);
    arr.sort((a,b) => a - b);
    let min_diff = Number.MAX_VALUE;
    for(let i = 0; i+m-1<n; i++){
        let diff = arr[i+m-1] - arr[i];
        if(diff < min_diff) 
            min_diff = diff;
    }
    console.log(min_diff);

}
MinDiff([3, 4, 1, 9, 56, 7, 9, 12], 8, 5);