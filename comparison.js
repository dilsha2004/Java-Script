const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)
let obj = { here: { is: "an" }, object: 2 }
//console.log(deepEqual(obj, { here: 1, object: 2 }))
console.log(deepEqual(obj, obj));