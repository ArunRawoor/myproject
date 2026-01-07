const pizzaList = document.getElementById('pizza-list');

// Check if user is logged in
if (!localStorage.getItem('novapizza_user')) {
  window.location.href = 'index.html';
  throw new Error('Please login first');
}

function renderPizzas() {
  pizzaList.innerHTML = '';
  window.pizzas.forEach(pizza => {
    const card = document.createElement('div');
    card.className = 'pizza-card';
    card.innerHTML = `
      <img src="${pizza.img}" alt="${pizza.name}" onerror="this.src='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop'">
      <div class="pizza-info">
        <div class="pizza-header">
          <div class="pizza-name">${pizza.name}</div>
          <span class="pizza-tag ${pizza.veg ? 'veg' : 'nonveg'}">${pizza.veg ? 'VEG' : 'NON-VEG'}</span>
        </div>
        <div class="rating">${'★'.repeat(Math.floor(pizza.rating))}${'☆'.repeat(5-Math.floor(pizza.rating))} (${pizza.rating})</div>
        <p class="pizza-desc">${pizza.desc}</p>
        <div class="pizza-footer">
          <div class="pizza-price">₹${pizza.price}</div>
          <div>
            <button class="btn-small btn-wishlist" data-id="${pizza.id}">♡</button>
            <button class="btn-small btn-add" data-id="${pizza.id}">Add</button>
          </div>
        </div>
      </div>
    `;
    pizzaList.appendChild(card);
  });
}

pizzaList.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-add')) {
    const id = parseInt(e.target.dataset.id);
    const pizza = window.pizzas.find(p => p.id === id);
    let cart = JSON.parse(localStorage.getItem('novapizza_cart') || '[]');
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({...pizza, qty: 1});
    }
    localStorage.setItem('novapizza_cart', JSON.stringify(cart));
    document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    e.target.textContent = 'Added ✓';
    setTimeout(() => e.target.textContent = 'Add', 1000);
  }
});

renderPizzas();
document.getElementById('cart-count').textContent = JSON.parse(localStorage.getItem('novapizza_cart') || '[]').reduce((sum, item) => sum + item.qty, 0);
