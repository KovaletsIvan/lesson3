// Task 1
// 1
var result = 1;
var arr = [2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
  result = result * arr[i];
}
console.log(result);

//2
var rest = 1;
var cont = 0;
while (cont < arr.length) {
  rest = rest * arr[cont];
  cont++;
}
console.log(rest);

// Task 2
var num = 0;
for (var i = 0; i <= 15; i++) {
  num = i % 2;
  var word = num > 0 ? "is odd" : "is even";
  console.log(i + "", word);
}

// Task 3
//
function getRandomNum(max) {
  var num = Math.floor(Math.random() * Math.floor(max));
  return num;
}
getRandomNum(500); // creation of randome number generator

var newArr = [];
function randArray(k) {
  for (var i = 0; i < k; i++) {
    newArr[i] = getRandomNum(500);
  }
  console.log(newArr); // creation of new array
}
randArray(7);

// Task 4

var a = prompt("Enter Your Firs Number", "number");
var b = prompt("Enter Your Second Number", "number");
a = +a;
b = +b;

function raiseToDegree(a, b) {
  var pow =
    a - Math.floor(a) == 0 && b - Math.floor(b) == 0
      ? Math.pow(a, b)
      : "Incorrect Data";
  console.log(pow);
}

raiseToDegree(a, b);

// Task 5

var ar;
function lastArrayEllement(x, inintialArr) {
  if (x == 0 || inintialArr.length == 0) {
    console.log("Inccorect Data");
  }
  else { var ar = inintialArr.slice(-x) };

  console.log(ar);
}
lastArrayEllement((2),[14, 17, 2, 4, 8, 9]);

// Task 6

var str = prompt("Your text", "type");
var newWord = " ";
function upperText() {
  var text = str.split(" ");
  for (i = 0; i < text.length; i++) {
    var name = text[i];
    var firstLeter = name.substring(0, 1).toUpperCase();
    var word = name.substring(1, name.length);
    newWord = newWord + firstLeter + word + " ";
  }
  console.log(newWord);
}
upperText();
