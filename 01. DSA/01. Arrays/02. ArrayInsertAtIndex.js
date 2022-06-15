function insertAtIndex(arr, index, element){
        arr.splice(index, 0, element);
        console.log(arr);
}

insertAtIndex([1,2,3,4,5], 3, 90);