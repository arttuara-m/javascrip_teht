'use strict';
const names = ['John', 'Paul', 'Jones'];

let namelist = '';
for (name of names) {
  namelist += '<li>' + name + '</li>';

}
document.querySelector('#target').innerHTML = namelist;