const fetchDataButton = document.getElementById('fetchData');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    const loaderDiv = document.getElementById('loader');

    fetchDataButton.addEventListener('click', () => {
      const entity = document.getElementById('entity').value;
      const id = document.getElementById('id').value;
      fetchData(entity, id)
        .then(data => {
            console.log(data);
            if(entity==='films'){
                resultDiv.textContent = JSON.stringify(data.title);  
            }else{
          resultDiv.textContent = JSON.stringify(data.name);
            }
          errorDiv.textContent = '';
        })
        .catch(error => {
          resultDiv.textContent = '';
          errorDiv.textContent = `Ошибка: ${error.message}`;
        })
        .finally(() => {
          loaderDiv.style.display = 'none';
        });

      loaderDiv.style.display = 'block';
    });

    async function fetchData(entity, id) {
      const response = await fetch(`https://swapi.py4e.com/api/${entity}/${id}`);
      console.log(response);
      if (!response.ok) {
        throw new Error(`Сервер не доступен. Код ошибки:  ${response.status}`);
      }
      return await response.json();
    }