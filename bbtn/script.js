const btn = document.getElementById("submitBtn");

// Move button when user tries to hover
btn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);

    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
});

// If user somehow clicks it 😄
btn.addEventListener("click", () => {
    alert("Login successful... Just kidding 😂");
});
