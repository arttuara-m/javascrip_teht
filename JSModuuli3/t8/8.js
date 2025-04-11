function calculate() {
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);

  let todo = document.querySelector('#operation').value;
  let result = document.querySelector('#result')

  if  (todo === "add") {
    result.innerText = num1 + num2
  }
  else if (todo === "sub") {
    result.innerText = num1 - num2
  }
  else if (todo === "multi") {
    result.innerText = num1 * num2
  }
  else {
    result.innerText = num1 / num2
  }
}

const trigger = document.querySelector('#start');
trigger.addEventListener('click', calculate);