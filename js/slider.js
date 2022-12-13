const swiper = new Swiper('.swiper', {
  
  // direction: 'vertical',
    // loop: true,
    cssMode: true,
  
    pagination: {
      el: '.swiper-pagination',
      type: "progressbar",
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: true,
    keyboard: true,
  });