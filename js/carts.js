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
  document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dummyjson.com/carts")
    .then(res => res.json())
    .then(data => {
      const tbody = document.getElementById("carts-body");
      data.carts.forEach(cart => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${cart.id}</td>
          <td>${cart.userId}</td>
          <td>${cart.totalProducts}</td>
          <td><button class="btn btn-info btn-sm" onclick="showCartDetail(${cart.id})">Ver</button></td>
        `;
        tbody.appendChild(row);
      });
    });
});

function showCartDetail(id) {
  fetch("https://dummyjson.com/carts/${id}")
    .then(res => res.json())
    .then(cart => {
      let items = cart.products.map(p => <li>${p.title} x${p.quantity} - $${p.price}</li>).join("");
      document.getElementById("modal-title").textContent = "Carrito #${cart.id}";
      document.getElementById("modal-body").innerHTML = `
        <ul>${items}</ul>
        <p><strong>Total:</strong> $${cart.total}</p>
      `;
      new bootstrap.Modal(document.getElementById("detailModal")).show();
    });
}