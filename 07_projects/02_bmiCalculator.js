const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault(); //
  const height = parseInt(document.querySelector('#height').value);
  console.log(height);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  const message = document.querySelector('#message');
  let bmi;
  if (height < 0 || isNaN(height) || height === '') {
    result.innerHTML = `<span>Please enter a valid height ${height} </span>`;
  } else if (weight < 0 || isNaN(weight) || weight === '') {
    result.innerHTML = `<span>Please enter a valid weight ${weight} </span>`;
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = bmi;
  }
  if (bmi < 18.6) {
    message.innerHTML = `Eat more, you are under weight`;
  } else if (bmi > 24.9) {
    message.innerHTML = `Be careful while eating, you are overweight`;
  } else {
    message.innerHTML = `Congratulations! You are in normal range.`;
  }
});


// one div element also added in HTML for message