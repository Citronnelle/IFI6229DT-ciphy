console.log('hi')

function sayHi() {
    return 'hello'
}

console.log(sayHi())

const arrowFunction = () => {
    return 'hello from arrow function'
}

console.log(arrowFunction())

const shortArrowFunction = () => 'hello from short arrow function'

console.log(shortArrowFunction())


// Kirjutage 3 funktsiooni tüüpi, a ja b ja returnib summa

function liida1 (a, b) {
    return a + b    
}

const liida2 = (a, b) => {
    return a + b
}

const liida3 = (a, b) => a + b

console.log(liida1(1,6))
console.log(liida2(2,5))
console.log(liida3(3,4))

const sumA = a => b => a + b

console.log(sumA(3)) // Tagastab funktsiooni
console.log(sumA(3)(4))

// Kirjutada see ümber funktsiooni kujuna
// function sumA(3){ ... }

function sumAB(a) {
    return function sumB (b) { 
        return a + b
    }
}

console.log(sumAB(3)(4))

// Lühem versioon: 
function sumC(a) {
    return function(b) { 
        return a + b
    }
}

console.log(sumC(3)(4))

// 
console.log("")
console.log("---")
console.log("")

const bla = async () => {
    setTimeout(() => console.log('1'), 0)
    await setTimeout(() => console.log('2'), 0)
    console.log(new Promise ((resolve, reject) => {
        resolve('3')
    }))
    console.log('4')
    console.log(await new Promise(resolve => {
        resolve('5')
    }))
    console.log(await new Promise(resolve => setTimeout(() => resolve('6'), 0)))
}

// bla()

// 
console.log("")
console.log("---")
console.log("")

// map, filter, reduce: 
const kids = [
    {
        id: 7,
        name: "Mari",
        age: 11,
        color: "blue"
    },
    {
        id: 12,
        name: "Jüri",
        age: 14,
        color: "green"
    },
    {
        id: 13,
        name: "Kadri",
        age: 14,
        color: "red"
    },
    {
        id: 21,
        name: "Mart",
        age: 12,
        color: "blue"
    }
];

let kidsIds = kids.map(kid => kid.id)
let oldestKid = kids.reduce((oldestSoFar, kid) => {return (oldestSoFar.age || 0) > kid.age ? oldestSoFar : kid }, {})
let kidsThatLikeBlue = kids.filter(kid => kid.color == "blue")

// .reduce((oldestSoFar, kid) => {return (oldestSoFar.age || 0) > kid.age ? oldestSoFar : kid }, {}
// .reduce((accumulatedValue, currentValue) => { return formula }, initialValue)

console.log(kidsIds)
console.log(oldestKid)
console.log(kidsThatLikeBlue.map(kid => kid.name))

let oldestKidThatLikesBlue = kids
    .filter(kid => kid.color == "blue")
    .reduce((oldestSoFar, kid) => {return (oldestSoFar.age || 0) > kid.age ? oldestSoFar : kid }, {})

console.log(oldestKidThatLikesBlue.name)
 
// Loob massiivist objekti ja prindib välja:
// console.log({kids: kids})
console.log({ kids })

let array = [1,2,3,4,5]
let array5 = array.map(element => ({
    name: `Name ${element}`,
    value: element
}))
console.log({ array5 })

// Spread:
const a = {
    a: 1,
    b: 2
}

// const b = { a: 1, b: 2, c: 3}
const b = {
    ...a,
    c: 3
}

console.log({ b })

let randomOb = {
    a: 1,
    b: {
        b: 1,
        b2: {
            b2: 1
        }
    }
}

console.log({ ...randomOb })

// TODO: reduce flat
