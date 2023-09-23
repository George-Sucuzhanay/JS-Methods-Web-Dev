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


