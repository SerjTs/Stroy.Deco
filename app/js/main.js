$(function() {

  $('.top__slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../images/arrow-prev.png" alt="кнопка стрелка влево"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../images/arrow-next.png" alt="кнопка стрелка вправо"></button>',
  });
  
  $('.about__slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../images/arrow-prev-small.png" alt="кнопка стрелка влево"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../images/arrow-next-small.png" alt="кнопка стрелка вправо"></button>',
  });

  $('.accordion__header').on('click', function() {
    $('.accordion__text').slideUp();
    $(this).next().slideToggle();
    $('.accordion__header').removeClass('accordion__header--active');
    $(this).toggleClass('accordion__header--active');
  });
  
  $('.menu__btn').on('click', function() {
    $('.menu__list').slideToggle();
    // $('.menu__list').toggleClass('menu__list--mobile-visible');
  })

  // Кнопка скроллинга вверх
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 500) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

});
