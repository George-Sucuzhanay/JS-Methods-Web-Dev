function runMySome(){
  // store input value as a string inputStr
  const inputStr = document.getElementById('inputArr').value;
// input string is converted into an array
  const inputArr = inputStr.split(',')

  const functionStr = document.getElementById('inputFunction').value;

  const userFunction = eval(`${functionStr}`);

  function check(arr, func){
    for (let i = 0; i <arr.length; i++){
      if(func(arr[i]) === true){
        return true;
      }
    }
    return false;
  }

  let answer = check(inputArr, userFunction);

  const result = document.getElementById('results');
  result.textContent = answer;

}