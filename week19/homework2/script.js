const form = document.forms.form;
const title = form.elements.title;
const body = form.elements.text;
const btn = form.elements.button;



function createPost(title, body) {
   
  // Формируем данные для POST-запроса
  const data = {
    title: title.value,
    body: body.value
  };
  console.log(data);

  // Делаем POST-запрос по адресу https://jsonplaceholder.typicode.com/posts
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(post => {
    // Добавляем созданный пост в DOM
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
    form.appendChild(postElement);
    // Очищаем значения инпутов
    title.value = '';
    body.value = '';
  })
  .catch(error => {
    document.querySelector('.error').textContent = `Error creating post:  ${error}`;
  });
}

btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    createPost(title, body);
  });