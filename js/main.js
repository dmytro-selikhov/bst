// alert('script is working!');

// new Swiper('.image-slider');

const swiper = new Swiper('.image-slider', {
  // // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    /*
    // Bullets
    clickable: true,
    // Dynamic Bullets 
    dynamicBullets: true,
    // Custom bullets
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },
    */

    // Fraction
    type: 'fraction',
    // Custom fraction
    renderFraction: function (currentClass, totalClass) {
      return 'Photo <span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
    },

    /*
    // Progressbar
    type: 'progressbar'
     */
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    // Possibility to drag
    draggable: true,
  },




  // Switch on or switch off draggable on PC
  simulateTouch: true,
  // Cursor sensitivity
  touchRatio: 1,
  // Angle of swipe operation - dragging
  touchAngel: 45,
  // Drag cursor
  grabCursor: true,

  // Switch when clicking on slide
  slideToClickedSlide: true,

  // Hash navigation
  hashNavigation: {
    // Watch state
    watchState: true,
  }

});