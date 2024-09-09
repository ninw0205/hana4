for (var i = 0; i < 5; i++) {
  setTimeout(console.log, 100, i);
  //   setTimeout(() => console.log(i), 100);
}

const f2 =
  (f) =>
  (...args) => {
    console.log(f.name, f(...args));
  };

f2(Math.max)(1, 3, 2, 4, 5);
