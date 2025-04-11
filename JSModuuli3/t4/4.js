'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (const person of students) {
  const identy = document.createElement("option");
  identy.innerText = person.name
  identy.value = person.id
  document.querySelector('#target').appendChild(identy);
}

