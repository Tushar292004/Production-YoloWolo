document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card.img");
  let isFlipped = false;

  // Add click event listener to the card
  card.addEventListener("click", function () {
      const frontSide = this.querySelector(".card__body--front");
      const backSide = this.querySelector(".card__body--back");

      // Toggle between front and back sides
      if (isFlipped) {
          // If currently flipped to back side, show front side
          frontSide.style.display = "block";
          backSide.style.display = "none";
      } else {
          // If currently showing front side, flip to back side
          frontSide.style.display = "none";
          backSide.style.display = "block";
      }

      // Toggle the flipped state
      isFlipped = !isFlipped;
  });
});

function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";

    // All other animations here
    TweenMax.from(".logo", 1, {
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut,
    });

    TweenMax.staggerFrom(
      "nav ul li",
      1,
      {
        opacity: 0,
        x: -20,
        ease: Power3.easeInOut,
      },
      0.08
    );

    TweenMax.from(".search", 1, {
      opacity: 0,
      delay: 0.5,
      x: -20,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".menu", 1, {
      opacity: 0,
      delay: 0.6,
      x: -20,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".title", 1, {
      opacity: 0,
      delay: 1,
      y: 20,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".btn", 1, {
      opacity: 0,
      delay: 1.6,
      y: 20,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".line-one", 1, {
      opacity: 0,
      delay: 2,
      y: -800,
      ease: Expo.easeInOut,
    });
    TweenMax.from(".line-two", 1, {
      opacity: 0,
      delay: 2.5,
      y: -800,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".img", 2, {
      opacity: 0,
      delay: 2.9,
      y: -800,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".year", 1, {
      opacity: 0,
      delay: 1.4,
      y: -20,
      ease: Expo.easeInOut,
    });

    TweenMax.staggerFrom(
      ".media ul li",
      2,
      {
        opacity: 0,
        delay: 3.2,
        y: 40,
        ease: Expo.easeInOut,
      },
      0.2
    );
  }, 4200); // Adjust this timeout duration according to your loader animation's duration
}

loaderAnimation();

function showSideBar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.add('visible');
  sidebar.style.visibility = 'visible';
}

function hideSideBar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('visible');
  setTimeout(() => {
    sidebar.style.visibility = 'hidden';
  }, 500); 
}
