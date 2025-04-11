
const form =document.getElementById("source")
const fname = document.querySelector('input[name=firstname]');
const lname = document.querySelector('input[name=lastname]');
const printspace = document.getElementById("target")

form.addEventListener('submit', function(evt) {
    evt.preventDefault();

    printspace.innerText = `Your name is ${fname.value} ${lname.value}`;
});