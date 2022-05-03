let sectionSubset = document.querySelector('.section-subset');
let sectionSubsetHeight = sectionSubset.clientHeight;

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
  let shineFullStack = document.querySelector(".shine-full-stack");
  let shineMusic = document.querySelector(".shine-music");

  //Reset count to start the begining of the character.
  i = 0;

  // Remove previous content to start new content.
  document.getElementsByClassName('typewrite')[0].innerHTML = '';
  content.style.pointerEvents = 'none';
  shineFullStack.classList.remove('shine');
  shineMusic.classList.remove('shine');

  if (content.classList.contains('first')) {
    shineMusic.classList.add('shine');
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
    shineFullStack.classList.add('shine');
    setTimeout(typeWriter, 50, 'SAMIR KHOURY');
  }
}

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
  let modal = document.getElementById("myModal");

  // Get the button that opens the modal
  let btn = document.querySelectorAll(".project-info-link");

  // Get the <span> element that closes the modal
  let close = document.getElementsByClassName("close")[0];

  let contentIframe = document.querySelector(".modal-content-iframe");


  // When the user clicks on the button, open the modal
  [...btn].forEach(btn => {
    btn.onclick = (evt) => {
      const url = btn.dataset.url;
      const iframeType = btn.dataset.type;

      if (iframeType === "apple") {
        contentIframe.innerHTML = `<iframe class="apple-iframe" allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="${url}"></iframe>`;
      } else if (iframeType === "spotify") {
        contentIframe.innerHTML = `<iframe style="border-radius:12px" src="${url}}" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
      } else {
        contentIframe.innerHTML = `<div class="video-container"> <iframe width="560" height="315" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>`
      }
      modal.style.display = "block";
    }
  });


  // When the user clicks on <span> (x), close the modal
  close.onclick = () => {
    modal.style.display = "none";
    contentIframe.innerHTML = "";

  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      contentIframe.innerHTML = "";

    }
  }
}
const toggleTheme = () => {
  // Select the button
  const btnToggle = document.querySelector('.btn-toggle');

  // Listen for a click on the button
  btnToggle.addEventListener('click', function () {
    // Then toggle (add/remove) the .dark-theme class to the body
    document.body.classList.toggle('is-dark');
    if (document.body.classList.contains('is-dark')) {
      btnToggle.innerHTML = 'Enter the light realm';
    } else {
      btnToggle.innerHTML = 'Enter the dark realm';
    }
  })
}

// check if element is in view
const inView = () => {
  // get window height
  let windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  let scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  let scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  let elementPosition = sectionSubset.getBoundingClientRect().top + scrollY + (sectionSubsetHeight / 2);
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

// animate element when it is in view
const animate = () => {
  // is element in view?

  if (inView()) {
    // element is in view, add class to element
    sectionSubset.classList.add('animate');
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
  toggleTheme();
  document.addEventListener('scroll', animate);
});


