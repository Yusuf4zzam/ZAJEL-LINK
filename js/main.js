let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

/* -------------------------------------- Loader Function  -------------------------------------- */
let loaderBox = $(".loader");

window.addEventListener("load", () => {
  loaderBox.classList.add("hide");

  setTimeout(() => {
    loaderBox.remove();
  }, 3000);
});

/* -------------------------------------- Srcoll Up  -------------------------------------- */
let scrollUpBtn = $(".scroll-up");

window.addEventListener("scroll", () => {
  scrollUpBtn.classList.toggle("active", window.scrollY > 400);
});

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

/* -------------------------------------- Dark Mode Button  -------------------------------------- */
let darkModeBtn = $("header .toggler");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  localStorage.setItem("body-color", document.body.className);

  darkModeBtn.classList.toggle("active");

  darkModeBtn.children[0].classList.toggle("fa-moon");

  darkModeBtn.children[0].classList.toggle("fa-sun");
});

if (localStorage.getItem("body-color") == "dark") {
  document.body.classList.add("dark");
  darkModeBtn.classList.add("active");
  darkModeBtn.children[0].classList.toggle("fa-sun");
}

/* -------------------------------------- Burger icon Toggler  -------------------------------------- */
let burgerToggler = $(".burger-toggler");

burgerToggler.addEventListener("click", () => {
  burgerTogglerFunc();
});

$(".overlay").addEventListener("click", () => {
  burgerTogglerFunc();
});

function burgerTogglerFunc() {
  burgerToggler.classList.toggle("open");

  $(".overlay").classList.toggle("active");

  $("nav .main-lists").classList.toggle("active");
}

/* -------------------------------------- Drop Down List Toggler  -------------------------------------- */
let dropDownBtn = $$(".drop-down-btn");

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("drop-down-btn")) {
    e.target.classList.toggle("active");
  } else if (e.target.parentElement.classList.contains("drop-down-btn")) {
    e.target.parentElement.classList.toggle("active");
  } else {
    dropDownBtn.forEach((e) => e.classList.remove("active"));
  }
});

/* -------------------------------------- Testmonials Carousal Toggler  -------------------------------------- */
let testmonialsBox = $$(".testmonials .box");
let testmonialsBullets = $$(".testmonials ul li");

testmonialsBullets.forEach((e) => {
  e.addEventListener("click", (e) => {
    testmonialsBullets.forEach((e) => e.classList.remove("active"));
    testmonialsBox.forEach((e) => e.classList.remove("active"));
    e.currentTarget.classList.add("active");
    testmonialsBox[e.currentTarget.dataset.index].classList.add("active");
  });
});

/* -------------------------------------- Start The intlTelInput Library  -------------------------------------- */
let input = $("#phone-number");

window.intlTelInput(input, {
  separateDialCode: true,
});

/* -------------------------------------- Start The Animation On Scroll Library  -------------------------------------- */
AOS.init();

/* -------------------------------------- Start The Counter Function  -------------------------------------- */
let countBox = $(".count");

let counterEl = $$(".count .box .nums");

let countStarted = false;

function numsCounter(e) {
  let goal = e.dataset.index;

  let count = setInterval(() => {
    e.textContent++;

    if (e.textContent == goal) clearInterval(count);
  }, 4000 / goal);
}

window.addEventListener("scroll", () => {
  if (window.scrollY >= countBox.offsetTop - 300) {
    if (!countStarted) {
      counterEl.forEach((e) => numsCounter(e));
    }

    countStarted = true;
  }
});
