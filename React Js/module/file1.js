 export default function() {
     return "Js Default function"
 }
 var msg = "Hello Everyone";

 function add() {
     var a = parseInt(prompt("Enter Number"))
     var b = parseInt(prompt("Enter Number"))
     return a + b;
 }
 class student {
     constructor(rno, name, address) {
         this.rno = rno,
             this.name = name,
             this.address = address
     }
     display() {
         return `Roll No : ${this.rno} Name : ${this.name} Address : ${this.address}`
     }
 }
 export { msg, add, student }