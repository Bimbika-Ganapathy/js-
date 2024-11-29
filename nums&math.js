const score=40;
// console.log( score);           40
// console.log( typeof score);      number
// const balance =new Number(40);
// console.log( balance);         [Number: 40]
// console.log(balance.toString().length)      2
// console.log(balance.toFixed(2)); sets the prcision   40.00
// console.log(balance.toFixed(1));                40.0


//      ******precision
// // const otherno=23.5678
// // console.log(otherno.toPrecision(3))     23.6  
// const otherno=123.8966
// console.log(otherno.toPrecision(4))      123.9

// const hundreds = 1000000 
// console.log(hundreds.toLocaleString());           10,00,000
// console.log(hundreds.toLocaleString('en-IN'));    10,00,000

// *******number
// const no= new Number(566)

// console.log(Number.MAX_VALUE)        1.7976931348623157e+308
// console.log(Number.MIN_VALUE)        5e-324
// console.log(Number.MAX_SAFE_INTEGER)     9007199254740991



// &&&&&&&&&&&&&& MATHS &&&&&&&&&&&&&&&&&

console.log(Math)
// console.log(Math.abs(-4))       4 ,  minus values will become positive 
// console.log(Math.abs(-4.3))      4.3  
// // console.log(Math.round(4.6))     5       rounds off
// console.log(Math.ceil(4.6))         5      gives the greater value
// console.log(Math.floor(4.6))        4       gives the lesser value
// console.log(Math.round(4.5))        5       rounds off
// console.log(Math.sqrt(25))
// console.log(Math.min(2,3,5,20))        2        returns the smallest value
// console.log(Math.max(10.,4333333,2423432,264726,247298))//
// console.log(Math.random())              0.5276779912752942
// console.log(Math.ran0dom())                 gives a random value between 0 and 1


// if u wanna no between 0 to 10 then just multiply by 10 or if u need btwn 1 and 100 mutiply by 100
// console.log(Math.random()*10)           4.829080430613506
// but if the no was 0.02193 smtg then the value will be 00.313 therefore 0 hence well add 1

// console.log((Math.random()*10)+1)      //    8.062717685235727 careful bodmas
// console.log(Math.random()*100)          74.2351340417242


// console.log(Math.floor(Math.random()*10)+1)

const max= 20
const min =10

console.log(Math.random()*(max-min+1)+min)
 max-min guves a range btwn( ex: 10) them n adding min increases it from the min

