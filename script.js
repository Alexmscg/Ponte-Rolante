AOS.init();

var swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 1,
      spaceBetween: 18
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    // when window width is >= 640px
    1188: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});

const btn = document.getElementById('button');

document.getElementById('meu-formulario')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   const serviceID = 'service_gkaqrfo';
   const templateID = 'template_2hx76cu';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert('Enviado com sucesso!');
    }, (err) => {
      alert(JSON.stringify(err));
    });
});