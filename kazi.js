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
function grabKeys(obj) //defines function named grabKeys that takes one parameter with parameter obj from which we wanna obtain the keys from
{
    return Object.keys(obj); //return an array containing all the keys of the obj
}

function runGrabKeys() //runs when button is clicked
{
    // Get the input object from user input
    const inputObjectStr = document.getElementById('inputObject').value; //gets string value stored in inputObject by id
    const inputObject = JSON.parse(inputObjectStr); // if the input is formatted properly, this parses it and makes an obj outta it stored in inputObject

    // Call the grabKeys function i made earlier
    const keys = grabKeys(inputObject); //from the object, ur now retrieiving the keys

    // Display the keys by converitng it back to a string
    document.getElementById('resultKeysDisplay').textContent = JSON.stringify(keys); //stringify converts keys back to string and then in the html file resultKeysDisplay its displayed 
}

// grabValues function
function grabValues(obj) //defines function named grabValues that takes one parameter with parameter obj from which we wanna obtain the values from
{
    return Object.values(obj); //return an array containing all the values of the obj
}

function runGrabValues() //runs when button is clicked
{
    // Get the input object from user input
    const inputObjectStr1 = document.getElementById('inputObject1').value; //gets string value stored in inputObject1 by id
    const inputObject1 = JSON.parse(inputObjectStr1); // if the input is formatted properly, this parses it and makes an obj outta it stored in inputObject1

    // Call the grabValues function i made earlier
    const values = grabValues(inputObject1); //from the object, ur now retrieiving the values

    // Display the values by converitng it back to a string
    document.getElementById('resultValuesDisplay').textContent = JSON.stringify(values); //stringify converts values back to string and then in the html file resultValuesDisplay its displayed 
}