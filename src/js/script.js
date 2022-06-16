'use strict'

const ul = document.querySelector('.post-list')
const apiBase = 'https://jsonplaceholder.typicode.com/'

function getPost() {
  fetch(`${apiBase}posts`)
    .then((response) => response.json())
    .then((posts) => {
      for (let post in posts) {
        ul.innerHTML += `
        <li class='user'>
          <span>ID: ${posts[post].id} | UserID: ${posts[post].userId}</span>
          <h2>${posts[post].title}</h2>
          <p>${posts[post].body}</p>
        </li>
        <hr>
      `
      }
    })
}

function clearList() {
  ul.innerHTML = ``
}

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({ name: 'Sooronbai' }),
//   headers: {
//     'Content-type': 'application/json',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json))
