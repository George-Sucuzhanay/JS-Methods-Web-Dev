//  myIncludes
function myIncludes(arr, targetElement){
    for(const i of arr){
        if(i == targetElement){
            return true;
        }
    }
    return false;
}
// adding event listener to the myIncludes button
document.getElementById("myIncludesButton").addEventListener("click", function () {
    let result = myIncludes([1, 2, 3, 4, 5], 6);

    document.getElementById("displayMyIncludes").textContent = result;
});


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