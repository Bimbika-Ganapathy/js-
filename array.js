const Arr=[0,1,2,3,4,5]
// console.log(Arr[0])

// deep copy     dont share the same reference
// shallow copy = any change reflects in the org Array


const hero=["nags","chanel"]

// console.log(typeof hero);   obj
// const arr= new Array(1,2,2,3)
// console.log(arr[2])


// hero.push("sur")
// console.log(hero)    [ 'nags', 'chanel', 'sur' ]
// hero.pop()

// console.log(hero)       [ 'nags', 'chanel' ]
// hero.unshift(0)
// console.log(hero)        [ 0, 'nags', 'chanel' ]

// hero.unshift(9)
// console.log(hero)           [ 9, 'nags', 'chanel' ]

// hero.shift()
// console.log(hero)             [ 'nags', 'chanel' ]

// console.log(hero.includes("chanel"))     true

// console.log(hero.indexOf("nags"))
// 

const NewArr= Arr.join()
// console.log(NewArr)         0,1,2,3,4,5
// console.log(Arr)           [ 0,1,2,3,4,5]

console.log(typeof NewArray);   // string ,join  converts into string

//slice 

console.log("A", Arr)
const myn1= Arr.slice(1, 3)
console.log(myn1)

// splice - manipulates org array n includes the last index

console.log("B",Arr)
const myn2=Arr.splice(1,3)
console.log(myn2)
console.log("B",Arr)


