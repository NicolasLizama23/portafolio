// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const typer = document.getElementById('typer');
  if (!typer) return;

  function replayTyping() {
    typer.classList.remove('typing');
    // fuerza reflow para reiniciar animación
    void typer.offsetWidth;
    typer.classList.add('typing');
  }

  // animación inicial
  replayTyping();
  // repetir cada 5 segundos
  setInterval(replayTyping, 5000);
});

const skillItems = document.querySelectorAll('.skill-item');
const obsSkills = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

skillItems.forEach(item => obsSkills.observe(item));