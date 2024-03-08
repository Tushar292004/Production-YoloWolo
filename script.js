
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

    TweenMax.from("nav", 1, {
      borderBottomWidth: "0px",
      ease: Expo.easeInOut,
      delay: 0.5,
    });

    TweenMax.staggerFrom(
      ".menu-list>li",
      1,
      {
        opacity: 0,
        x: -20,
        ease: Power3.easeInOut,
      },
      0.10
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

    TweenMax.from(".offers", 1, {
      opacity: 0,
      delay: 1,
      y: 20,
      ease: Expo.easeInOut,
    });

    TweenMax.from("#nav-btn", 1, {
      opacity: 0,
      delay: 1.6,
      y: 20,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".btn", 1, {
      opacity: 0,
      delay: 1.6,
      y: 20,
      ease: Expo.easeInOut,
    });

    TweenMax.from(".img", 2, {
      opacity: 0,
      delay: 1.6,
      y: -800,
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

  }, 4200);
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


const card = document.querySelector('.card__inner');
function flipCard() {
  card.classList.toggle('flipped');
}
setInterval(flipCard, 2000);

document.querySelector('.menu-list li:nth-child(3)').addEventListener('mouseenter', function() {
  console.log("visible");
  document.querySelector('.dropdown-container').classList.add('show');
});

document.querySelector('.menu-list li:nth-child(3)').addEventListener('mouseleave', function() {
  console.log("not visible");
  document.querySelector('.dropdown-container').classList.remove('show');
});

document.querySelector('.dropdown-toggle-new').addEventListener('click', function() {
  document.querySelector('.dropdown-new').classList.toggle('visible');
  this.classList.toggle('open');
});