let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let toggleBtn = $(".toggler");
let navBar = $("nav ul");
let overlay = $(".overlay");

function addActiveClass(e) {
  e.forEach((e) => {
    e.classList.toggle("active");
  });
}

toggleBtn.addEventListener("click", () => {
  addActiveClass([toggleBtn, navBar, $(".iti"), overlay]);
});

overlay.addEventListener("click", () =>
  addActiveClass([overlay, navBar, toggleBtn])
);
let input = $("#phone-number");

window.intlTelInput(input, {
  separateDialCode: true,
});

/* -------------------------------------- Drop Down List Toggler  -------------------------------------- */
let dropDownBtn = $$(".drop-down");

window.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("drop-down") ||
    e.target.parentElement.classList.contains("drop-down")
  ) {
    e.target.classList.toggle("active");

    console.log(e.target);
  } else {
    dropDownBtn.forEach((e) => e.classList.remove("active"));
  }
});
