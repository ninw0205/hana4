const assert = require("assert");
const arr = [100, 200, 300, 400, 500, 600, 700];

function forInKeys(arr) {
  const ret = [];
  for (arrKey in arr) {
    ret.push(arrKey);
  }
  return ret;
}

function forInValues(arr) {
  const ret = [];
  for (arrKey in arr) {
    ret.push(arr[arrKey]);
  }
  return ret;
}

assert.deepStrictEqual(forInKeys(arr), Object.keys(arr));
assert.deepStrictEqual(forInValues(arr), Object.values(arr));

const obj = { name: "Kim", addr: "Yongsan", level: 1, role: 9, receive: false };

for (const objKey in obj) {
  console.log(objKey, obj[objKey]);
}

//for (const objValue of Object.entries(obj)) {
for (const value of Object.values(obj)) {
  //console.log(objValue[1]);
  console.log(value);
}

Object.defineProperty(obj, "level", { enumerable: false });
Object.defineProperty(obj, "role", {
  writable: false,
  enumerable: false,
  configurable: false,
});

function makeObjectFromArray(arr) {
  const ret = {};
  for (val of arr) {
    [val[0], ret[val[0]]] = [...val];
  }
  return ret;
}

console.log(
  makeObjectFromArray([
    ["A", 10, 20],
    ["B", 30, 40],
    ["C", 50, 60, 70],
  ])
);
