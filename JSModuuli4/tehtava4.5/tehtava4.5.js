'use strict';

async function joke_fetcher() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const joke = await response.json();
    console.log(joke.value);
  } catch (error) {
    console.log("fetching joke failed")
  }
}

joke_fetcher();
