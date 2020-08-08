const students = [
    {id:21, name:'omor sany'},
    {id:31, name:'mannna'},
    {id:41, name:'momo'},
    {id:51, name:'dildar'}
];

const names = students.map(s=>s.name);
console.log(names);
const bigger = students.filter(s=>s.id>30);
console.log(bigger);
const biggerOne = students.find(s=>s.id>42)
console.log(biggerOne);