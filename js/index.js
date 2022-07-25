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
  const btnToggle = document.querySelector('.logo');

  // Listen for a click on the button
  btnToggle.addEventListener('click', function () {
    // Then toggle (add/remove) the .dark-theme class to the body
    document.body.classList.toggle('is-dark');
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
const discographySmoke = () => {

  let width = window.innerWidth;
  let height = window.innerHeight;

  // create a new instance of a pixi stage
  let stage = new PIXI.Stage(0x0, true);

  // create a renderer instance
  let renderer = PIXI.autoDetectRenderer(width, height, {
    transparent: true
  });

  // add the renderer view element to the DOM
  document.querySelector(".discography").appendChild(renderer.view);

  // smoke shader
  let uniforms = {};
  uniforms.resolution = {
    type: '2f',
    value: {
      x: width,
      y: height
    }
  };
  uniforms.alpha = {
    type: '1f',
    value: 1.0
  };
  uniforms.shift = {
    type: '1f',
    value: 1.6
  };
  uniforms.time = {
    type: '1f',
    value: 0
  };
  uniforms.speed = {
    type: '2f',
    value: {
      x: 0.7,
      y: 0.4
    }
  };

  let fragmentSrc = [
    "precision mediump float;",
    "uniform vec2      resolution;",
    "uniform float     time;",
    "uniform float     alpha;",
    "uniform vec2      speed;",
    "uniform float     shift;",

    "float rand(vec2 n) {",
    "return fract(cos(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);",
    "}",

    "float noise(vec2 n) {",
    "const vec2 d = vec2(0.0, 1.0);",
    "vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));",
    "return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);",
    "}",

    "float fbm(vec2 n) {",
    "float total = 0.0, amplitude = 0.4;",
    "for (int i = 0; i < 4; i++) {",
    "total += noise(n) * amplitude;",
    "n += n;",
    "amplitude *= 0.6;",
    "}",
    "return total;",
    "}",

    "void main() {",

    "const vec3 c1 = vec3(240.0/255.0, 127.0/255.0, 19.0/255.0);",
    "const vec3 c2 = vec3(128.0/255.0, 9.0/255.0, 9.0/255.0);",
    "const vec3 c3 = vec3(0.0, 0.0, 0.0);",
    "const vec3 c4 = vec3(200.0/255.0, 200.0/255.0, 200.0/255.0);",
    "const vec3 c5 = vec3(0.6);",
    "const vec3 c6 = vec3(0.9);",

    "vec2 p = gl_FragCoord.xy * 10.0 / resolution.xx;",
    "float q = fbm(p - time * 0.1);",
    "vec2 r = vec2(fbm(p + q + time * speed.x - p.x - p.y), fbm(p + q - time * speed.y));",
    "vec3 c = mix(c1, c2, fbm(p + r)) + mix(c3, c4, r.x) - mix(c5, c6, r.y);",
    "float grad = gl_FragCoord.y / resolution.y;",
    "gl_FragColor = vec4(c * cos(shift * gl_FragCoord.y / resolution.y), 1.0);",
    "gl_FragColor.xyz *= 0.6-grad;",
    "float test = 0.6-grad;",
    "float testVal = 0.5;",
    "if(r.x > 0.5 || r.y > 0.5 || fbm(p + r) > 0.5 || test < 0.2 ){",
    "gl_FragColor.w = 0.2;",
    "}",
    "}"
  ];

  let coolFilter = new PIXI.AbstractFilter(fragmentSrc, uniforms);

  let bg = PIXI.Sprite.fromImage("https://s3-us-west-2.amazonaws.com/s.cdpn.io/167451/test_BG.jpg");
  bg.width = width;
  bg.height = height;
  bg.shader = coolFilter;
  stage.addChild(bg);

  let count = 0;

  function animate() {
    count += 0.01;

    coolFilter.uniforms.time.value = count;
    coolFilter.syncUniforms();

    renderer.render(stage);

    requestAnimFrame(animate);
  }

  requestAnimFrame(animate);
}

let invert = document.querySelector(".face")
invert.addEventListener("click", function(){
  if (invert.classList.contains("face-invert")){
      invert.classList.remove("face-invert")
} else {
  invert.classList.add("face-invert")
  }})


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
  discographySmoke();
});


