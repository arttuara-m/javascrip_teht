function calculate() {
  let inputed = document.getElementById("calculation").value
  let result = document.getElementById('result')

  if (inputed.includes("+")) {
    let calclist = inputed.split("+")
    result.innerText = parseInt(calclist[0]) + parseInt(calclist[1])
  }
  else if (inputed.includes("-")) {
    let calclist = inputed.split("-")
    result.innerText = parseInt(calclist[0]) - parseInt(calclist[1])
  }
  else if (inputed.includes("*")) {
    let calclist = inputed.split("*")
    result.innerText = parseInt(calclist[0]) * parseInt(calclist[1])
  }
  else if (inputed.includes("/")) {
    let calclist = inputed.split("/")
    result.innerText = parseInt(calclist[0]) / parseInt(calclist[1])
  }
}

const trigger = document.querySelector('#start');
trigger.addEventListener('click', calculate);