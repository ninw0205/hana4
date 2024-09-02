globalThis.name = "GlobalName"
this.name = "ModuleName"
this.age = 33;

// ⇔ function declareFn(name) {
const expressFn = function(name) {
  // if, 'use strict' ?
  this.name = name;
  console.log(this, new.target, this.name, name);
}

const arrowFn = (name) => {
  this.name = name;
  console.log(this, new.target, this.name, name); // this는 module object
}

expressFn('expfn');
// console.log(globalThis.name)
// arrowFn('afn');

// const dfn = new expressFn('D'); // new를 선언하면 new.target은 자기를 가리킴, this는 expressFn이 인스턴스화가 된 것을 가리킴
// console.log("🚀 ~ dfn.name:", dfn.name)
const afn = new arrowFn('A'); // error!
