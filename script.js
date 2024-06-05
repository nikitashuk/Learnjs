// const fruits = [ "apple", "banana", "grapes", "mango", "orange"]
// console.log(fruits)
// console.log((fruits[0 ] ))
// console.log (fruits[1] = "pineapple")
// console.log(fruits)
// i = 0;
// for (let i=0; i<fruits.length; i++) {
//   console.log(fruits[i])

// }
// array methods
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// toString method
// let b = num.toString()
// console.log(b)
// console.log(b.length)
// console.log(typeof(b))

// join method
// let d = num.join(" to the ")
// console.log((d) , typeof (d))

// pop method
// console.log(num.pop())
// console.log(num)
// let num1 = num.pop()
// console.log(num1) // returned the popped value

// push method
// console.log(num.push(12))
// console.log (num)
// let num1 = num.push(12)
// console.log(num1)  // returned the new array length

// shift method
// let num1 = num.shift()
// console.log(num1 , num)

// unshift method
// let num1 = num.unshift(23)
// console.log(num1 , num)

// delete method
// let num1 = delete num[3]
// console.log(num)
// console.log(delete num[5])
// console.log(num)

// concat method
// let num1 = [34,45,56,89,76,89]
// let num2 = [ 6748,5894,654]
// // let num3 = num.concat( num1 , num2)
// let num3 = num1.concat(num2)
// console.log(num3)

// sort method
// let num1 = [256,13,1,1000,8,3]
// num1.sort()
// console.log(num1)

// sort method with compare function
// let compare = (a,b) => {
//   return b-a
// }
// let num1 = [256,13,1,1000,8,3]
// num1.sort(compare)
// console.log(num1)

// reverse method
// num.reverse()
// console.log(num)

// splice method
// let num1 = [56,4,67,8,9,0,23,12,11]
// num1.splice(3)
// // num1.splice(3,2,56.098,5678,3435,6758.8790,57)
// console.log(num1)

// slice method
// let num1 = [56,4,67,8,9,0,23,12,11]
// // console.log(num1.slice(3))
// console.log(num1.slice(3 , 5))

// LOOPS IN ARRAYS

// Array.from loop
// let num1 = 'Nikita'
// let num2 = Array.from(num1)
// console.log(num2)

// for of loop
// let num1 = [34,56,34,57.8]
// for (let i of num1){
//   console.log(i)
// }

// for in loop
//  let num1 = [34,56,34,57.8] // by default it assumes num1= [ 0:34,1:56,2:34,3:57.8]
// for (let i in num1){
//   console.log(i) // it returns the key of values
// }

// for loop
// let num1 = [33,456,67.889,22,77,89]
// for (let i=0; i<num1.length; i++){
//   console.log(num1[i])
// }

// forEach  loop
// let num1 = [ 34,46,56,7,9,5]
// num1.forEach((element) => {
//   console.log(element*element)
// })
// console.log(num1)

// Map() Function
// let num1 = [34,56,88,65,55.4,7,9,22,12]
// let num2 = num1.map((items =>{
//   return items*2
// }))
//   console.log (num2)
// console.log (num1)

// Filter() Function
// let num1 = [34,56,88,65,55.4,7,9,22,12]
// let num2 = num1.filter((items) =>{
//   return items%2==0
//   // return items>30
// })
// console.log(num2)
// console.log (num1)

// Reduce() Function
// let num1 = [34,56,88,65,55.4,7,9,22,12]
// let num2 = num1.reduce((items,value) => {
//   return items*value
// })
// console.log(num2)
// console.log(num1)

// Practice Set
// Problem no1
// let num1 = [2, 4, 5, 8, 3];
// let num2 = prompt("Enter a number");
// let num3 = [];
// num2 = Number.parseInt(num2);
// for (let i of num1) {
//   console.log(i + num2);
// }
// console.log(num3);

// let num1 = [2, 4, 5, 8, 3];
// let num2 = prompt("Enter a number");
// num2 = Number.parseInt(num2);
//  num1.push(num2);
// console.log(num1);

// Problem no2
// let num1 = [2, 4, 5, 8, 3];
// let num2;
// while (num2 != 0) {
//   num1.push(num2);
//   num2 = prompt("Enter a number");
//   num2 = Number.parseInt(num2);
// }
// console.log(num1);

// Problem no3
// let num1 = [34,56,77,88,33,3,7,9,67,65,220,23,1,110]
// let num2 = num1.filter((items)=>{
//   return (items%10 == 0)
// })
// console.log(num2)

// Problem no4
// let num1 = [2,4,6,8,9]
// let num2 = num1.map((items) => {
//   return items*items
// })
// console.log(num2)

// Problem no5
// let num1 = [2,4,6,8,9]
//  let num2 = num1.reduce((items, items1) => {
//    return items*items1
//  })
//  console.log(num2)
//  function  getmyFunction (min, max)  {
//     return(Math.floor(Math.random() * (max-min) + min))

//  }
// Math.random ()
// let min = 10;
// let max = 20;
// console.log(Math.floor(Math.random() * (max-min) + min))

// <button click="myFunction()"> Click me </button>

// let num1 = 1;
// let num2 = 100;
//  let num3 =  (Math.floor(Math.random() *  (num2-num1) + num1))
//  console.log(num3)
//  let num4 = prompt ("Enter the guessed number : ")
// if (num3==num4) {
//      num4 = prompt ("Enter the guessed number : ")
//     num4 = Number.parseInt(num4)
//     console.log("your guess is correct");

//  }
//  else {
//     console.log("your guess is not correct try again")
//  }

//  let num5 =   console.log(prompt("Enter the gussed number again: "))

//  else if ( num2<num3){
//     console.log("gussed number is less than your gusssed number");
//     console.log(prompt("Enter the gussed number again: "));

//  }
//  else if {
//     console.log("gussed number is greater than your gusssed number");
//     console.log(prompt("Enter the gussed number again: "));
// }

//  console.log(typeo)
// let num5 = '';
// let num1 = 1;
// let num2 = 100;
//  let num3 =  (Math.floor(Math.random() *  (num2-num1) + num1))
//  console.log(num3)
//  let num4 = prompt ("Enter the guessed number : ")

// //  else {
// //     console.log("your guess is not correct try again")
// //  }
// if (num3==num4) {
//     num4 = prompt ("Enter the guessed number : ")
//    num4 = Number.parseInt(num4)
//    console.log("your guess is correct");

// } else if (num3 > num5) {
//     console.log("your guess is not correct try again")
//     let num5 = prompt("Enter the gussed number again: ")
//     num5 = Number.parseInt(num5)

//   } else if (num3 < num5) {

//     console.log("your guess is not correct try again")
//     console.log("your gussed number is less than gussed number")
//     let num5 = prompt("Enter the gussed number again: ")
//     num5 = Number.parseInt(num5)
//   }
//   else{
//     console.log("your guess is not correct try again")
//     console.log("your gussed number is greater than gussed number")
//     console.log( prompt("Enter the gussed number again: "))
//   }

//     Project-1 Color Changer //

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "red") {
      body.style.backgroundColor = "red";
    }
    if (e.target.id === "grey") {
      body.style.backgroundColor = "grey";
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = "yellow";
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = "green";
    }
  });
});

//     Project-2 BMI Generator   //

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  //     to stop the data in  server loading
  e.preventDefault();

  const height = parseInt(document.querySelector(".height").value);
  const weight = parseInt(document.querySelector(".weight").value);
  const results = document.querySelector(".results");

  if (height === "" || height < 0 || isNaN(height)) {
    //     Always in bactics(``)
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    //     Always in bactics(``)
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //     Always in bactics(``)
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

//     Project-3 to update the clock (display the time)
const update = document.querySelector(".clock");
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  update.innerHTML = date.toLocaleTimeString();
}, 1000);

//     Project-4 Random Number Generator and guess the right number    //

//     step-1 to generate the random number
let randomNumber = parseInt(Math.random() * 100 + 1);

//     step-2 select all the elements
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".LastResult");
const startOver = document.querySelector(".resultparas");
const LowOrHi = document.querySelector(".LowOrHi");

//     step-3 insert the values
const p = document.createElement("p");

//     step-4 take the values
let prevGuess = [];
let numGuess = 1;
let playGame = true;

//     step-5 creating function for this
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

//     step-5 creating function for this

//  for validate the number (number ki value minus m to nhi hai and 0 s chothi to nhi hai)
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter the valid Number");
  } else if (guess < 1) {
    alert("Please Enter a  Number more than 1 ");
  } else if (guess > 100) {
    alert("Please Enter a  Number less than 100 ");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over Random Number was ${randomNumber} `);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

//  for check the number and print the message (number ki value minus m to nhi hai and 0 s chothi to nhi hai)
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`your guess is right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}
// for display the guessess (cleanup Method)
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}   `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

// for display the message (dom k sath interact krke message ko display krna)
function displayMessage(message) {
  LowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// for ending the game
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id= "newgame"> Start new Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

// for start the game(game k kahatam hone pr user phr s game start kr sake)
function newGame() {
  const newGameButton = document.querySelector("#newgame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}

//     Project-5 Image hider
const hider = document.querySelector(".img-list");
hider.addEventListener(
  "click",
  function (e) {
    e.target.parentNode.remove(e); //     ParentNode s pura tag select hota hai
  },
  false
);

//     Project-6 Random color generator and by clicking the button to change the color automatic and also there one stop button
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor());
let intervalid;
startchangingcolor = function () {
  const colorchange = document.querySelector(".colorchanger");

  intervalid = setInterval(changebgcolor, 1000);
  function changebgcolor() {
    colorchange.style.backgroundColor = randomColor();
  }
};

stopchangingcolor = function () {
  clearInterval(intervalid); // reference of settimeout()
  console.log("stopped");
};

const start = document
  .querySelector("#start")
  .addEventListener("click", startchangingcolor);
const stop = document
  .querySelector("#stop")
  .addEventListener("click", stopchangingcolor);

//     Project-7 keyboard key check
const insert = document.querySelector(".insert");
window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class = "table" >
<table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>
     </div>
     `;
  console.log(e.key);
});
//     Project-8 task
function MyIndex() {
  let index = " ",
    i;
  for (i = 0; i < 5; i++) {
    index = index + "btn-1" + i + "<br>";
  }
  document.querySelector(".btn-index").innerHTML = index;
  console.log(index);
}
