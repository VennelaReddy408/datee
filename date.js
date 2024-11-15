// Date functions

let b=Date();
console.log(b)

// using new keyword
let a=new Date();
console.log(a)
console.log(a.getFullYear());
console.log(a.getMonth());
console.log(a.getDate());
console.log(a.getDay());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getSeconds());
console.log(a.getMilliseconds())

// Setting date Methods
// 1.set full year();
let c=new Date();
console.log(c.setFullYear(2024))
console.log(c.setMonth(0))
console.log(c.setDate(2))
console.log(c.setHours(3))
console.log(c.setMinutes(55))
console.log(c.setSeconds(57))

// Additional date methods
let d=new Date();
console.log(d.toDateString())
console.log(d.toLocaleDateString())
console.log(d.toTimeString())
console.log(d.toLocaleTimeString())

// Setting alarm

function alarmRing(){
    let prsntTime=new Date();
    
    let alarmTime=new Date();
    alarmTime.setHours(24);
    alarmTime.setMinutes(0);
    alarmTime.setSeconds(0);

    let timeDiff=alarmTime-prsntTime
    console.log(timeDiff);

    setTimeout(()=>{

        alert("Happy new year")
    },timeDiff)
    console.log("Your alarm will ring at 12:00")

}
alarmRing()

// Math functions
// 1.math round();
let p=6.5;
console.log(Math.round(p))
// 2.Math ceil():
let g=12.11;
console.log(Math.ceil(g))
// 3.Math floor():
let m=123.11;
console.log(Math.floor(m))
// 4.math sqrd();
let n=5;
console.log(Math.pow(n,3))
// 5.math Abs();
let e=-5;
console.log(Math.abs(e))
// 6.math min and max
console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5,6))
// 7.math Random()
console.log(Math.random()*10)
let j=13.99
console.log(Math.trunc(j))
// es6 functions
// let&const
let t=3;
t=6
console.log(t)
const h=7;

console.log(h)

// Arrow functions
const s=()=>
 
    console.log("vennela")
s()
// DEfault parameter
function q(x,y,z=30){
    console.log(x+y+z);

}
q(5,10)
// Template literals
let r="akki"
function o(){
    console.log(`hi ${r} ,how are you`)
}
o()





