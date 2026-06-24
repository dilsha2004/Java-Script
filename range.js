function range(start, end, step = start <= end ? 1 : -1) {
  let array = []
  for (let i = start; step > 0 ? i <= end : i >= end; i += step) array.push(i)
  return array
}

function sum(array) {
  let total = 0
  for (let num of array) total += num
  return total
}
console.log(range(5, 2))
