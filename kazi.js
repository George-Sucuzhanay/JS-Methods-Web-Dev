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

// grabKeys function
function grabKeys(obj) 
{
    return Object.keys(obj);
}

function runGrabKeys() 
{
    // Get the input object from user input
    const inputObjectStr = document.getElementById('inputObject').value;
    const inputObject = JSON.parse(inputObjectStr); // Parse the input as JSON to convert it to an object

    // Call the grabKeys function
    const keys = grabKeys(inputObject);

    // Display the keys
    document.getElementById('resultKeysDisplay').textContent = JSON.stringify(keys);
}