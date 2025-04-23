'use strict';

const chuck_form = document.querySelector('#chuck_search');
chuck_form.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const query = document.querySelector('input[name=q]').value
  joke_fetcher(query)
});

async function joke_fetcher(search_word) {

  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${search_word}`);
    const jokelist = await response.json();
    for (const one of jokelist.result){
      const artic = document.createElement('article')
      const joketext = document.createElement('p')
      joketext.innerText=one.value
      artic.appendChild(joketext)
      document.querySelector('#target').appendChild(artic);
    }
  } catch (error) {
    console.log('fetching joke failed');
  }
}

