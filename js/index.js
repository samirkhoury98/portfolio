
const navLinks = document.querySelectorAll('.navul a');

[...navLinks].forEach(link => {
    link.addEventListener('click', (event) => {
      const activeNavLinks = document.querySelector('.navul .is-active');
      if(activeNavLinks) {
        activeNavLinks.classList.remove('is-active');
      }
      event.target.classList.add('is-active');
    })
})

particlesJS.load('particles-js', './asset/particles.json', function() {
  console.log('callback - particles.js config loaded');
});