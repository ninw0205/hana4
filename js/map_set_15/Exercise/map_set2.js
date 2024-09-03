Array.prototype.uniqBy = function(prop) { 
  
]

function uniq() {
    Array.prototype.uniqBy = function (prop) {
        if (!prop && prop !== 0) return [...new Set(this)];
    }
}
const hong = {id: 1, name: 'Hong', dept: 'HR'};
const kim = {id: 2, name: 'Kim', dept: 'Server'};
const lee = {id: 3, name: 'Lee', dept: 'Front'};
const park = {id: 4, name: 'Park', dept: 'HR'};
const ko = {id: 7, name: 'Ko', dept: 'Server'};
const loon = {id: 6, name: 'Loon', dept: 'Sales'};
const choi = {id: 5, name: 'Choi', dept: 'Front'};
const users = [ hong, kim, lee, park, ko, loon, choi ];
users.uniqBy('dept'); // [ 'HR', 'Server', 'Front', 'Sales' ]

assert.deepStrictEqual(users.uniqBy('dept'), [
  'HR',
  'Server',
  'Front',
  'Sales',
]);

const arr = [1, 2, 2, 3, 4, 5, 6, 5];
assert.deepStrictEqual(arr.uniqBy(),[...new Set(arr)]);
