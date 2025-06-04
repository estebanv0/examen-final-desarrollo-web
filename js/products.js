document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
      const tbody = document.getElementById("products-body");
      data.products.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${product.id}</td>
          <td>${product.title}</td>
          <td>${product.brand}</td>
          <td><button class="btn btn-info btn-sm" onclick="showProductDetail(${product.id})">Ver</button></td>
        `;
        tbody.appendChild(row);
      });
    });
});

function showProductDetail(id) {
  fetch("https://dummyjson.com/products/${id}")
    .then(res => res.json())
    .then(product => {
      document.getElementById("modal-title").textContent = product.title;
      document.getElementById("modal-body").innerHTML = `
        <p><strong>Descripción:</strong> ${product.description}</p>
        <p><strong>Precio:</strong> $${product.price}</p>
        <img src="${product.thumbnail}" class="img-fluid mt-2"/>
      `;
      new bootstrap.Modal(document.getElementById("detailModal")).show();
    });
}const token = localStorage.getItem('auth_token');
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
  