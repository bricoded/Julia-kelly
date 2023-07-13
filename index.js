const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav ul');
const icon = document.querySelector('.btn-icon');
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');
  menu.classList.toggle('show');
  icon.classList.toggle('show');
})


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  })
})

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el))
