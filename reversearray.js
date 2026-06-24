const reverseArray = arr => [...arr].reverse();
const reverseArrayInPlace = arr => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
};
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray)); 
console.log(myArray);               
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);           