console.log("hello"+"world")
const name="hitesh"
const repocount=50

console.log(name+repocount+ " value ")

// string place holders

console.log(`hello ${name} good morning. the cost is ${repocount}` )
console.log("hello")

const gameName = new String('hit-esh')

// console.log(gameName[0]) h --findind the char at an index
// console.log(gameName.__proto__)  {} -- says its an Object
// console.log(gameName.length)  6
// console.log(gameName.toUpperCase()); 
// console.log(gameName.charAt(2)); t
// console.log(gameName.indexOf("t")) 2
// console.log(gameName.indexOf('t')) 2
// const newString = gameName.substring(0,4)
// // console.log(newString)  hit-
// console.log(gameName.substring(0,4))
// const anotherString=gameName.slice(0,4)  hit-
// // console.log(anotherString)

// console.log(gameName.substring(-8,4))  ignores -8 n starts from the beginning
// console.log(gameName.slice(-8,4));  hit- takes from the reverse

// const newStr="     hello    "
// console.log(newStr.trim())     removes the space 

const url="https:vruh//vr5%20enr.com%20 .dsv//vre"
// console.log(url.replace('%20','-'))   only replaces at the first occurance
console.log(url.replaceAll('%20','-'))
console.log(url.includes("vruh"))  true
console.log(url.split("/")) converts to array  [ 'https:vruh', '', 'vr5%20enr.com%20 .dsv', '', 'vre' ]
