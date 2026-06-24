const reverseArrayInPlace = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const tmp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = tmp
  }
}
let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
