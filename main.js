window.addEventListener("load", function () {
  gsap.to(".text-wrapper > div", 1, {
    x: "500",
    ease: Expo.easeInOut,
    delay: 1,
    stagger: 0.1,
  });

  gsap.to(".text-wrapper", 3, {
    y: -600,
    scale: 4.5,
    rotate: -90,
    ease: Expo.easeInOut,
    delay: 1.5,
  });

  gsap.to(".text", 1, {
    opacity: 1,
    ease: Expo.easeInOut,
    delay: 3,
  });

  gsap.to(".text-wrapper > div", 4, {
    x: "-3500",
    ease: Expo.easeInOut,
    delay: 3.5,
    stagger: 0.05,
  });
  gsap.to(".text-wrapper", 3, {
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 4.5,
  });

  gsap.to(".text-container", 2, {
    bottom: "-100%",
    ease: Expo.easeInOut,
    delay: 6,
  });
  gsap.to(".text-wrapper", 4, {
    display: "none",
    ease: Expo.easeInOut,
    delay: 5.5,
  });

  anime.timeline().add({
    targets: ".hero ",
    opacity: [0, 1],
    translateY: [200, 0],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 7000 + 40 * i,
  });
});

let elements = document.querySelectorAll(".nav__link");

elements.forEach((element) => {
  let innerText = element.innerText;
  element.innerHTML = "";

  let textContainer = document.createElement("div");
  textContainer.classList.add("block");

  for (let letter of innerText) {
    let span = document.createElement("span");
    span.innerText = letter.trim() === "" ? "\xa0" : letter;
    span.classList.add("rolling-letter");
    textContainer.appendChild(span);
  }

  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});

elements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.remove("play");
  });
});
const tabs = document.querySelector(".experience__filter");
let portfolioItems;
tabs.addEventListener("click", (e) => {
  console.log(e);
  if (
    e.target.classList.contains("tab-btn") &&
    !e.target.classList.contains("active")
  ) {
    tabs.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    // document.querySelector(".filter-status").classList.add("active");
    // document.querySelector(
    //   ".filter-status p"
    // ).innerHTML = `Filtering <span>${e.target.innerHTML}</span><span> works</span>`;
    setTimeout(() => {
      filterItems(e.target);
    }, 400);
    // setTimeout(() => {
    //   document.querySelector(".filter-status").classList.remove("active");
    // }, 400);
  }
});
function filterItems(filterBtn) {
  const seclectedCategory = filterBtn.getAttribute("data-filter");
  console.log(seclectedCategory);
  document.querySelectorAll(".experience__item").forEach((item) => {
    const category = item.getAttribute("data-category").split(",");
    if (
      category.indexOf(seclectedCategory) !== -1 ||
      seclectedCategory === "all"
    ) {
      item.classList.add("show");
    } else item.classList.remove("show");
  });
  portfolioItems = document.querySelectorAll(".experience__item.show");
}
