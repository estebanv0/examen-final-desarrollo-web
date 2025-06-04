const token = localStorage.getItem('auth_token');
fetch('https://api.escuelajs.co/api/v1/categories', {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(res => res.json())
  .then(categories => {
    const container = document.getElementById('categoryList');
    container.innerHTML = '';
    categories.forEach(cat => {
      const card = `
        <div class="card m-2" style="width: 18rem;">
          <img src="${cat.image}" class="card-img-top" alt="${cat.name}">
          <div class="card-body">
            <h5 class="card-title">${cat.name}</h5>
          </div>
        </div>`;
      container.innerHTML += card;
    });
  });