globalThis.name = "GlobalName";
this.name = "ModuleName";

const obj = {
  name: "ObjName",
  bark1: function () {
    console.log("1=", this.name);
    const self = this; // OLD version
    setTimeout(function () {
      console.log("11=", self.name);
      console.log("12=", this); // Timeout
    }, 1000); // .bind(this)
    console.log("xxxx");
  },
  bark2() {
    // same as bark2: function() {
    console.log("2=", this.name);
    setTimeout(() => {
      console.log("22=", this.name); // 화살표 함수는 this를 가질 수 없으므로
      // 이 함수를 가지고 있는 bark2의 상위인 obj가 this로 연결
    }, 1000);
  },
  bark3() {
    // ⇐⇒ bark3: function() {
    function innerFn() {
      console.log("33=", this.name); // bind된 것이 없으므로 일반 함수 선언문으로 global object
    }
    innerFn();
  },
  bark4: () => {
    console.log(this.name); // 화살표 함수는 this를 가질 수 없으므로
    // 이 함수를 가지고 있는 obj의 상위인 module이 this로 연결
  }, // bark4의 소유자(obj)의 Lexical Scope의 this
};

// obj.bark1(); // === bark1.bind(obj)() vs  var x = obj.bark1;
// obj.bark2();
// obj.bark3();
obj.bark4();

// const fff = obj.bark1;
// fff();

// const ffff = obj.bark1();
// ffff;
