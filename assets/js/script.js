// Exemple : effet fade-in sur les boutons
document.querySelectorAll(".social-btn").forEach((btn, index) => {
  btn.style.opacity = 0;
  btn.style.transform = "translateY(20px)";
  setTimeout(() => {
    btn.style.transition = "all 0.6s ease";
    btn.style.opacity = 1;
    btn.style.transform = "translateY(0)";
  }, 200 * index);
});
