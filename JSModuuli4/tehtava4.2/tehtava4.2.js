'use strict';

const tv_form = document.querySelector('#tv_search');
tv_form.addEventListener('submit', async function(evt) {
  evt.preventDefault();

  const query = document.querySelector('input[name=q]').value;
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const jsondata = await response.json();
    for (const show of jsondata) {
      console.log(show.show)
    }
  } catch (error) {
    console.log(error.message);
  }
});

