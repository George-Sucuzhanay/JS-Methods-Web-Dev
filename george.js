//  myIncludes
function myIncludes(arr, targetElement){
    for(const i of arr){
        if(i == targetElement){
            return true;
        }
    }
    return false;
}


// myIndexOf
function myIndexOf(arr, targetElement){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == targetElement){
            return i;
        }
    }
    return -1;
}

// myPush
function myPush(arr, appendElement){
    arr[arr.length] == appendElement;
    return arr.length;
}