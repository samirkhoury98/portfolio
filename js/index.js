const navigation = () => {
  const navLinks = document.querySelectorAll('.navul a');

  [...navLinks].forEach(link => {
    link.addEventListener('click', (event) => {
      const activeNavLinks = document.querySelector('.navul .is-active');
      if (activeNavLinks) {
        activeNavLinks.classList.remove('is-active');

      }
      event.target.classList.add('is-active');
    })
  });
}

const particles = () => {
  particlesJS.load('particles-js', './asset/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });

  particlesJS.load('particles-forms-js', './asset/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });
}


const form = () => {
  let form = document.getElementById("my-form");
  async function handleSubmit(event) {
    event.preventDefault();
    let status = document.getElementById("my-form-status");
    let data = new FormData(event.target);
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
}

let i = 0;

const typeWriter = (txt) => {
  if (i < txt.length) {
    document.getElementsByClassName('typewrite')[0].innerHTML += txt.charAt(i);
    i++;
    if (i === txt.length) {
      document.querySelector('.content').style.pointerEvents = 'all';
    }
    setTimeout(typeWriter, 65, txt);
  }
}

const clickHeroTitle = (evt) => {
  evt.preventDefault();
  let content = document.querySelector('.content');

  //Reset count to start the begining of the character.
  i = 0;

  // Remove previous content to start new content.
  document.getElementsByClassName('typewrite')[0].innerHTML = '';
  content.style.pointerEvents = 'none';


  if (content.classList.contains('first')) {
    content.classList.remove('first');
    content.classList.add('second');
    setTimeout(typeWriter, 50, 'BIGBODYSAM');
  } else if (content.classList.contains('second')) {
    content.classList.remove('second');
    content.classList.add('third');
    setTimeout(typeWriter, 50, 'HAPPY YOU\'RE HERE');
  } else {
    content.classList.remove('third');
    content.classList.add('first');
    setTimeout(typeWriter, 50, 'SAMIR KHOURY');
  }
}


// Add this to the onload 


const mobileNav = () => {
  document.querySelector('.mobile-menu').addEventListener('click', (event) => {
    if (document.querySelector('.nav').classList.contains('is-active')) {
      document.querySelector('.nav').classList.remove('is-active');
      document.querySelector('.mobile-menu').classList.remove('is-active');

    }
    else {
      document.querySelector('.nav').classList.add('is-active');
      document.querySelector('.mobile-menu').classList.add('is-active');
    }
  });
}

const swiperMode = () => {
  const swiper = new Swiper('.swiper-discography', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    autoHeight: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      1000: {
        slidesPerView: 5,
        spaceBetween: 20,
      }
    }
  });
}
const swiperPortfolioMode = () => {
  let swiperPortfolio = new Swiper(".swiper-portfolio", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1000: {
        slidesPerView: 3,
        grid: {
          fill: 'row',
          rows: 2,
        },
      }
    }
  });
}

const modal = () => {

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.querySelectorAll(".project-info-link-apple");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  [...btn].forEach(btn => {
    btn.onclick = function (evt) {
      const url = btn.dataset.url;
      document.querySelector(".apple-iframe").src = url;
      modal.style.display = "block";
    }
  });


  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
    document.querySelector(".apple-iframe").src = "";

  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.querySelector(".apple-iframe").src = "";

    }
  }
}


/* On Load
**************************************************************/
window.addEventListener('load', function () {
  swiperMode();
  navigation();
  particles();
  form();
  mobileNav();
  swiperPortfolioMode();
  document.querySelector('.content').addEventListener('touchend', clickHeroTitle);
  document.querySelector('.content').addEventListener('click', clickHeroTitle);
  modal();
});


