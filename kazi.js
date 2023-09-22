//myLastIndexOf

function myLastIndexOf(arr, targetElement) 
{
    // Start searching from the end of the array, like a forloop that goes backwards and compares element at each index to the target element
    for (let i = arr.length - 1; i >= 0; i--) 
    {
        if (arr[i] === targetElement) 
        {
            return i; // Return the index where the target element is found at
        }
    }
    
    return -1; // Return -1 if the element is not found aka it's not in the array
}