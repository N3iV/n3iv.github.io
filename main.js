//  const btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//         gsap.to(".btn", 1, {
//           opacity: 0,
//           y: -40,
//           ease: Expo.easeInOut,
//         });

//         gsap.to(".text-wrapper > div", 1, {
//           x: "500",
//           ease: Expo.easeInOut,
//           delay: 1,
//           stagger: 0.1,
//         });

//         gsap.to(".text-wrapper", 3, {
//           y: -600,
//           scale: 4.5,
//           rotate: -90,
//           ease: Expo.easeInOut,
//           delay: 1.5,
//         });

//         gsap.to(".text", 1, {
//           opacity: 1,
//           ease: Expo.easeInOut,
//           delay: 3,
//         });

//         gsap.to(".text-wrapper > div", 4, {
//           x: "-3500",
//           ease: Expo.easeInOut,
//           delay: 3.5,
//           stagger: 0.05,
//         });
//         gsap.to(".text-wrapper", 3, {
//           opacity: 0,
//           ease: Expo.easeInOut,
//           delay: 4.5,
//         });

//         gsap.to(".text-container", 2, {
//           bottom: "-100%",
//           ease: Expo.easeInOut,
//           delay: 6,
//         });

//         let textWrapper = document.querySelector(".main");
//         textWrapper.innerHTML = textWrapper.textContent.replace(
//           /\S/g,
//           "<span class='letter'>$&</span>"
//         );

//         anime.timeline().add({
//           targets: ".main .letter",
//           opacity: [0, 1],
//           translateY: [200, 0],
//           translateZ: 0,
//           easing: "easeOutExpo",
//           duration: 2000,
//           delay: (el, i) => 7000 + 40 * i,
//         });
//       });


  // 
  let elements = document.querySelectorAll(".nav__link");

      elements.forEach((element) => {
        let innerText = element.innerText;
        element.innerHTML = "";

        let textContainer = document.createElement("div");
        textContainer.classList.add("block");

        for (let letter of innerText) {
          let span = document.createElement("span");
          span.innerText = letter.trim() === "" ? "\xa0" : letter;
          span.classList.add("letter");
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