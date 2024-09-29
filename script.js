// script.js
// Datos de ejemplo de productos
const products = [
    {
        id: 1,
        name: "Producto 1",
        price: "€20.00",
        image: "https://via.placeholder.com/300x200",
        description: "Descripción del producto 1"
    },
    {
        id: 2,
        name: "Producto 2",
        price: "€30.00",
        image: "https://via.placeholder.com/300x200",
        description: "Descripción del producto 2"
    },
    {
        id: 3,
        name: "Producto 3",
        price: "€25.00",
        image: "https://via.placeholder.com/300x200",
        description: "Descripción del producto 3"
    },
    // Añade más productos según lo necesites
];

// Mostrar la pantalla de bienvenida y luego cargar el contenido principal
document.addEventListener("DOMContentLoaded", () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    // Mostrar el contenido después de 3 segundos
    setTimeout(() => {
        welcomeScreen.classList.add('hidden'); // Añadir la clase para ocultar la pantalla de bienvenida
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            header.style.display = 'block';
            main.style.display = 'block';
            footer.style.display = 'block';
        }, 1000); // Espera a que termine la transición de desvanecimiento
    }, 3000); // 3000 ms = 3 segundos de espera antes de ocultar la pantalla de bienvenida
});



// Función para mostrar los productos
function displayProducts() {
    const productContainer = document.getElementById("product-container");
    
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img class="product-image" src="${product.image}" alt="${product.name}">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">${product.price}</p>
        `;

        productCard.addEventListener('click', () => showProductDetail(product));

        productContainer.appendChild(productCard);
    });
}

// Función para mostrar los detalles del producto
function showProductDetail(product) {
    document.getElementById('product-detail').style.display = 'block';
    document.getElementById('detail-image').src = product.image;
    document.getElementById('detail-title').textContent = product.name;
    document.getElementById('detail-description').textContent = product.description;
    document.getElementById('detail-price').textContent = product.price;
    
    // Crear el enlace de WhatsApp
    const whatsappNumber = "123456789"; // Reemplaza con tu número de WhatsApp
    const whatsappLink = document.getElementById('whatsapp-link');

    document.getElementById('quantity').value = 1; // Restablecer la cantidad a 1
    whatsappLink.onclick = () => {
        const quantity = document.getElementById('quantity').value;
        const whatsappMessage = `Hola, estoy interesado en el producto "${product.name}" con precio ${product.price}. Deseo comprar ${quantity} unidades.`;
        whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    };
}

// Función para cerrar el detalle del producto
function closeDetail() {
    document.getElementById('product-detail').style.display = 'none';
}

// Llamar a la función para mostrar los productos al cargar la página
document.addEventListener("DOMContentLoaded", displayProducts);
