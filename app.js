// get elements
const navBar = document.getElementById("nav");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const toggleBtn = document.querySelector(".nav-toggle");

// set toggle btn
toggleBtn.addEventListener("click", (e) => {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************

const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeigth = navBar.getBoundingClientRect().height;
  if (scrollHeight > navHeigth) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** Toglle Dark Mode ************
const btnSwitch = document.getElementById("switch");
const ball = document.querySelector(".ball");
const mode = document.querySelectorAll(".mode");

btnSwitch.addEventListener("click", () => {
  mode.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (e.currentTarget.classList.contains("fa-sun")) {
        ball.classList.remove("dark");
        btnSwitch.classList.remove("switch-dark");
        document.body.classList.remove("dark-theme");
        document.querySelector(".form").style.background =
          "hsl(212deg 33% 89% / 37%)";
      }
      if (e.currentTarget.classList.contains("fa-moon")) {
        ball.classList.add("dark");
        btnSwitch.classList.add("switch-dark");
        document.body.classList.add("dark-theme");

        document.querySelector(".form").style.background =
          "rgb(14 101 166 / 15%)";
      }
    });
    console.log(document.documentElement.classList);
  });
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navBar.getBoundingClientRect().height;

    const containerHeight = linksContainer.getBoundingClientRect().height;

    const fixedNav = navBar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position + navHeight - 120;
      console.log("no fixed nav");

      if (navHeight < 94) {
        position = position + containerHeight + 5;
      } else {
        position = position - 85;
      }
    } else {
      console.log("fixed nav");
      if (navHeight > 100) {
        position = position + navHeight - 70;
      }
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});

/* --------  About Tab Section ---------------*/
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

/* --------- Slider Show Function ---------------*/

// get elements
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.style.transform = `translatex(${-counter * 100}%)`; //"translateX(-100%)";
  });
}

/** Contact Form  */
const client = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const action = document.getElementById("action");
const form = document.querySelector(".form");

// form.addEventListener('submit', function(event) {
//                 event.preventDefault();
//                 emailjs.init('YOUR_PUBLIC_KEY');
//                 // generate a five digit number for the contact_number variable
//                 this.contact_number.value = Math.random() * 100000 | 0;
//                 // these IDs from the previous steps
//                 emailjs.sendForm('contact_service', 'contact_form', this)
//                     .then(function() {
//                         console.log('SUCCESS!');
//                     }, function(error) {
//                         console.log('FAILED...', error);
//                     });
//             });
