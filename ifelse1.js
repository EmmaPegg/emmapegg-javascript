//if ( 1 === "1") 
//console.log(true)
//else
//console.log(false)
//if ( 1 != "1")
//console.log(true)
//else
//console.log(false)
//var age = 17;
//if (age > 17 && country == "UK"){
//      console.log("yes I can serve you")
//}
//else if (age < 18){
//      console.log("you are either too young or in the right country")
//}  
//let day ="Saturday"
//if (day == "Saturday" || day == "Sunday"){
//    console.log("It's weekend!")
//}
//else{
//    console.log("when's weekend?")
//}     
//var password = "Lovebirds"
//if (password < 8) {
//    console.log("your password is not long enough")
//}
//else {
//    console.log("your password is long enough")
//}
//var num = 12
// if (num %3 == 0){
// console.log("ACCEPTED")
// }
// else 
//  console.log("computer say no")
//var num = 25
//if (num %5 == 0){
//console.log("buzz")
//}
//else (null)

//if (num %3 || num %5 == 0) {
//    console.log("fizz buzz")
//}
    
//else (null)

//if (num %3){
//    console.log("fizz")
//}
//else (null)

let num = 1001
numstr = num.toString()
numstr1 = numstr.split("").reversal().join("")
if (numstr == numstr1) {
    console.log(" the number is a palindrom")
}
else   {
    console.log(" the number is not a palindrome")
}