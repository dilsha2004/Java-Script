const arrayToList = arr => arr.reduceRight((rest, value) => ({ value, rest }), null);
const listToArray = list => {
  const arr = [];
  for (let node = list; node; node = node.rest) arr.push(node.value);
  return arr;
};
const prepend = (value, rest) => ({ value, rest });
const nth = (list, n) => !list ? undefined : n === 0 ? list.value : nth(list.rest, n - 1);
console.log(arrayToList([10, 20]));