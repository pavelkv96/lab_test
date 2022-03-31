// function sum(a, b) {
//     return a + b;
// }
//
// function cube(a) {
//     return a ** 3;
// }

// const sum = (a, b) => {
//     return a + b;
// }
// const cube = a => a ** 3;
//
// console.log(sum(12, 6))
// console.log(cube(2))

// setTimeout(() => console.log('After 1 second'), 1000)

// Context
function log() {
    console.log(this)
}

const arrowLog = () => console.log(this)

const person = {
    name: "Pavel",
    age: 25,
    log: log,
    arrowLog: arrowLog,
    delayLog: function () {
        setTimeout(() => console.log(this.name + ' ' + this.age), 500)
    }
}