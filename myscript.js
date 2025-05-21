
// product of array
const products = [
    { id: 1, name: "IPhone 16 pro max", price: 100000 },
    { id: 2, name: "Samsung S24", price: 90000 },
    { id: 3, name: "Nokia 3306", price: 2000 }
];

// to remember produncts in cart
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}


function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function updateCartCount() {
    const countP = document.getElementById("cart-count");
    if (countP) {
        const cart = getCart();
        countP.textContent = cart.length;
    }
}

function addToCart(productId) {
    const cart = getCart();
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        saveCart(cart);
        updateCartCount();
        alert(`${product.name} added to cart!`);y
    }
}



function renderProducts() {
    const container = document.getElementById("product-container"); 
    if (!container) return;

    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <h2>${p.name}</h2>
            <p>Price: ₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to cart</button>
        `;
        container.appendChild(card);
    });
}

function addToCart(id){
    const product = products.find(p=>p.id===id);
    const cart = getCart();
    cart.push(product);
    saveCart(cart);
    updateCartCount();
    alert(`${product.name} added in cart successfully!!! `)

}
function renderCart(){

    const container = document.getElementById('cart-container');
    const totalP = document.getElementById('total');

    if(!container || !totalP) return;

    const cart = getCart();
    container.innerHTML="";
    let tp = 0;
    cart.forEach((p,index)=>{
        tp = tp + p.price;
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
        <h2>${p.name}</h2>
        <p>Price: ₹${p.price}</p>
        <button onclick="removeFromCart(${index})">  Remove  </button>
        `;
        container.appendChild(card);

    })
    totalP.innerHTML =`total Price=${tp}`;
}
function removeFromCart(index)
{
    const cart = getCart();
    cart.splice(index,1); 
    saveCart(cart);
    renderCart();
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts(),
    renderCart(),
    updateCartCount()
    // updateCartCount(); // initialize the cart count
});
