
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

particlesJS.load('particles-forms-js', './asset/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)

    document.querySelector('.bbs--first').addEventListener('click', (event) => {
     event.target.classList.remove('show');
      document.querySelector('.bbs--second').classList.add('show');
    });
    document.querySelector('.bbs--second').addEventListener('click', (event) => {
      event.target.classList.remove('show');
       document.querySelector('.bbs--first').classList.add('show');
     });

     document.querySelector('.mobile-menu').addEventListener('click', (event) => {
      console.log('click');
      if(document.querySelector('.nav').classList.contains('is-active')) {
        document.querySelector('.nav').classList.remove('is-active');
        document.querySelector('.mobile-menu').classList.remove('is-active');

      }
      else {
        document.querySelector('.nav').classList.add('is-active');
        document.querySelector('.mobile-menu').classList.add('is-active');
      }
   });
