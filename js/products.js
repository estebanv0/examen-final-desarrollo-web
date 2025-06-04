const token = localStorage.getItem('auth_token');
fetch('https://api.escuelajs.co/api/v1/products', {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('productList');
    container.innerHTML = '';
    products.slice(0, 12).forEach(product => {
      const card = `
        <div class="card m-2" style="width: 18rem;">
          <img src="${product.images[0]}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text text-success">$${product.price}</p>
          </div>
        </div>`;
      container.innerHTML += card;
    });
  });
