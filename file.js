/*toggle navbar*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);
function toggleNav() {
  navToggler.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
}

// close nav when clicking on a nav item
document.addEventListener("click", function (e) {
  if (e.target.closest("nav.item")) {
    toggleNav();
  }
});

// sticky header
window.addEventListener("scroll", function (e) {
  if (this.scrollY > 60) {
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.querySelector(".header").classList.remove("sticky");
  }
});

// menu tabs

const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("menu-tab-item") &&
    !e.target.classList.contains("active")
  ) {
    const target = e.target.getAttribute("data-target");
    menuTabs.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const menuSection = document.querySelector(".menu-section");
    menuSection
      .querySelector(".menu-tab-content.active")
      .classList.remove("active");
    menuSection.querySelector(target).classList.add("active");
  }
});

// testimonial sectioin


const reatingDivs = document.querySelectorAll(".reating");
function createStar(type, size) {
  const starType =
    type == "full"
      ? "fill.svg"
      : type == "half"
      ? "half_fill.svg"
      : "no_fill.svg";
  const star = document.createElement("img");
  star.setAttribute("src", starType);
  star.style.width = size;
  star.style.height = size;
  return star;
}

reatingDivs.forEach((reatingDiv) => {
  const reating = parseFloat(reatingDiv.dataset.reating);
  const size = reatingDiv.dataset.size + "px";
  for (let i = 0; i < parseInt(reating); i++) {
    const fullStar = createStar("full", size);
    reatingDiv.appendChild(fullStar);
  }
  if (reating !== parseInt(reating)) {
    const halfStar = createStar("half", size);
    reatingDiv.appendChild(halfStar);
  }
  const blankStar = parseInt(5 - reating);
  for (let i = 0; i < blankStar; i++) {
    const noStar = createStar("no_fill", size);
    reatingDiv.appendChild(noStar);
  }
});

