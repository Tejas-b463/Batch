// import { msg, add, student } from "./file1.js"
import * as x from "./file1.js"
import abc from "./file1.js"
// document.getElementById("para").innerHTML = x.msg
// console.log(msg)
document.getElementById("para1").innerHTML = x.add()
let stud1 = new x.student(1, "ABC", "Pune")
document.getElementById("stud").innerHTML = stud1.display()
document.getElementById("head").innerHTML = abc()