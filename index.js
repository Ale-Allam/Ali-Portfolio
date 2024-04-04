
let xMark = document.querySelector(".x-mark");
let burger = document.querySelector(".burger");
let headerr = document.querySelector("header .personal-links");
let headerLinks = document.querySelectorAll(".personal-links .link");
xMark.onclick = () => {
  headerr.classList.add('active')
}
burger.onclick = () => {
  headerr.classList.remove('active')
}
window.onresize = () => {
  if (window.innerWidth <= 1050) {
    headerr.classList.add('active')
  } else {
    headerr.classList.remove('active')
  }
}
headerLinks.forEach(link => {
  link.addEventListener('click', () => {
    headerr.classList.add('active');
  });
});

let introName = document.querySelector('.my-intro');
const letters = "A0BC1DEF2GHI3JKL4MNO5PQR6STU7VMX8YZ9"
window.addEventListener('load', function (e) {
  window.scrollTo(0, 0);
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    let num = 0;
    const intervalIntro = setInterval(() => {

      introName.style.scale = '1'
      introName.innerText = introName.innerText.split('').map((letter, index) => {
        if (index < num) {
          return introName.dataset.intro[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      }).join("");

      if (num >= introName.dataset.intro.length.toFixed()) {

        clearInterval(intervalIntro);

        introName.style.scale = '0'

        setTimeout(() => {
          document.querySelector('.intro-anim').style.transform = ' translateY(-100%)';
        }, 400)

        setTimeout(() => {
          document.body.style.overflow = '';
          document.querySelector('.intro-anim').remove();
        }, 1000);

      }
      num += 1 / 7;

    }, 30);

  }, 2500); // Delay for 1000 milliseconds (1 second)
});
