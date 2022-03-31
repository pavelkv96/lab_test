// const cityField = 'city';
// const job = 'Android developer'
//
// const person = {
//     age: 26,
//     name: 'Pavel',
//     job,
//     [cityField + Date.now()]: 'Sain-Peterburg',
//     print: () => 'Person',
//     'contry-life': 'Russia',
//     toString: function () {
//         return Object.keys(this).filter(key => key !== 'toString').map(key => this[key]).join(' ')
//     }
// }
//
// console.log(person.toString())
// console.log(person.print())

///Methods
const first = {a: 1}
const second = {b: 2}

// console.log(Object.is(20, 20))
// console.log(Object.assign(first, second))
// console.log(Object.assign({}, first, second))
// console.log(Object.assign({}, first, second, {c: 2, d: 3}))
// console.log(first)
const obj = Object.assign({}, first, second, {c: 2, d: 3})
console.log(Object.entries(obj))
console.log(Object.keys(obj))
console.log(Object.values(obj))
