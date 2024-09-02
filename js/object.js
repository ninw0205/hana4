// key는 전부 String으로 들어감

const user = {
  "": 1,
  " ": 1,
  123: 1,
  12345n: 2,
  true: 1,
  id: 2,
  ["name"]: "hong",
  [Symbol()]: "Hong",
  [Symbol()]: "Hong22",
  [`${new Date()}`]: 365,
  "my-friends": ["Han", "Kim"],
  getInfo: () => `${this.id}-${this.name}`, // Property 방식
  getInfo() {
    // method 방식
    return `${this.id}-${this.name}`;
  },
  id: 3,
};

console.log("🚀 ~ user:", user);
console.log(">> ", user[12345n]);
console.log(">> ", user["123"]);

// const keys = Object.keys(user);
const keys = Reflect.ownKeys(user);
console.log("🚀 ~ keys:", keys);
console.log(user[keys[keys.length - 1]]);
console.log("----------------------------------------------------");

let symKey;
for (key of keys) {
  const typ = typeof key;
  console.log(key, "===>", typ);
  if (typ === "symbol") symKey = key;
}

console.log("Symbol>>> ", user[symKey]);

console.log("****>>", user.getInfo());

user.addr = "Seoul";

console.log("user: ", user);

// delete user.addr;

console.log(
  "addr" in user,
  user.hasOwnProperty("addr"),
  Reflect.has(user, "addr")
);

console.log("user.getOwnPropertySymbols> ", Object.getOwnPropertySymbols(user));

const values = Object.values(user);
console.log("🚀 ~ values:", values);

const entries = Object.entries(user);
console.log("🚀 ~ entries:", entries);

function entriesWithSymbol(obj) {
  if (!obj || typeof obj !== "object") return [];
  const entries = Object.entries(obj);
  const symbolEntries = Object.getOwnPropertySymbols(user);
  for (const sym of symbolEntries) entries.push([sym, obj[sym]]);
  return entries;
}

console.log("🚀 ~ entriesWithSymbol:", entriesWithSymbol(user));

console.log(Object.getOwnPropertyDescriptor(user, "id"));
console.log(Object.getOwnPropertyDescriptors(user));
Object.defineProperty(user, "age", {
  value: 39,
  writable: false,
  enumerable: true,
  configurable: true,
});
console.log(Object.getOwnPropertyDescriptor(user, "age"));
user.age = 33;
console.log("🚀 ~ user.age:", user.age);
console.log(Object.keys(user));

const park = Object.fromEntries([
  ["id", 7],
  ["nm", "Park"],
]);

const xobj = Object.assign({ x: 100 }, user);
console.log("🚀 ~ xobj:", xobj);

const cobj = Object.create(user); // prototype에 만들어서 생성
console.log("🚀 ~ cobj:", cobj, cobj.__proto__);

console.log("****>>", Object.getPrototypeOf(cobj) === cobj.__proto__);

Object.preventExtensions(user);
console.log(Object.getOwnPropertyDescriptors(user));
