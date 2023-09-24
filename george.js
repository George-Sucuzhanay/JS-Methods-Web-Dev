//  myIncludes func
function myIncludes(arr, targetElement){
    for(const i of arr){
        if(i == targetElement){
            return true;
        }
    }
    return false;
}
// event listener to the myIncludes button
document.getElementById("myIncludesButton").addEventListener("click", function () {
    let result = myIncludes([1, 2, 3, 4, 5], 6);
    document.getElementById("displayMyIncludes").textContent = result;
});

// myIndexOf func
function myIndexOf(arr, targetElement){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == targetElement){
            return i;
        }
    }
    return -1;
}

// event listener for myIndexOf func
document.getElementById("myIndexOfButton").addEventListener("click", function () {
    let result = myIndexOf([2, 4, 6, 8, 10, 4], 4);
    document.getElementById("displayMyIndexOf").textContent = result;
});

// myPush func
function myPush(arr, appendElement){
    arr[arr.length] = appendElement;
    return arr.length;
}

// event listener for myPush func
document.getElementById("myPushButton").addEventListener("click", function () {
    let result = myPush([20, 25, 30, 35, 40], 45);
    document.getElementById("displayMyPush").textContent = result;
})