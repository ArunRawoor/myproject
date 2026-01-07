// FIXED: All images from Unsplash with reliable CDN links
const pizzas = [
  { id: 1,  name: "Margherita Classic", price: 199, veg: true,  rating: 4.2, desc: "Cheesy tomato base with basil.", img: "https://images.unsplash.com/photo-1548365328-9daaf8b5412b?w=400&h=250&fit=crop" },
  { id: 2,  name: "Farmhouse Veggie",    price: 279, veg: true,  rating: 4.5, desc: "Capsicum, onion, tomato & corn.", img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=250&fit=crop" },
  { id: 3,  name: "Paneer Tandoori",     price: 299, veg: true,  rating: 4.6, desc: "Spicy paneer with onion.", img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=250&fit=crop" },
  { id: 4,  name: "Veg Extravaganza",    price: 329, veg: true,  rating: 4.3, desc: "Olives, jalapenos, corn & paneer.", img: "https://images.unsplash.com/photo-1548365328-9cee88c9cd07?w=400&h=250&fit=crop" },
  { id: 5,  name: "Cheese Burst",        price: 259, veg: true,  rating: 4.4, desc: "Extra cheese with creamy base.", img: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=400&h=250&fit=crop" },
  { id: 6,  name: "Pepper BBQ Chicken",  price: 329, veg: false, rating: 4.5, desc: "Smoky pepper chicken.", img: "https://images.unsplash.com/photo-1548365328-9bdbb06c9f23?w=400&h=250&fit=crop" },
  { id: 7,  name: "Chicken Sausage",     price: 299, veg: false, rating: 4.1, desc: "Chicken sausage with cheese.", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=250&fit=crop" },
  { id: 8,  name: "Chicken Tikka",       price: 349, veg: false, rating: 4.6, desc: "Spicy chicken tikka.", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=250&fit=crop" },
  { id: 9,  name: "BBQ Chicken Loaded",  price: 369, veg: false, rating: 4.7, desc: "Barbecue chicken & onion.", img: "https://images.unsplash.com/photo-1670106781545-2a1a3d5c7ea9?w=400&h=250&fit=crop" },
  { id: 10, name: "Schezwan Veg",        price: 289, veg: true,  rating: 4.0, desc: "Schezwan sauce with veggies.", img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=250&fit=crop" },
  { id: 11, name: "Peri Peri Chicken",   price: 359, veg: false, rating: 4.3, desc: "Peri peri chicken & veggies.", img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=400&h=250&fit=crop" },
  { id: 12, name: "Four Cheese",         price: 349, veg: true,  rating: 4.8, desc: "4 types of cheese overload.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop" },
  { id: 13, name: "Mexican Veggie",      price: 309, veg: true,  rating: 4.1, desc: "Jalapenos & spicy sauce.", img: "https://images.unsplash.com/photo-1566843972142-a7fcb70de35e?w=400&h=250&fit=crop" },
  { id: 14, name: "Keema Do Pyaza",      price: 339, veg: false, rating: 4.2, desc: "Minced meat with double onion.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop" },
  { id: 15, name: "Paneer Makhani",      price: 329, veg: true,  rating: 4.4, desc: "Rich makhani sauce with paneer.", img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=250&fit=crop" },
  { id: 16, name: "Corn Cheese",         price: 229, veg: true,  rating: 4.0, desc: "Sweet corn with extra cheese.", img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=250&fit=crop" },
  { id: 17, name: "Mushroom Supreme",    price: 289, veg: true,  rating: 4.1, desc: "Mushrooms with herbs.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop" },
  { id: 18, name: "Double Chicken",      price: 379, veg: false, rating: 4.6, desc: "Two types of chicken.", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=250&fit=crop" },
  { id: 19, name: "Veggie Volcano",      price: 319, veg: true,  rating: 4.2, desc: "Extra spicy jalapenos.", img: "https://images.unsplash.com/photo-1566843972142-a7fcb70de35e?w=400&h=250&fit=crop" },
  { id: 20, name: "Chicken Italiano",    price: 359, veg: false, rating: 4.5, desc: "Herbed chicken with olives.", img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=400&h=250&fit=crop" },
  { id: 21, name: "Veggie Combo",        price: 249, veg: true,  rating: 4.1, desc: "Classic veggie toppings.", img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=250&fit=crop" },
  { id: 22, name: "Pepperoni",           price: 389, veg: false, rating: 4.7, desc: "Smoked pepperoni & cheese.", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=250&fit=crop" },
  { id: 23, name: "Garlic Cheese",       price: 239, veg: true,  rating: 4.0, desc: "Garlic flavored cheese.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop" },
  { id: 24, name: "BBQ Paneer",          price: 339, veg: true,  rating: 4.3, desc: "Barbecue paneer delight.", img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=250&fit=crop" },
  { id: 25, name: "Tandoori Chicken",    price: 369, veg: false, rating: 4.5, desc: "Tandoori chicken treat.", img: "https://images.unsplash.com/photo-1670106781545-2a1a3d5c7ea9?w=400&h=250&fit=crop" }
];

// STATE
let cart = [];
let wishlist = [];
let currentUser = null;
let orderDetails = {};

// DOM ELEMENTS
const pizzaList = document.getElementById("pizza-list");
const cartCountSpan = document.getElementById("cart-count");
const cartItemsContainer = document.getElementById("cart-items");
const cartItemsCount = document.getElementById("cart-items-count");
const cartTotalSpan = document.getElementById("cart-total");
const cartSidebar = document.getElementById("cart-sidebar");
const cartBackdrop = document.getElementById("cart-backdrop");
const cartToggle = document.getElementById("cart-toggle");
const checkoutBtn = document.getElementById("checkout-btn");
const clearBtn = document.getElementById("clear-btn");
const summaryItems = document.getElementById("summary-items");
const summaryTotal = document.getElementById("summary-total");
const loginModal = document.getElementById("login-modal");
const paymentModal = document.getElementById("payment-modal");
const loginBtn = document.getElementById("login-btn");
const userInfo = document.getElementById("user-info");
const userNameSpan = document.getElementById("user-name");

// LOGIN/REGISTER
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const addressForm = document.getElementById("address-form");
const paymentOptions = document.querySelectorAll(".payment-option");

// Initialize
renderPizzas();

// LOGIN FUNCTIONS
function showLogin() {
  registerForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
}

function showRegister() {
  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
}

// Render pizzas
function renderPizzas() {
  pizzaList.innerHTML = "";
  pizzas.forEach(pizza => {
    const card = document.createElement("div");
    card.className = "pizza-card";
    card.innerHTML = `
      <img src="${pizza.img}" alt="${pizza.name}" onerror="this.src='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop'" />
      <div class="pizza-info">
        <div class="pizza-header">
          <span class="pizza-name">${pizza.name}</span>
          <span class="pizza-tag">${pizza.veg ? "VEG" : "NON-VEG"}</span>
        </div>
        <div class="rating">
          ${"★".repeat(Math.floor(pizza.rating))}${"☆".repeat(5 - Math.floor(pizza.rating))}
          <span style="color:#777; font-size:0.8rem;"> (${pizza.rating.toFixed(1)})</span>
        </div>
        <p class="pizza-desc">${pizza.desc}</p>
        <div class="pizza-footer">
          <span class="pizza-price">₹${pizza.price}</span>
          <div>
            <button class="wishlist-btn" data-id="${pizza.id}">♡ Wish</button>
            <button class="add-btn" data-id="${pizza.id}">Add</button>
          </div>
        </div>
      </div>
    `;
    pizzaList.appendChild(card);
  });
}

// PIZZA INTERACTIONS
pizzaList.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-btn")) {
    const id = parseInt(e.target.getAttribute("data-id"));
    const pizza = pizzas.find(p => p.id === id);
    addToCart(pizza);
  }
  if (e.target.classList.contains("wishlist-btn")) {
    const id = parseInt(e.target.getAttribute("data-id"));
    toggleWishlist(id, e.target);
  }
});

function addToCart(pizza) {
  const existing = cart.find(item => item.id === pizza.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...pizza, qty: 1 });
  }
  updateCartUI();
}

function removeFromCart(id) {
  const index = cart.findIndex(item => item.id === id);
  if (index !== -1) {
    if (cart[index].qty > 1) {
      cart[index].qty -= 1;
    } else {
      cart.splice(index, 1);
    }
  }
  updateCartUI();
}

function toggleWishlist(id, btn) {
  const index = wishlist.indexOf(id);
  if (index === -1) {
    wishlist.push(id);
    btn.classList.add("added");
    btn.textContent = "♥ Saved";
  } else {
    wishlist.splice(index, 1);
    btn.classList.remove("added");
    btn.textContent = "♡ Wish";
  }
}

function updateCartUI() {
  cartItemsContainer.innerHTML = "";
  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach(item => {
    totalItems += item.qty;
    totalPrice += item.price * item.qty;
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <span>${item.name} x ${item.qty}</span>
      <span>₹${item.price * item.qty}</span>
      <button class="remove-btn" data-id="${item.id}">−</button>
    `;
    cartItemsContainer.appendChild(row);
  });

  cartCountSpan.textContent = totalItems;
  cartItemsCount.textContent = totalItems;
  cartTotalSpan.textContent = totalPrice;
  summaryItems.textContent = totalItems;
  summaryTotal.textContent = totalPrice;
}

// CART CONTROLS
cartItemsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const id = parseInt(e.target.getAttribute("data-id"));
    removeFromCart(id);
  }
});

function openCart() {
  cartSidebar.classList.add("open");
  cartBackdrop.classList.add("show");
}
function closeCart() {
  cartSidebar.classList.remove("open");
  cartBackdrop.classList.remove("show");
}

cartToggle.addEventListener("click", openCart);
cartBackdrop.addEventListener("click", closeCart);
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  if (!currentUser) {
    alert("Please login first!");
    showLoginModal();
    return;
  }
  closeCart();
  location.hash = "#checkout";
});
clearBtn.addEventListener("click", () => {
  cart = [];
  updateCartUI();
});

// LOGIN MODAL
function showLoginModal() {
  loginModal.classList.add("show");
}
function hideLoginModal() {
  loginModal.classList.remove("show");
}

loginBtn.addEventListener("click", showLoginModal);
document.getElementById("close-login").addEventListener("click", hideLoginModal);

// LOGIN/REGISTER HANDLERS
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const phone = document.getElementById("login-phone").value;
  const password = document.getElementById("login-password").value;
  
  // Simple demo login (in real app, check database)
  if (phone && password.length >= 4) {
    currentUser = { phone, name: "Customer" };
    localStorage.setItem("novapizza_user", JSON.stringify(currentUser));
    updateUserUI();
    hideLoginModal();
    loginForm.reset();
  } else {
    alert("Please enter valid details");
  }
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("reg-name").value;
  const phone = document.getElementById("reg-phone").value;
  const password = document.getElementById("reg-password").value;
  
  if (name && phone && password.length >= 4) {
    currentUser = { phone, name };
    localStorage.setItem("novapizza_user", JSON.stringify(currentUser));
    updateUserUI();
    hideLoginModal();
    registerForm.reset();
    showLogin();
  } else {
    alert("Please fill all fields properly");
  }
});

document.getElementById("show-register").addEventListener("click", (e) => {
  e.preventDefault();
  showRegister();
});
document.getElementById("show-login").addEventListener("click", (e) => {
  e.preventDefault();
  showLogin();
});

// Check saved user on load
const savedUser = localStorage.getItem("novapizza_user");
if (savedUser) {
  currentUser = JSON.parse(savedUser);
  updateUserUI();
}

function updateUserUI() {
  if (currentUser) {
    loginBtn.classList.add("hidden");
    userInfo.classList.remove("hidden");
    userNameSpan.textContent = currentUser.name;
  }
}

// CHECKOUT -> PAYMENT
addressForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  
  orderDetails = {
    fullName: document.getElementById("fullName").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("addressLine").value,
    city: document.getElementById("city").value,
    pincode: document.getElementById("pincode").value,
    instructions: document.getElementById("instructions").value
  };
  
  paymentModal.classList.add("show");
});

// PAYMENT
document.getElementById("close-payment").addEventListener("click", () => {
  paymentModal.classList.remove("show");
});

paymentOptions.forEach(option => {
  option.addEventListener("click", () => {
    paymentOptions.forEach(opt => opt.classList.remove("active"));
    option.classList.add("active");
  });
});

document.getElementById("confirm-order").addEventListener("click", () => {
  const paymentMethod = document.querySelector("input[name='payment']:checked").value;
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  
  alert(
    `✅ Order Confirmed!\n\n` +
    `Customer: ${currentUser.name}\n` +
    `Phone: ${orderDetails.phone}\n` +
    `Address: ${orderDetails.address}, ${orderDetails.city} - ${orderDetails.pincode}\n` +
    `Payment: ${paymentMethod.toUpperCase()}\n` +
    `Items: ${totalItems} | Total: ₹${totalPrice}\n\n` +
    `Your order will be prepared shortly! 🍕\n(Demo completed)`
  );
  
  // Reset everything
  cart = [];
  updateCartUI();
  addressForm.reset();
  paymentModal.classList.remove("show");
});
