window.addEventListener('DOMContentLoaded', () => {
    const swiperEl = document.querySelector('swiper-container');
  
    // Set parameters via JavaScript
    swiperEl.setAttribute('autoplay-delay', '3000');
    swiperEl.setAttribute('autoplay-disable-on-interaction', 'false');
    swiperEl.setAttribute('centered-slides', 'true');
    swiperEl.setAttribute('space-between', '30');
    swiperEl.setAttribute('loop', 'true');
  });
  