// // const marvel_heroes=['thor','woderwomen','ironmen']
// const dc_heroes=['spidy','batty','supy']
// // marvel_heroes.push(dc_heroes)
// // console.log(marvel_heroes)           [ 'thor', 'woderwomen', 'ironmen', [ 'spidy', 'batty', 'supy' ] ]  array is taken as a single element

// // console.log(marvel_heroes[3][1])        batty
// const marvel_heroes=['thor','woderwomen','ironmen']
// // console.log(marvel_heroes.concat(dc_heroes))        [ 'thor', 'woderwomen', 'ironmen', 'spidy', 'batty', 'supy' ] 


// spread instead of concat as u can add as many many values as u need ,but in concat only 2 values u need to give
// const all_new_heroes = [...marvel_heroes,...dc_heroes]
// console.log(marvel_heroes.spread())
// console.log(all_new_heroes)      [ 'thor', 'woderwomen', 'ironmen', 'spidy', 'batty', 'supy' ]


// to dis nest a nested array

// const another_array= [1,2,3, [4, 5, 6],7,[6,7,[4,5,6],7]]
// const ano_array=another_array.flat(Infinity) //give the depth of the nest like 1 or 2 or just give infinty
// console.log(ano_array)               [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5, 6,7]


// console.log(Array.isArray("bimbi")) //asking after giving a string // false
// // console.log(Array.from("bimbiii"))   ['b', 'i', 'm', 'b', 'i', 'i', 'i'  ] converts the string bimbi to an Array

// console.log(Array.from({name:"hitesh"}))   [] intresting as it didnt understand i fit has to make an array of the keys or the values





let score1= 100
let score2= 200
let score3= 400
console.log(Array.of(score1,score2,score3))  makes an array of any data type   [ 100, 200, 400 ]