let score="12"
console.log(typeof score)
console.log(score)

let convert=Number(score)
console.log(typeof convert)
console.log(convert)        //NaN (not a number)

//when datatypes converting to Number
//"12" =>12
//"12abc" =>NaN
//"true" =>1    & flase =>0
//null =>0
//undefined =>NaN


let login=1
console.log(typeof login)
console.log(login) 

let convertlogin=Boolean(login)
console.log(typeof convertlogin)
console.log(convertlogin)

//boolean conversion
// 1=>true
// 0=>false
// "anystring" =>true
// ""=>flase

// =========================OPERATIONS================================
console.log("OPERATIONS")
console.log(1+"2")
console.log("1"+2)
console.log(1+2+"3")
console.log("1"+2+3)

console.log("PREFIX AND POSTFIX OPERATOR")

let x=10
console.log(x)

const z=x++
console.log(x,z)

const y=--x
console.log(x,y)

