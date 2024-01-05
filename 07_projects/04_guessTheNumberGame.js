const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let randomNumber = parseInt(Math.random() * 100 + 1);
let p = document.createElement("p");

let playGame = true;
let prevGuesses = [];
let totalGuesses = 1;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let inputValue = parseInt(userInput.value);
    validate(inputValue);
  });
}

function validate(guess) {
  if (guess < 0 || isNaN(guess) || guess > 100) {
    alert(`Enter a valid guess!`);
    //displayMessage(`Enter a valid guess!`);
  } else {
    prevGuesses.push(guess);
    if (totalGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over.  Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }

  // } else if (totalGuesses > 10) {
  //   displayMessage(`Game Over.  Random Number was ${randomNumber}`);
  //   endGame();
  // } else {
  //   //prevGuesses.push(guess);
  //   displayGuess(guess);
  //   checkGuess(guess);
  // }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congrats, Your guess is right`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  } else {
    displayMessage(`Numbe is too low`);
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  totalGuesses++;
  remaining.innerHTML = `${11 - totalGuesses}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}<\h2>`;
  //document.appendChild(p)
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game<\h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGame = document.querySelector("#newGame");
  newGame.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuesses = [];
    totalGuesses = 1;
    guessSlot.innerHTML = "";
    lowOrHi.innerHTML = "";
    remaining.innerHTML = `${11 - totalGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
  });
}
