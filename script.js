document.addEventListener("DOMContentLoaded", function () {
    // Dados de exemplo para produtos
    const products = [
        { name: "Celular X", price: "R$ 1500", image: "https://via.placeholder.com/150" },
        { name: "Notebook Y", price: "R$ 3500", image: "https://via.placeholder.com/150" }
    ];

    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const card = `<div class="col-md-4">
                        <div class="card">
                            <img src="${product.image}" class="card-img-top">
                            <div class="card-body">
                                <h5>${product.name}</h5>
                                <p>${product.price}</p>
                                <button class="btn btn-success">Comprar</button>
                            </div>
                        </div>
                      </div>`;
        productList.innerHTML += card;
    });

    // Dados de exemplo para usuários
    const users = [
        { name: "José da Silva", email: "jose@email.com", type: "Cliente" },
        { name: "Ana Souza", email: "ana@email.com", type: "Administrador" }
    ];

    const userList = document.getElementById("user-list");
    users.forEach(user => {
        const row = `<tr><td>${user.name}</td><td>${user.email}</td><td>${user.type}</td></tr>`;
        userList.innerHTML += row;
    });
});
