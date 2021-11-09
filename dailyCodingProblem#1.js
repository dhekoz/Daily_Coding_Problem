/*Good morning! Here's your coding interview problem for today.
This problem was recently asked by Google.
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
Bonus: Can you do this in one pass?*/

let arr = [10, 15, 3, 7];
let sum = 25;

function returnNum(arr, sum) {
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        console.log("true");
        return true;
      }
    }
  }
  console.log("false");
  return false;
}
return returnNum(arr, sum);

//////////////////////////........................Even or Odd............................/////////////////////////////////////////

function even_or_odd(number) {

  return (number % 2 === 0 ? "Even" : "Odd");
}
console.log(even_or_odd(500));
