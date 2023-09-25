// MySome Implementation

function MySome(){
  // store input value as a string inputStr
  const inputStr = document.getElementById('inputArr').value;
// input string is converted into an array
  const inputArr = inputStr.split(',')
// stores input function as a string
  const functionStr = document.getElementById('inputFunction').value;
// converts input function string into a function
  const userFunction = eval(`${functionStr}`);
// boolean value result of using MySome with the input array and input function
  let answer = checkMySome(inputArr, userFunction);
// store the paragraph element for results as a variable result
  const result = document.getElementById('results');
  // modify the textContent with the results of the MySome function 
  result.textContent = answer;
}

// Check function for mySome. loop through and see if at least 1 of the elements of the array satisfy the function conditions. If so return true, otherwise return false.
function checkMySome(arr, func){
  for (let i = 0; i < arr.length; i++){
    if(func(arr[i]) === true){
      return true;
    }
  }
  return false;
}




// MyEvery Implementation


function MyEvery(){

// Takes in the users input for the array as a string
  const inputStr2 = document.getElementById('inputArr2').value;
// converts the input string into the intended array
  const inputArr2 = inputStr2.split(',');
// takes in the users input function as a string
  const FunctionStr2 = document.getElementById('inputFunction2').value;
// converts input function string into a function
  const userFunction2 = eval(`${FunctionStr2}`);
// boolean value result of using MySome with the input array and input function
  let answer2 = checkMyEvery(inputArr2, userFunction2);
// store the paragraph element for results as a variable result
  let result2 = document.getElementById('results2');
// modify the textContent with the results of the MyEvery function 
  result2.textContent = answer2;



}


// Check function for myEvery. loop through and see if at least 1 of the elements of the array satisfy the function conditions. If so return true, otherwise return false.

function checkMyEvery(arr, func){
  for (let i = 0; i < arr.length; i++){
    if (func(arr[i]) !== true){
      return false;
    }
  }
  return true;
}