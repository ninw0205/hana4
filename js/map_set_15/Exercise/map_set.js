const assert = require("assert");
const hrTeam = { id: 1, dname: "인사팀" }; // 홍길동 (인사팀)
const devTeam = { id: 2, dname: "개발팀" };
const depts = [hrTeam, devTeam];

const hong = { id: 1, name: "Hong", dept: 1 }; // hong.dept.name ⇒ deptMap.get(hong.dept)?.name
const kim = { id: 2, name: "Kim", dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: "Park", dept: 2 },
  { id: 4, name: "Choi", dept: 2 },
];

// const deptMap = new Map();
// for (dept of depts) {
//   deptMap.set(dept.id, dept);
// }

const deptMap = new Map(depts.map((dept) => [dept.id, dept]));

// const empMap = new Map();
// for (emp of emps) {
//   empMap.set(emp.id, emp);
// }

const empMap = new Map(emps.map((emp) => [emp.id, emp]));

// const empDept = new Map();
// for (emp of empMap) {
//   empDept.set({ emp, deptMap });
// }

// const empDept = new Map(
//   [...empMap.values()].map(({ id, name, dept }) => [
//     { id, name },
//     deptMap.get(dept),
//   ])
// );

const empDept = new Map(
  [...empMap.values()].map((emp) => {
    const { dept } = emp;
    delete emp.dept;
    return [emp, deptMap.get(dept)];
  })
);

assert.deepStrictEqual(
  [...empDept.keys()],
  emps.map(({ id, name }) => ({ id, name }))
);
assert.strictEqual(empDept.get(kim)?.dname, devTeam.dname);

console.log(deptMap); // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)
console.log(empMap); // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }

console.log(empDept); // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

console.log(empDept.get(kim).dname); // '개발팀'
// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi

function getEmp(empId) {
  // {id:1, name: 'Hong', dept: {id:1, dname:'Sale'}}
  const emp = empMap.get(empId);
  return { ...emp, dept: empDept.get() };
}

assert.deepStrictEqual(getEmp(1), {
  id: 1,
  name: "Hong",
  dept: { id: 1, dname: "인사팀" },
});
