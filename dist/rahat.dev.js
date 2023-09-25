"use strict";

function myEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    // for loop that runs through the array 
    callback(array[i], i, array); // for each iteration the call back function is iterated. 

    console.log(array); // prints values of the array
  }
}

function displayNumbers() {
  var inputValue = document.getElementById('numberInput').value; // gets value of users input from the HTML file

  var numbersArray = inputValue.split(',').map(function (num) {
    return num.trim();
  }); //Convert Input String to an Array of Numbers
  //This just clears the div 

  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = ''; // Clear previous output
  // calls the myeach fucntion that iterates through the array 

  myEach(numbersArray, function (num) {
    outputDiv.innerHTML += "".concat(num, "<br>");
  });
} // Map allows you to run a function on each element in the array and returns a modified version


function myMap(array, callback) {
  var result = []; // Initialize an empty array for the results

  for (var i = 0; i < array.length; i++) {
    // loops thru array 
    result.push(callback(array[i], i, array)); // Invoke the callback with the current element, its index, and the original array, then push its result into the "result" array.
  }

  return result; // Return the newly constructed array after processing all elements
} // created a function to read the valies that the user put and it spits it back into the html displaying it 


function displayDoubledNumbers() {
  var inputValue = document.getElementById('mapInput').value; // gets the values from the div by id

  var numbersArray = inputValue.split(',').map(function (num) {
    return num.trim();
  }); // makes it clean 
  // Use the myMap function to double the numbers

  var doubledNumbers = myMap(numbersArray, function (num) {
    // new vals are stored here 
    return num * 2; // multiply numbers by 2 
  }); //This just clears the div 

  var output2Div = document.getElementById('output2');
  output2Div.innerHTML = ''; // Clear previous output
  // Use myEach to display the doubled numbers REUSED CODE

  myEach(doubledNumbers, function (num) {
    output2Div.innerHTML += "".concat(num, "<br>");
  });
}