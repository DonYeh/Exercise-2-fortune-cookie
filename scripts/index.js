// const output = document.querySelector([data-output]);
// const input = document.querySelector([data-output]);

// create an array of string
let jokeArray = [
  "Remember, the best angle to approach a problem from is the 'try' angle.",
  "What's the difference between a guitar and a fish? You can tune a guitar but you can't 'tuna' fish!",
  "Past, present, and future walked into a bar.... It was tense.",
  "Did you hear about the Mexican train killer? He had loco motives",
  "Is the pool safe for diving? It deep ends.",
  "Parallel lines have so much in common. It’s a shame they’ll never meet",
  "I couldn't get a reservation at the library. They were completely booked",
  "Why are skeletons so calm? Because nothing gets under their skin.",
  "I asked a frenchman if he played video games. He said 'Wii'",
  "Americans can't switch from pounds to kilograms overnight. That would cause mass confusion."
];
const body = document.querySelector("body");
const displayJoke = document.querySelector("[data-output]");
displayJoke.textContent = "jokes displayed here";
body.appendChild(displayJoke);
let clicks = 0;

const randNum = 0;

function displayNextJoke(event) {
  // console.log("you just clicked a button!");
  // console.log(jokeArray);
  // console.log(event);
  // console.log(clicks);
  if (clicks == jokeArray.length) {
    clicks = 0;
  } else {
    displayJoke.textContent = jokeArray[clicks];
    clicks += 1;
  }
}

function displayPreviousJoke(event) {
  // console.log("you just clicked button2!");
  // console.log(jokeArray);
  // console.log(event);
  // console.log(clicks);
  if (clicks == 0) {
    clicks = jokeArray.length;
  } else {
    displayJoke.textContent = jokeArray[clicks];
    clicks -= 1;
  }
}

function displayRandomJoke() {
  displayJoke.textContent = jokeArray[getRandomNumber(0, jokeArray.length)];
}

// returns a random integer
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const buttonClick = document.querySelector("[data-input]");
const buttonClick2 = document.querySelector("[data-input2");
const buttonClick3 = document.querySelector("[data-input3");

buttonClick.addEventListener("click", displayNextJoke);
buttonClick2.addEventListener("click", displayPreviousJoke);
buttonClick3.addEventListener("click", displayRandomJoke);
