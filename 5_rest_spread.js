//Rest
// const average = (a, b, ...args) => args.reduce((acc, i) => acc + i, 0) / args.length;
//
// console.log(average(10, 20, 30, 40, 50))

//Spread
// const array = [1, 2, 3, 5, 8, 13]
// console.log(...array)
// console.log(Math.min(...array))
// console.log(Math.max(...array))
// console.log(Math.max.apply(null, array))
//
// const fib = [1, ...array]
// console.log(fib)

// Destructuring
const array = [1, undefined, 3, 5, 8, 13]

// const a = array[0]
// const b = array[1]
// const [a, b = 42, ...c] = array
// console.log(a, b, c)

// const [a, , c] = array
// console.log(a, c)

// Object
const address = {
    country: 'Russia',
    city: 'Moskow',
    street: 'Lenina',
    concat: function () {
        return `${this.country} ${this.city} ${this.street} `
    }
}

// const {city, country, street = 'Tverskay', concat: addressConcat} = address;
// console.log(addressConcat.call(address))
// console.log(street)

// console.log(address.concat())

const {city, ...rest} = address
console.log(city)
console.log(rest)

const newAdrress = {...address, street: 'Tverskay', code: 123}
console.log(newAdrress)