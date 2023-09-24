function myEach(array, callback) {
    for (let i = 0; i < array.length; i++) { // for loop that runs through the array 
        callback(array[i], i, array); // for each iteration the call back function is iterated. 
        console.log(array) // prints values of the array
    }
}

function displayNumbers() {
    const inputValue = document.getElementById('numberInput').value; // gets value of users input from the HTML file
    const numbersArray = inputValue.split(',').map(num => num.trim()); //Convert Input String to an Array of Numbers

    //This just clears the div 
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous output


// calls the myeach fucntion that iterates through the array 
    myEach(numbersArray, function(num) {
        outputDiv.innerHTML += `${num}<br>`;
    });



}


// Map allows you to run a function on each element in the array and returns a modified version

function myMap(array, callback) {
    let result = [];  // Initialize an empty array for the results
    for (let i = 0; i < array.length; i++) { // loops thru array 
        result.push(callback(array[i], i, array));  // Invoke the callback with the current element, its index, and the original array, then push its result into the "result" array.
    }
    return result;  // Return the newly constructed array after processing all elements
}

// created a function to read the valies that the user put and it spits it back into the html displaying it 
function displayDoubledNumbers() { 
    const inputValue = document.getElementById('mapInput').value; // gets the values from the div by id
    const numbersArray = inputValue.split(',').map(num => num.trim()); // makes it clean 

    // Use the myMap function to double the numbers
    const doubledNumbers = myMap(numbersArray, function(num) { // new vals are stored here 
        return num * 2; // multiply numbers by 2 
    });

    //This just clears the div 
    const output2Div = document.getElementById('output2');
    output2Div.innerHTML = ''; // Clear previous output

    // Use myEach to display the doubled numbers REUSED CODE
    myEach(doubledNumbers, function(num) {
        output2Div.innerHTML += `${num}<br>`;
    });
}



// Filter method 
function myFilter(array, callback){ // 2 params array and callback function
    let result = [];// Initialize an empty array for the results
    for(let i=0; i<array.length; i++){ // loop through the array 
        if(callback(array[i], i, array)){ // call back goes to each element 
            result.push(array[i]);  //if even push it to result 
        }  
    }
    return result; // return even array
}



function displayFilter(){
    const inputValue = document.getElementById('filterInput').value; // gets the values from the div by id
    const numbersArray = inputValue.split(',').map(num => num.trim());  //makes it clean

    // FILTER NUMBERS BY EVEN NUMBERS
    const filtered = myFilter(numbersArray, function(num) {
        return  num % 2 == 0;
    });
//rinsie and repeat from above
    const output3Div = document.getElementById('output3');
    output3Div.innerHTML = '';

    // Use myEach to display the filtered numbers
    myEach(filtered, function(num) {
        output3Div.innerHTML += `${num}<br>`;
    });
}