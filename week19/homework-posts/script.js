// Нужно получить с сервера список постов и отобразить его на странице.

// Создайте функции:

// получает на вход объект поста и возвращает строку HTML-разметки;
// добавляет полученную разметку в полученный контейнер;
// делает GET запрос по адресу https://jsonplaceholder.typicode.com/posts и
//  добавит их на страницу (для этого примените метод forEach и функции созданные ранее).
let container = document.getElementById('container')

// 1. Функция, которая принимает объект поста и возвращает строку HTML-разметки
function createPostHtml(post) {
    return `
      <div class="post">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `;
  }
  
  // 2. Функция, которая добавляет HTML-разметку в контейнер
  function addPostToContainer(postHtml, container) {
    container.innerHTML += postHtml;
  }
  
  //3.  Функция, которая делает GET-запрос на сервер и добавляет посты на страницу
  function getPosts(container) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        posts.forEach(post => {
          const postHtml = createPostHtml(post);
          addPostToContainer(postHtml, container);
        });
      })
      .catch(error => {
        console.error('Ошибка при загрузке постов:', error);
      });
  }
  
getPosts(container);

