const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginSection = document.getElementById('login-section');
const registerSection = document.getElementById('register-section');

document.getElementById('show-register').addEventListener('click', (e) => {
  e.preventDefault();
  loginSection.classList.remove('active');
  registerSection.classList.add('active');
});

document.getElementById('show-login').addEventListener('click', (e) => {
  e.preventDefault();
  registerSection.classList.remove('active');
  loginSection.classList.add('active');
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const phone = document.getElementById('login-phone').value;
  const password = document.getElementById('login-password').value;
  
  if (phone && password.length >= 4) {
    localStorage.setItem('novapizza_user', JSON.stringify({phone, name: 'Customer'}));
    window.location.href = 'menu.html';
  } else {
    alert('Please enter valid details');
  }
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('reg-name').value;
  const phone = document.getElementById('reg-phone').value;
  const password = document.getElementById('reg-password').value;
  
  if (name && phone && password.length >= 4) {
    localStorage.setItem('novapizza_user', JSON.stringify({phone, name}));
    window.location.href = 'menu.html';
  } else {
    alert('Please fill all fields');
  }
});
