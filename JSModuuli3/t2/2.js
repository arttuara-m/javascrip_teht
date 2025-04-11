'use strict';

const item1 = document.createElement("li");
item1.innerText = "First item";
document.querySelector('#target').appendChild(item1);

const item2 = document.createElement("li");
item2.innerText = "Second item";
document.querySelector('#target').appendChild(item2);

const item3 = document.createElement("li");
item3.innerText = "Third item";
document.querySelector('#target').appendChild(item3);

item2.setAttribute('class', 'my-item')