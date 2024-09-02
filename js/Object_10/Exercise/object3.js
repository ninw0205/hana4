const assert = require("assert");

// shallow copy
const kim = { nid: 3, nm: "Kim", addr: "Pusan" };
const newKim = copyObject(kim);
newKim.addr = "Daegu";
console.log(kim.addr !== newKim.addr);

// deep copy
const kim2 = { nid: 3, nm: "Kim", addr: { city: "Pusan" }, [Symbol()]: "sym" };
const newKim2 = copyObject(kim2);
assert.deepStrictEqual(kim2, newKim2);
newKim2.addr.city = "Daegu";
assert.notDeepStrictEqual(kim2, newKim2);
console.log(kim2.addr.city !== newKim2.addr.city);

function copyObject(obj) {
  const ret = {};
  for (const key in obj) {
    ret[key] = obj[key];
  }

  return ret;
}

function copyObject(obj) {
  if (!obj || typeof obj !== "object") return obj;

  const newer = {};
  for (const k of Reflect.ownKeys(obj)) {
    // console.log(k);
    newer[k] = copyObject(obj[k]);
  }

  //   for (const k in obj) {
  //     newer[k] = copyObject(obj[k]);
  //   }

  //   const symbols = Object.getOwnPropertySymbols(obj);
  //   //console.log("symbols: ", symbols);
  //   for (const symKey of symbols) newer[symKey] = obj[symKey];

  return newer;
}
