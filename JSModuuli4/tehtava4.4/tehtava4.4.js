'use strict';

const tv_form = document.querySelector('#tv_search');
tv_form.addEventListener('submit', async function(evt) {
  evt.preventDefault();

  document.querySelector('#results').innerHTML = '';

  const query = document.querySelector('input[name=q]').value;
  try {
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query}`);
    const jsondata = await response.json();
    for (const tvshow of jsondata) {
      //name
      const header = document.createElement('h2');
      header.innerText = tvshow.show.name;
      //picture
      const image_element = document.createElement('img');
      if (tvshow.show.image == null) {
        image_element.src = 'https://placehold.co/210x295?text=Not%20Found';
        image_element.alt = tvshow.show.name;
      } else {
        image_element.src = tvshow.show.image?.medium;
        image_element.alt = tvshow.show.name;
      }
      //link
      const url_link = document.createElement('a');
      url_link.innerText = tvshow.show.url;
      url_link.href = tvshow.show.url;
      url_link.target = '_blank';
      //desc
      const description = document.createElement('div');
      description.innerHTML = tvshow.show.summary;

      //bundling and addind to the page
      const article = document.createElement('article');
      article.appendChild(header);
      article.appendChild(image_element);
      article.appendChild(url_link);
      article.appendChild(description);
      document.querySelector('#results').appendChild(article);
    }
  } catch (error) {
    console.log(error.message);
  }
});

