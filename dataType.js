//documentation = mdn ecma script

// "use strict"; //treat all js code as a nweer vrsion

//alert(3+3) //we r using node js not browser so error


// primitive n non printitive datatypes
// primitive
// 7 types
// str,no,boolean,bigint,null,undefined,symbol

// reference (non primitive)( always returns obj in type of func)
// object, array, func


// const a=100 no
// const b=10.2 no
// const c= true       bool
// const d=null 
// cont e= undefined
// let f; = undefined

//symbol  same name diff value
// const id=Symbol('123')
// const id1=Symbol('123')
// console.log(id===id1)

const bigno=12454555555555555n //big int(n)


// reference (non primitive)
// object array func

// array
// const heroes= ["shktiman","nag","dog"]

// object:
// key value pairs
// {
//     name: "hitesh",
//     age: 22,
// }

// func/
// const myFunc=function(){
//     console.log("hello world")

// }
// console.log(typeof bigno)
// console.log(typeof null) // obj asked in int***********
// console.log(typeof myFunc) //func obj
// console.log(typeof heroes)  //obj
// console.log(typeof id)

// let myobj={
//     name: "hitesh",
//     age:22,
// }


// let name="hitesh"

// let age =0

// let isloggedin =true

/* 
number => 2 to power 53 (range)
BigInt
string = ""
boolean =>true/false
null standalone value/empty
undefined-->default value
symbol=> unique designs n all


//object

console.log(typeof(null))//==obj
console.log(typeof(undefined))//==undefined

let score = 33

console.log(typeof(score)); //number
console.log(typeof score);  //number
let scar= "33"

console.log(typeof scar)    //str

let valueinno=Number(scar)
console.log(typeof valueinno)  //no

let no= "33abc";
console.log(typeof no);
let no1= Number(no);
console.log(typeof no1);
console.log(no1)  ==> not a no = NaN // doesnt get converted into number

let no2= null;
let no3= Number(no2);
//console.log(no3); -->0
console.log(typeof(no3)) 
  
let no4= undefined;
let z = (Number(no4))//-->num
console.log(z); //--> Nan  

let no5= true
let y= Number(no5)
console.log(y) --> 1

let no6= false
let x =Number(no6)
console.log(x) -->0


"33" -> 33
"33abc" --> NaN
true ->1
false ->0


let isLoggenIn = 1
let current = Boolean(isLoggenIn)
console.log(current)              =true

let isLoggenIn = ""
let current = Boolean(isLoggenIn)
console.log(current)             =false


let isLoggenIn = "gfcej"
let current = Boolean(isLoggenIn)
console.log(current)            =true

1--> true
2 --> true
"" --> false
"xx"-->true

let a=33
let v = String(a)
console.log(typeof(v))     =str
console.log(v);     =33


****************operations ******************

let val=3
let negval = -(val)
console.log(negval)

console.log(2+2)
console.log(2-2)
console.log(2/2)
console.log(2*2)
console.log(2**2)
console.log(2%2)

let str1 = "hello"
let str2 = " jenny"
console.log(str1+str2)
let str3 =str1 + str2
console.log(str3)

console.log("1"+2)//12
console.log(1 + "2")//-->12
console.log("1"+ "2")//+--->12
console.log("1"+ 1 + 1 )// 111
console.log(1+1+"1")//  21


console.log( 3 + 4 *5 % 3)-->5

console.log(+true) -->1
console.log(true+) -->err   
console.log(+"") -->0
console.log(+"d ") -->nan

let num1,num2,num3

num1 = num2 = num3 = 2+2
let game_Counter = 100
console.log(game_Counter++)  -->100
console.log(++game_Counter) -->102 
let x = 3;
const y = x++;

for getting value 
console.log(`x:${x}, y:${y}`);  --> x=4,y=3




*****************comparison***************

console.log(2>1);
console.log(2>=1);
console.log(2<1)
console.log(2==1);
console.log(2!=1)


console.log("2">1) -->true 
console.log( "02" >1) -->true

console.log(null > 0)-->false
console.log (null == 0)-->false
console.log(null >= 0);-->true


equality check and comparisons work differently ,
comparison convert null to a Number vice versa

console.log(undefined==0) -->false
console.log(undefined>0) -->false
console.log(undefined<=0) -->false

undefined always gives false

*/
// triple equals = strict equals 
// checks the data types too and not just the equal symbol

 
// console.log("2"===2);           f
// console.log(2===2)              t
// console.log("hii"==="heee")    f
//     console.log("bbb"==="bbb") f

    // Memory
    // Stack = primitive type, copy of var
    // heap = non primitive type, ref of org val

 
//     let heroes =["sha","hi",]
//     let my obj={
//         name:"hitesh",
//         age:11
//             }
    
// const myFunction=function(){
//     console.log("hello world");
// }

let myytname="bimbika.com"
let another= myytname;
another="myy"
console.log(another)

let user1={
    email:"bimbikag",
    upi:"user@ybl"

}
let user2= user1;
user2.email="bimbikaaaaaaaaa"
console.log(user2.email)     bimbikaaaaaa
console.log(user1.email)    bimbikaaaaaa

if u change in stack will be changed only in the referenace but in heap it will change inn the original value