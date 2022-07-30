//
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

// !hover effect
var hoverDistort = new hoverEffect({
  parent: document.querySelector(".content__img"),
  intensity: 0.6,
  image1: "/assets/me.jpg",
  image2: "/assets/me_2.jpg",
  displacementImage: "/assets/8.jpg",
  imagesRatio: 1.2 / 1,
});
// ! end hover effect

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

const circleArea = document.querySelector(".circle__container__inner");
let circles = [...document.querySelectorAll(".circle")];
circles.shift();
console.log(circles);

let positions = {
  circleOne: { x: 0, y: 0 },
  circleTwo: { x: 0, y: 0 },
  circleThree: { x: 0, y: 0 },
  circleFour: { x: 0, y: 0 },
};

let width = window.innerWidth;
let height = window.innerHeight;

let x = 0;
let y = 0;

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const idInterval = setInterval(() => {
  x = getRndInteger(1000, 1300);
  y = getRndInteger(100, 700);
  console.log(x, y);
}, 400);
circleArea.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
  console.log(x, y);
  clearInterval(idInterval);
});

function animate() {
  // Animate circles
  positions.circleOne.x = lerp(
    positions.circleOne.x,
    (x - width / 2) * 0.2,
    0.1
  );
  positions.circleOne.y = lerp(
    positions.circleOne.y,
    (y - height / 2) * 0.2,
    0.1
  );

  positions.circleTwo.x = lerp(
    positions.circleTwo.x,
    (-x + width / 2) * 0.2,
    0.1
  );
  positions.circleTwo.y = lerp(
    positions.circleTwo.y,
    (y - height / 2) * 0.2,
    0.1
  );

  positions.circleThree.x = lerp(
    positions.circleThree.x,
    (x - width / 2) * 0.2,
    0.1
  );
  positions.circleThree.y = lerp(
    positions.circleThree.y,
    (-y + height / 2) * 0.2,
    0.1
  );

  positions.circleFour.x = lerp(
    positions.circleFour.x,
    (-x + width / 2) * 0.2,
    0.1
  );
  positions.circleFour.y = lerp(
    positions.circleFour.y,
    (-y + height / 2) * 0.2,
    0.1
  );

  circles[0].style.transform = `translate(-50%, -50%) translate3d(${positions.circleOne.x}px, ${positions.circleOne.y}px, 0)`;
  circles[1].style.transform = `translate(-50%, -50%) translate3d(${positions.circleTwo.x}px, ${positions.circleTwo.y}px, 0)`;
  circles[2].style.transform = `translate(-50%, -50%) translate3d(${positions.circleThree.x}px, ${positions.circleThree.y}px, 0)`;
  circles[3].style.transform = `translate(-50%, -50%) translate3d(${positions.circleFour.x}px, ${positions.circleFour.y}px, 0)`;

  requestAnimationFrame(animate);
}

animate();

container = document.querySelector(".hero__title");

var text = new Blotter.Text("Hoang Vien", {
  family: "monospace",
  bold: 800,
  size: 100,
  fill: "#ccd6f6",
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 10,
  paddingBottom: 10,
});

var material = new Blotter.FliesMaterial();
material.uniforms.uPointCellWidth.value = 0.02;
material.uniforms.uPointRadius.value = 2;
material.uniforms.uSpeed.value = 5;

var blotter = new Blotter(material, {
  texts: text,
});

var scope = blotter.forText(text);
scope.appendTo(container);

$(document).ready(function () {
  console.log("hehe");
  $(window).on("scroll", function () {
    var link = $(".navbar a.dot");
    var top = $(window).scrollTop();
    console.log(link, top);
    $("section").each(function () {
      var id = $(this).attr("id");
      var height = $(this).height();
      var offset = $(this).offset().top;
      if (top >= offset && top < offset + height) {
        link.removeClass("active");
        $(".navbar")
          .find('[data-scroll="' + id + '"]')
          .addClass("active");
      }
    });
  });
});
