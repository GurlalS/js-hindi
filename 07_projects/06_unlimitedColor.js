// continuous bg color change at every second when we press start and it should stop when we press stop

// generate a random color

const randomColor = function () {
  let hex = "0123456789ABCDEF";
  // hex color is #FFFFFF, 6 aplabets
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());
// so first generate a random number
//let randomNumber = Math.floor(Math.random * 16) // 0-16 number

let intervalId;
//function startChangingColor() {   // same way
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
