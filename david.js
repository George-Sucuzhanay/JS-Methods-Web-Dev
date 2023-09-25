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












// MyReduce Function Implementation

const MyReduce = () =>{
// Takes in the users input for the array as a string
  const inputStr3 = document.getElementById('inputArr3').value;
// converts the input string into the intended array
  const inputArr3 = inputStr3.split(',');
// stores input function as a string
  const functionStr3 = document.getElementById('inputFunction3').value;
// converts input function string into a function
  const userFunction3 = eval(`${functionStr3}`);
// Value of the total result of the function being performed on each element of the array
  let answer3 = runMyReduce(inputArr3, userFunction3);
  // store the paragraph element for results as a variable result
    let result3 = document.getElementById('results3');
  // modify the textContent with the results of the MyEvery function 
    result3.textContent = answer3;

}



// function which takes in the array and the function to perform on each element of the array and returns final result after performing it on each element and using that return as the function operation

const runMyReduce = (arr, func) =>{
  let total = 0;
  for (let i = 0; i < arr.length; i++){
    total += func(arr[i]);
  }
  return total;
}

