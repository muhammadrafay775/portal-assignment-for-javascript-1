// Chapter 20 – for loops nested

// Q no 1
let firstNames = ["Lil", "Big"];
let lastNames = ["Zzz", "Boom"];
for (let i = 0; i < firstNames.length; i++) {
  for (let j = 0; j < lastNames.length; j++) {
    console.log(firstNames[i] + " " + lastNames[j]);
  }
}

// Q no 2
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log("Inner loop running");
  }
}

// Q no 3
for (let i = 0; i < firstNames.length; i++) {
  for (let j = 0; j < lastNames.length; j++) {
    if (i !== j) {
      console.log(firstNames[i] + " " + lastNames[j]);
    }
  }
}

// Chapter 21 – Changing case

// Q no 1
let input1 = prompt("Enter text:");
let lower = input1.toLowerCase();
console.log(lower);

// Q no 2
let cityInput = prompt("Enter city name:");
let upperCity = cityInput.toUpperCase();
if (upperCity === "KARACHI") {
  console.log("Welcome to Karachi!");
} else {
  console.log("City not matched.");
}

// Q no 3
let reason = "Changing case helps ensure consistent, case-insensitive comparison.";

// Chapter 22 – Strings: measuring length and extracting parts

// Q no 1
let str = "JavaScriptRocks";
console.log(str.substring(0, 5));

// Q no 2
let lastInput = prompt("Enter something:");
console.log(lastInput.charAt(lastInput.length - 1));

// Q no 3
let fullName = prompt("Enter your full name:");
console.log(fullName.length);

// Chapter 23 – Strings: finding segments

// Q no 1
let sentence = "The lazy dog sleeps.";
console.log(sentence.indexOf("dog"));

// Q no 2
let userText = prompt("Enter a sentence:");
console.log(userText.indexOf("hello") !== -1);

// Q no 3
let behavior = "If not found, indexOf returns -1.";

// Chapter 24 – Strings: finding a character at a location

// Q no 1
let word = "JavaScript";
console.log(word.charAt(4));

// Q no 2
let userStr = prompt("Enter a string:");
let pos = +prompt("Enter position:");
console.log(userStr.charAt(pos));

// Q no 3
let test = "Out of bounds returns empty string.";

// Chapter 25 – Strings: replacing characters

// Q no 1
let example1 = "This is a bad example.";
console.log(example1.replace("bad", "good"));

// Q no 2
let example2 = "JS is fun. JS is powerful.";
console.log(example2.replace(/JS/g, "JavaScript"));

// Q no 3
let name = "Ali";
let template = "Hello, NAME";
console.log(template.replace("NAME", name));

// Chapter 26 – Rounding numbers

// Q no 1
console.log(Math.round(2.6));
console.log(Math.floor(2.6));
console.log(Math.ceil(2.6));

// Q no 2
let num = +prompt("Enter a number:");
console.log(Math.round(num));

// Q no 3
console.log(Math.floor(-2.9));
console.log(Math.ceil(-2.9));

// Chapter 27 – Generating random numbers

// Q no 1
console.log(Math.floor(Math.random() * 6) + 1);

// Q no 2
let toss = Math.random() < 0.5 ? "Heads" : "Tails";
console.log(toss);

// Q no 3
let password = Math.floor(Math.random() * 9000) + 1000;
console.log(password);

// Chapter 28 – Converting strings to integers and decimals

// Q no 1
let floatNum = "45.67";
console.log(parseFloat(floatNum));

// Q no 2
let strWithNum = "123px";
console.log(parseInt(strWithNum));

// Q no 3
console.log(parseInt("abc"));

// Chapter 29 – Converting strings to numbers, numbers to strings

// Q no 1
let n = 123;
console.log(String(n), typeof String(n));

// Q no 2
let year = "2025";
console.log(Number(year) + 10);

// Q no 3
let p1 = parseInt("50.99");
let p2 = Number("50.99");

// Chapter 30 – Controlling the length of decimals

// Q no 1
let dec = 123.45678;
console.log(dec.toFixed(2));

// Q no 2
let rounded = Number("12.999");
console.log(rounded.toFixed(1));

// Q no 3
let decInput = +prompt("Enter decimal:");
console.log(decInput.toFixed(3));

// Chapter 31 – Getting the current date and time

// Q no 1
let now = new Date();
console.log(now);

// Q no 2
console.log(now.getFullYear());

// Q no 3
let hrs = now.getHours();
let greeting = hrs >= 12 ? "Good Afternoon" : "Good Morning";
console.log(greeting);

// Chapter 32 – Extracting parts of the date and time

// Q no 1
console.log(now.getDate(), now.getMonth() + 1, now.getFullYear());

// Q no 2
console.log(now.getHours(), now.getMinutes());

// Q no 3
let time = now.getHours() + ":" + now.getMinutes();
console.log(time);

