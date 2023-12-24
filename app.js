// varibles for logic use
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

// arrow function for all buttons to pass through eventListener
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    // all called functions
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length

  // console.log(randomNumber);

  // conditional statements with correct logical operators >>
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "its a draw!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "you lost!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "you win!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lose!";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "you win!";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "you lose!";
  }
  resultDisplay.innerHTML = result;
}

/*const slider = document.createElement("input");
slider.type = "range";
slider.max = 10;
slider.value = 0;
document.body.appendChild(slider);

const div = document.createElement("div");
document.body.appendChild(div);

slider.oninput = addStars;

function addStars() {
  div.innerText = "";
  for (let i = 0; i < this.value; i++) {
    div.append("");
  }
}*/
