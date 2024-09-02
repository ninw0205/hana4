const assert = require("assert");

const ARR = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];

function makeObjectFromArray(arr) {
  const ret = {};
  //   for (val of arr) {
  //     const [key, ...vals] = val;
  //     ret[key] = vals;
  //   }

  for (const [key, ...vals] of arr) ret[key] = vals;

  return ret;
}

const obj = makeObjectFromArray(ARR);

console.log(obj);

function makeArrayFromObject(obj) {
  const ret = [];

  //   for (entries of Object.entries(obj)) {
  //     ret.push([entries[0], ...entries[1]]);
  //   }

  for (const key in obj) {
    ret.push([key, ...obj[key]]);
  }

  return ret;
}

console.log(makeArrayFromObject(obj));

assert.deepStrictEqual(makeArrayFromObject(obj), ARR);
