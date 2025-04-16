<<<<<<< HEAD

  new Swiper('.swiper-wrapper', {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
=======
window.addEventListener('DOMContentLoaded', () => {
    const swiperEl = document.querySelector('swiper-container');
  
    // Set parameters via JavaScript
    swiperEl.setAttribute('autoplay-delay', '3000');
    swiperEl.setAttribute('autoplay-disable-on-interaction', 'false');
    swiperEl.setAttribute('centered-slides', 'true');
    swiperEl.setAttribute('space-between', '30');
    swiperEl.setAttribute('loop', 'true');
  });
  
>>>>>>> main
