let firstName = "anna"; //string
let age = 18; //number
let status = true; //boolean
let x = null; // null
let y; //undefined

//
let item1 = 5;
let item2 = "10";
let result = item1 - item2;
console.log(result);
console.log(typeof result);

let item3 = "Good";
let item4 = "Morning";
let rsult2 = item3 + " " + item4;
console.log(rsult2);

//
let a = 10;
a += 20; // a = a + 20
console.log(a);

//
console.log(5 == "5"); //true
console.log(5 === "5"); //false
console.log(true && false); //false
console.log(false && true); //false
console.log(true && undefined); //undefined
console.log(true && "hello"); //'hello'
console.log(true || false); //true
console.log(false || false); //false

//
let item;
let itemNew;
console.log(item + itemNew); //nan

//
let number5 = 10;

if (number5 < 15) {
  console.log("Hello");
} else if (number5 < 20) {
  console.log("Hello2");
} else if (number5 > 5 && number5 < 9) {
  console.log("hello3");
} else {
  console.log("error");
}

//
let resultCondition =
  number5 < 15
    ? "hello"
    : number5 < 20
    ? "hello2"
    : number5 > 5 && number5 < 9
    ? "Hello3"
    : "error";
    
console.log(resultCondition);
