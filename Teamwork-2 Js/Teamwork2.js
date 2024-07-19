console.log(0.1 + 0.2); // 0.30000004
console.log(0.1 + 0.2 == 0.3); // false

console.log(1 < 2 < 3); // true
console.log(3 > 2 > 1); // false

// let sum = 0;
// while(true) {
//     let number = Number(prompt("Please enter a positive number. if you enter a negative number it will end"))
//     if (number < 0){
//         break;
//     }
//     sum += number
// }

// console.log("Sum of positive number: " + sum)

console.log(null == undefined); // t
console.log(null === undefined); // f
console.log(isNaN(2 + null)); // f
console.log(isNaN(2 + undefined)); // t
console.log(isNaN(2 + false)); // f
console.log(isNaN(2 + 0)); // f
null ? console.log("true") : console.log("false"); // f

var hash = "";
var count = 1;
var n = 3;
for (var x = 1; x <= 7; x++) {
  while (hash.length != count) hash += "#";
  hash += "\n";
  count += n;
  n++;
}
console.log(hash);
/*
#
##
###
####
#####
######
#######
*/

let firstName = null;
let lastName = null;
let nickName = "coderBond";
console.log(firstName ?? lastName ?? nickName ?? "Anonymous");
/*
---coderBond---
Nullish Coalescing Operatörü ??:

?? operatörü, sol tarafındaki değerin null veya undefined olup olmadığını kontrol eder. Eğer sol tarafındaki değer null veya undefined değilse, bu değeri döner. Eğer null veya undefined ise, sağ tarafındaki değere geçer.
*/

function onZoom(x) {
  console.log("Zoom active for", x);
}
function startClass(x, y, z) {
  console.log(" Class starts at", x);
  y(z);
}
startClass("20:00", onZoom, "FS"); // 69-Class starts at 20.00 66-Zoom active for FS

console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(5)
); // 120

(function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2;
    console.log(x); // 1
  }
  console.log(x); // undefined
  console.log(y); // 2
})();

let a = [10, 20, 30];
a[10] = 100;
console.log(a[6]); // undefined
let b = [undefined];
b[2] = 1;
console.log(b); // [undefined, empty, 1]
console.log(b.map((e) => 99)); // [99, empty, 99]



function orderPizza(type, ingredients, callback) {
  console.log('Pizza ordered...');
  console.log('Pizza is for preparation');
  setTimeout(function () {
  let msg = `Your ${type} ${ingredients} Pizza is ready! The total bill is
 $10`;
  callback(msg);
  }, 3000);
 }
 orderPizza('Vegeterian', 'Cheese', function(message){
  console.log(message);
 });



 