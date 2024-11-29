let myDate= new Date()
// console.log(myDate)                           2024-09-13T15:03:54.297Z
// console.log(myDate.toString())                Fri Sep 13 2024 20:35:59 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString())            Fri Sep 13 2024
// console.log(myDate.toLocaleString())             13/9/2024, 8:40:18 pm
// console.log(myDate.toTimeString())                  20:42:57 GMT+0530 (India Standard Time)

// console.log(typeof myDate)                                 object

// let myCreateDate = new Date(2024,0,17) 
// console.log(myCreateDate.toDateString())                 Wed Jan 17 2024
// month starts from 0

// let newDate= new Date( 2023,3,9, 12,34, 55)

// console.log(newDate.toDateString());  //  Sun Apr 09 2023
// console.log(newDate.toLocaleString())    //12:34:55 pm

//  let newDate = new Date("2023-00-14")//doesnt start with 00 in this format
 
//  let newDates = new Date("2023-01-14")
//  console.log(newDates.toLocaleString());   14/1/2023, 5:30:00 am

//  let newDates = new Date("01-02-2003")
// //  console.log(newDates.toLocaleString());

//  let myTimeStamp= Date.now()          current date
// //  console.log(myTimeStamp)         1727088069412
// console.log(newDates.getTime())         time from a pt

// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
// console.log(newDate.getHours())       18
// console.log(newDate.getMonth())        8
// console.log(newDate.getDay())          1
// console.log(newDate.getMonth()+1)   //so the end user doesnt get confused
// console.log(`${newDate.getHours()}is the time`)     19is the time
newDate.toLocaleString ('default',{ weekday: "long",
    
})
